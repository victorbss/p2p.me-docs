# P2P Foundation Documentation

Automated documentation pipeline for P2P Foundation using Docusaurus.

## Quick Start

```bash
# Install dependencies
npm install

# Build documentation from sources
python3 build_docs.py

# Start dev server
npm run start
```

## Project Structure

```
Documentation/                 # Git repository root
├── sources/                   # 📁 SOURCE OF TRUTH - Add your MD files here
│   ├── whitepaper.md         # Whitepaper documentation
│   └── sdk.md                # SDK documentation
│
├── docs.config.json          # ⚙️ Configuration for all documentation
├── build_docs.py             # 🔧 Build script
│
├── docs/                     # Generated whitepaper docs (auto-generated)
├── sdk/                      # Generated SDK docs (auto-generated)
├── sidebars/                 # Generated sidebars (auto-generated)
├── docusaurus.config.ts      # Generated config (auto-generated)
│
├── src/                      # React components & styling
├── static/                   # Static assets (images, etc.)
├── package.json              # Node.js dependencies
│
└── .github/
    └── workflows/
        └── deploy.yml        # CI/CD pipeline
```

## Adding New Documentation

### Step 1: Create your markdown file

Add a new `.md` file to the `sources/` folder:

```markdown
# **My Documentation Title**

Introduction text here.

# **1. First Chapter**

## **1.1 Subsection**

Content here...

# **2. Second Chapter**

More content...
```

**Important:** Use `#` (H1) for main chapters and `##` (H2) for subsections.

### Step 2: Add to configuration

Edit `docs.config.json` and add your doc to the `docs` array:

```json
{
  "docs": [
    {
      "id": "mydoc",
      "source": "sources/mydoc.md",
      "outputDir": "mydoc",
      "routeBasePath": "mydoc",
      "navbarLabel": "My Doc",
      "navbarPosition": "left",
      "sidebarId": "mydocSidebar",
      "extractImages": true,
      "splitByHeading": 1,
      "numberSections": true,
      "generateTocLinks": true,
      "skipSections": ["My Documentation Title"]
    }
  ]
}
```

### Step 3: Build

```bash
python3 build_docs.py
```

That's it! Your documentation will be available at `/mydoc` with a navbar link.

## Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `id` | string | Unique identifier for the doc |
| `source` | string | Path to source markdown file |
| `outputDir` | string | Where to generate the doc files |
| `routeBasePath` | string | URL path (e.g., `/sdk`) |
| `navbarLabel` | string | Label shown in navbar |
| `navbarPosition` | string | `left` or `right` |
| `sidebarId` | string | Sidebar identifier |
| `extractImages` | boolean | Extract base64 images to files |
| `splitByHeading` | number | Split on heading level (1 = H1) |
| `numberSections` | boolean | Add number prefixes to files |
| `generateTocLinks` | boolean | Generate TOC links in sidebar |
| `skipSections` | array | Section titles to exclude |

## Commands

```bash
# Build all documentation
python3 build_docs.py

# Clean and rebuild
python3 build_docs.py --clean

# Start development server
npm run start

# Build for production
npm run build
```

## CI/CD Pipeline

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. **On every push to `main`:**
   - Builds documentation from sources
   - Builds the Docusaurus site
   - Deploys to GitHub Pages

2. **On pull requests:**
   - Builds and validates (no deployment)

### Setup GitHub Pages

1. Go to your repo Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch to trigger deployment

## Markdown Format Guidelines

### Chapter Structure

Use H1 (`#`) for main chapters:
```markdown
# **0. Vision**
# **1. Getting Started**
# **2. API Reference**
```

Use H2 (`##`) for subsections:
```markdown
## **1.1 Installation**
## **1.2 Configuration**
```

### Images

You can embed base64 images and they'll be automatically extracted:
```markdown
![Description][image1]

[image1]: data:image/png;base64,iVBORw0KGgo...
```

### Code Blocks

Standard markdown code blocks are supported:
````markdown
```typescript
const client = new P2PClient({ apiKey: 'xxx' });
```
````

## Deployment Options

### GitHub Pages (included)
Push to `main` branch - automatic deployment via GitHub Actions.

### Vercel
```bash
npm run build
# Deploy the `build/` folder
```

### Netlify
Connect your GitHub repo, set build command to:
```
python3 build_docs.py && npm run build
```

## License

© P2P Foundation
