import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'P2P Foundation Docs',
  tagline: 'Documentation for P2P Foundation',
  favicon: 'img/favicon.svg',

  url: 'https://docs.p2p.me',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicon.svg',
        media: '(prefers-color-scheme: light)',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/img/favicondark.svg',
        media: '(prefers-color-scheme: dark)',
      },
    },
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
      {
        docs: {
          sidebarPath: './sidebars/whitepaper.ts',
          routeBasePath: 'whitepaper',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk',
        path: 'sdk',
        routeBasePath: 'sdk',
        sidebarPath: './sidebars/sdk.ts',
      },
    ]
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: true,
      },
    },
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'P2P Foundation',
        src: 'img/p2p-logo.svg',
      },
      items: [
        {
                "type": "docSidebar",
                "sidebarId": "whitepaperSidebar",
                "position": "left",
                "label": "Whitepaper"
        },
        {
                "type": "docSidebar",
                "sidebarId": "sdkSidebar",
                "position": "left",
                "label": "SDK",
                "docsPluginId": "sdk"
        }
],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `
        <div class="footer-row-container">
          <div class="footer-left">
            <img src="/img/p2p-logo.svg" alt="P2P Foundation" class="footer-logo" />
          </div>
          <div class="footer-center">
            <span>© ${new Date().getFullYear()} P2P Foundation.</span>
          </div>
          <div class="footer-right">
            <a href="https://discord.gg/p2pfoundation" target="_blank" rel="noopener noreferrer" class="footer-social-link discord"></a>
            <a href="https://t.me/P2Pdotme" target="_blank" rel="noopener noreferrer" class="footer-social-link telegram"></a>
            <a href="https://x.com/p2pdotfound" target="_blank" rel="noopener noreferrer" class="footer-social-link twitter"></a>
            <a href="https://www.youtube.com/@onchainbank" target="_blank" rel="noopener noreferrer" class="footer-social-link youtube"></a>
          </div>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
