#!/usr/bin/env python3
"""
P2P Foundation Documentation Builder

This script processes markdown source files and generates a complete Docusaurus
documentation site with auto-generated sidebars, navbar items, and multi-docs support.

Usage:
    python build_docs.py              # Build all docs
    python build_docs.py --clean      # Clean and rebuild
    python build_docs.py --watch      # Watch for changes (future)
"""

import json
import os
import re
import base64
import shutil
import argparse
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple


class DocBuilder:
    def __init__(self, config_path: str = "docs.config.json"):
        self.root_dir = Path(__file__).parent
        self.config_path = self.root_dir / config_path
        self.config = self._load_config()
        self.website_dir = self.root_dir  # Script is now inside website folder
        
    def _load_config(self) -> Dict[str, Any]:
        """Load the docs configuration file."""
        with open(self.config_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    
    def _slugify(self, text: str) -> str:
        """Convert text to URL-friendly slug."""
        # Remove special characters, convert to lowercase, replace spaces with hyphens
        slug = re.sub(r'[^\w\s-]', '', text.lower())
        slug = re.sub(r'[-\s]+', '-', slug).strip('-')
        return slug
    
    def _extract_images(self, content: str, doc_id: str) -> Tuple[str, int]:
        """Extract base64 images from markdown and save them as files.
        
        Also converts reference-style image syntax to inline syntax so images
        work properly when the document is split into sections.
        """
        output_dir = self.website_dir / "static" / "img" / doc_id
        output_dir.mkdir(parents=True, exist_ok=True)
        
        # Pattern for reference-style base64 images: [imageN]: <data:image/png;base64,DATA>
        # Note: angle brackets are optional to support both formats
        pattern = r'\[image(\d+)\]:\s*<?data:image\/([a-zA-Z]+);base64,([a-zA-Z0-9+/=\s]+)>?'
        
        # First pass: extract images and build a mapping of image numbers to file paths
        image_map = {}
        image_count = 0
        
        def extract_and_map(match):
            nonlocal image_count
            img_num = match.group(1)
            img_ext = match.group(2)
            img_data = match.group(3).replace('\n', '').replace(' ', '')
            
            filename = f'image{img_num}.{img_ext}'
            filepath = output_dir / filename
            img_path = f'/img/{doc_id}/{filename}'
            
            try:
                with open(filepath, 'wb') as f:
                    f.write(base64.b64decode(img_data))
                image_count += 1
                image_map[img_num] = img_path
                print(f"  📷 Extracted {filename}")
            except Exception as e:
                print(f"  ⚠️ Error saving {filename}: {e}")
            
            # Remove the reference definition entirely (we'll use inline syntax)
            return ''
        
        new_content = re.sub(pattern, extract_and_map, content)
        
        # Second pass: convert reference-style image usages to inline syntax
        # Pattern: ![][imageN] or ![alt text][imageN]
        def convert_to_inline(match):
            alt_text = match.group(1) if match.group(1) else ''
            img_num = match.group(2)
            if img_num in image_map:
                return f'![{alt_text}]({image_map[img_num]})'
            return match.group(0)  # Keep original if not found
        
        usage_pattern = r'!\[([^\]]*)\]\[image(\d+)\]'
        new_content = re.sub(usage_pattern, convert_to_inline, new_content)
        
        return new_content, image_count
    
    def _get_chapter_number(self, title: str) -> Optional[str]:
        """Extract chapter number from title like '0. Vision' or '14. Token Economics'."""
        clean_title = title.replace('**', '').replace('\\', '').strip()
        # Match patterns like "0.", "14.", "16." at start
        match = re.match(r'^(\d{1,2})\.', clean_title)
        if match:
            return match.group(1)
        return None
    
    def _clean_title(self, title: str) -> str:
        """Clean title by removing markdown formatting."""
        # Remove ** bold markers
        clean = title.replace('**', '')
        # Remove backslash escapes
        clean = clean.replace('\\', '')
        return clean.strip()
    
    def _parse_headings(self, content: str, split_level: int = 1) -> List[Dict[str, Any]]:
        """Parse markdown headings and build document structure."""
        lines = content.split('\n')
        sections = []
        current_section = None
        current_content = []
        
        # Pattern for markdown headings
        heading_pattern = re.compile(r'^(#{1,6})\s+(.+)$')
        
        for line in lines:
            match = heading_pattern.match(line)
            if match:
                level = len(match.group(1))
                title = match.group(2).strip()
                clean_title = self._clean_title(title)
                
                if level <= split_level:
                    # This is a main section - save previous and start new
                    if current_section:
                        current_section['content'] = '\n'.join(current_content)
                        sections.append(current_section)
                    
                    # Start new section
                    current_section = {
                        'level': level,
                        'title': clean_title,
                        'slug': self._slugify(clean_title),
                        'chapter_num': self._get_chapter_number(title),
                        'subsections': []
                    }
                    current_content = [line]
                elif current_section:
                    # This is a subsection - add to current chapter
                    current_section['subsections'].append({
                        'level': level,
                        'title': clean_title,
                        'slug': self._slugify(clean_title)
                    })
                    current_content.append(line)
                else:
                    # No current section yet, create one
                    current_section = {
                        'level': level,
                        'title': clean_title,
                        'slug': self._slugify(clean_title),
                        'chapter_num': None,
                        'subsections': []
                    }
                    current_content = [line]
            else:
                if current_section:
                    current_content.append(line)
                elif not sections and line.strip():
                    # Content before first heading (intro/frontmatter)
                    if not current_section:
                        current_section = {
                            'level': 1,
                            'title': 'Introduction',
                            'slug': 'intro',
                            'chapter_num': None,
                            'subsections': []
                        }
                        current_content = []
                    current_content.append(line)
        
        # Don't forget the last section
        if current_section:
            current_section['content'] = '\n'.join(current_content)
            sections.append(current_section)
        
        return sections
    
    def _generate_doc_files(self, sections: List[Dict], doc_config: Dict) -> List[str]:
        """Generate individual markdown files for each section."""
        output_dir = Path(self.root_dir / doc_config['outputDir'])
        output_dir.mkdir(parents=True, exist_ok=True)
        
        generated_files = []
        
        for i, section in enumerate(sections):
            # Create filename with number prefix for ordering
            chapter_num = section.get('chapter_num')
            
            if doc_config.get('numberSections', True):
                if chapter_num is not None:
                    # Use chapter number from the document itself
                    filename = f"{int(chapter_num):02d}-{section['slug']}.md"
                else:
                    # Use sequential number for sections without chapter numbers
                    filename = f"{i:02d}-{section['slug']}.md"
            else:
                filename = f"{section['slug']}.md"
            
            filepath = output_dir / filename
            
            # Document ID is filename without .md extension
            doc_id = filename[:-3]  # Remove .md
            
            # Clean the slug for URL (remove leading numbers like "00-")
            url_slug = re.sub(r'^\d+-', '', section['slug'])
            
            # Add frontmatter with explicit id to match sidebar references
            frontmatter = f"""---
id: {doc_id}
sidebar_position: {i}
title: "{section['title']}"
slug: {url_slug}
---

"""
            content = frontmatter + section['content'].strip()
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            
            generated_files.append({
                'filename': filename,
                'doc_id': doc_id,          # For sidebar references
                'url_slug': url_slug,       # For URL links
                'title': section['title'],
                'subsections': section.get('subsections', []),
                'position': i
            })
            
            print(f"  📄 Generated {filename}")
        
        return generated_files
    
    def _generate_sidebar(self, doc_config: Dict, files: List[Dict]) -> str:
        """Generate TypeScript sidebar configuration."""
        config_id = doc_config['id']
        sidebar_id = doc_config.get('sidebarId', f"{config_id}Sidebar")
        route_base = doc_config['routeBasePath']
        
        items = []
        for file_info in files:
            doc_id = file_info['doc_id']       # Use doc_id for Docusaurus references
            url_slug = file_info['url_slug']   # Use url_slug for href links
            title = file_info['title']
            subsections = file_info.get('subsections', [])
            
            # Build subsection links if generateTocLinks is enabled
            sub_items = []
            if doc_config.get('generateTocLinks', True) and subsections:
                for sub in subsections:
                    sub_items.append({
                        'type': 'link',
                        'label': sub['title'],
                        'href': f"/{route_base}/{url_slug}#{sub['slug']}"
                    })
            
            item = {
                'type': 'category',
                'label': title,
                'collapsible': True,
                'collapsed': True,
                'link': {'type': 'doc', 'id': doc_id},
                'items': sub_items
            }
            items.append(item)
        
        # Generate TypeScript with proper JSON formatting
        sidebar_ts = f"""import type {{SidebarsConfig}} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {{
  {sidebar_id}: {json.dumps(items, indent=4)},
}};

export default sidebars;
"""
        return sidebar_ts
    
    def _generate_docusaurus_config(self) -> str:
        """Generate the main Docusaurus configuration file."""
        docs = self.config['docs']
        navbar_config = self.config.get('navbar', {})
        footer_config = self.config.get('footer', {})
        
        # Build navbar items
        navbar_items = []
        for i, doc in enumerate(docs):
            if i == 0:
                # First doc uses the preset - standard docSidebar
                navbar_items.append({
                    'type': 'docSidebar',
                    'sidebarId': doc.get('sidebarId', f"{doc['id']}Sidebar"),
                    'position': doc.get('navbarPosition', 'left'),
                    'label': doc['navbarLabel'],
                })
            else:
                # Additional docs use plugins - need docsPluginId
                navbar_items.append({
                    'type': 'docSidebar',
                    'sidebarId': doc.get('sidebarId', f"{doc['id']}Sidebar"),
                    'position': doc.get('navbarPosition', 'left'),
                    'label': doc['navbarLabel'],
                    'docsPluginId': doc['id'],
                })
        
        # Build docs plugins config
        # First doc uses the preset, additional docs use plugins
        first_doc = docs[0]
        additional_docs = docs[1:] if len(docs) > 1 else []
        
        # Build plugins array for additional docs
        plugins_config = ""
        if additional_docs:
            plugins = []
            for doc in additional_docs:
                plugins.append(f"""[
      '@docusaurus/plugin-content-docs',
      {{
        id: '{doc["id"]}',
        path: '{doc["id"]}',
        routeBasePath: '{doc["routeBasePath"]}',
        sidebarPath: './sidebars/{doc["id"]}.ts',
      }},
    ]""")
            plugins_config = f"\n  plugins: [\n    {','.join(plugins)}\n  ]," if plugins else ""
        
        # Social links for footer
        social_links = footer_config.get('socialLinks', {})
        
        config = f"""import {{themes as prismThemes}} from 'prism-react-renderer';
import type {{Config}} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {{
  title: '{self.config.get("siteTitle", "P2P Foundation Docs")}',
  tagline: '{self.config.get("siteTagline", "Documentation")}',
  favicon: 'img/favicon.svg',

  url: 'https://docs.p2p.me',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {{
      tagName: 'link',
      attributes: {{
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicon.svg',
        media: '(prefers-color-scheme: light)',
      }},
    }},
    {{
      tagName: 'link',
      attributes: {{
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicondark.svg',
        media: '(prefers-color-scheme: dark)',
      }},
    }},
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;700&display=swap',
  ],

  clientModules: [
    './src/clientModules/tocAutoScroll.js',
  ],

  presets: [
    [
      'classic',
      {{
        docs: {{
          sidebarPath: './sidebars/{first_doc["id"]}.ts',
          routeBasePath: '{first_doc["routeBasePath"]}',
        }},
        blog: false,
        theme: {{
          customCss: './src/css/custom.css',
        }},
      }} satisfies Preset.Options,
    ],
  ],
{plugins_config}
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({{
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }}),
    ],
  ],

  themeConfig: {{
    docs: {{
      sidebar: {{
        hideable: false,
        autoCollapseCategories: true,
      }},
    }},
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {{
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }},
    navbar: {{
      title: '',
      logo: {{
        alt: '{navbar_config.get("logo", {}).get("alt", "P2P Foundation")}',
        src: '{navbar_config.get("logo", {}).get("src", "img/p2p-logo.svg")}',
      }},
      items: {json.dumps(navbar_items, indent=8)},
    }},
    footer: {{
      style: 'dark',
      links: [],
      copyright: `
        <div class="footer-row-container">
          <div class="footer-left">
            <img src="/img/p2p-logo.svg" alt="P2P Foundation" class="footer-logo" />
          </div>
          <div class="footer-center">
            <span>© ${{new Date().getFullYear()}} {footer_config.get("copyright", "P2P Foundation")}.</span>
          </div>
          <div class="footer-right">
            <a href="{social_links.get('discord', '#')}" target="_blank" rel="noopener noreferrer" class="footer-social-link discord"></a>
            <a href="{social_links.get('telegram', '#')}" target="_blank" rel="noopener noreferrer" class="footer-social-link telegram"></a>
            <a href="{social_links.get('twitter', '#')}" target="_blank" rel="noopener noreferrer" class="footer-social-link twitter"></a>
            <a href="{social_links.get('youtube', '#')}" target="_blank" rel="noopener noreferrer" class="footer-social-link youtube"></a>
          </div>
        </div>
      `,
    }},
    prism: {{
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    }},
  }} satisfies Preset.ThemeConfig,
}};

export default config;
"""
        return config
    
    def clean(self):
        """Clean generated files."""
        print("🧹 Cleaning generated files...")
        
        for doc in self.config['docs']:
            output_dir = Path(self.root_dir / doc['outputDir'])
            if output_dir.exists():
                shutil.rmtree(output_dir)
                print(f"  Removed {output_dir}")
        
        sidebars_dir = self.website_dir / "sidebars"
        if sidebars_dir.exists():
            shutil.rmtree(sidebars_dir)
            print(f"  Removed {sidebars_dir}")
    
    def build(self, clean: bool = False):
        """Build all documentation."""
        print("🚀 P2P Foundation Documentation Builder")
        print("=" * 50)
        
        if clean:
            self.clean()
        
        # Ensure sidebars directory exists
        sidebars_dir = self.website_dir / "sidebars"
        sidebars_dir.mkdir(parents=True, exist_ok=True)
        
        # Process each doc
        for doc_config in self.config['docs']:
            print(f"\n📚 Processing: {doc_config['navbarLabel']}")
            print("-" * 40)
            
            # Read source file
            source_path = self.root_dir / doc_config['source']
            if not source_path.exists():
                print(f"  ⚠️ Source file not found: {source_path}")
                continue
            
            with open(source_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract images if enabled
            if doc_config.get('extractImages', True):
                content, img_count = self._extract_images(content, doc_config['id'])
                if img_count > 0:
                    print(f"  ✅ Extracted {img_count} images")
            
            # Parse and split content
            split_level = doc_config.get('splitByHeading', 2)
            sections = self._parse_headings(content, split_level)
            
            # Filter out sections to skip
            skip_sections = doc_config.get('skipSections', [])
            if skip_sections:
                original_count = len(sections)
                sections = [s for s in sections if s['title'] not in skip_sections]
                skipped = original_count - len(sections)
                if skipped > 0:
                    print(f"  ⏭️  Skipped {skipped} sections")
            
            print(f"  📑 Found {len(sections)} sections")
            
            # Generate doc files
            files = self._generate_doc_files(sections, doc_config)
            
            # Generate sidebar
            sidebar_content = self._generate_sidebar(doc_config, files)
            sidebar_path = sidebars_dir / f"{doc_config['id']}.ts"
            with open(sidebar_path, 'w', encoding='utf-8') as f:
                f.write(sidebar_content)
            print(f"  📋 Generated sidebar: {sidebar_path.name}")
        
        # Generate main config
        print(f"\n⚙️ Generating docusaurus.config.ts")
        config_content = self._generate_docusaurus_config()
        config_path = self.website_dir / "docusaurus.config.ts"
        with open(config_path, 'w', encoding='utf-8') as f:
            f.write(config_content)
        
        print("\n" + "=" * 50)
        print("✅ Build complete!")
        print(f"\nTo preview: cd website && npm run start")
        print(f"To build:   cd website && npm run build")


def main():
    parser = argparse.ArgumentParser(description='Build P2P Foundation documentation')
    parser.add_argument('--clean', action='store_true', help='Clean and rebuild')
    parser.add_argument('--config', default='docs.config.json', help='Config file path')
    args = parser.parse_args()
    
    builder = DocBuilder(args.config)
    builder.build(clean=args.clean)


if __name__ == '__main__':
    main()
