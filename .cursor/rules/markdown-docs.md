# Markdown Documentation Rules

These rules define how markdown source files should be structured for proper sidebar navigation and document generation in the P2P Foundation documentation site.

## Heading Structure

### For Whitepaper (splitByHeading: 2)
The whitepaper uses **H2 (`##`)** headings for main chapters and **H3 (`###`)** for subsections.

```markdown
# Document Title (skipped - added to skipSections)

## Abstract
Content...

## 1. Chapter Title
Introduction paragraph...

### 1.1 Section Title
Content...

### 1.2 Another Section
Content...

## 2. Next Chapter
...
```

**Result**: Each `##` heading creates a separate page with its own sidebar entry. `###` headings become subsection links within that page.

### For SDK (splitByHeading: 1)
The SDK uses **H1 (`#`)** headings for main sections and **H2 (`##`)** for subsections.

```markdown
# Document Title (skipped - added to skipSections)

# 1. Getting Started

## 1.1 Installation
Content...

## 1.2 Quick Start
Content...

# 2. Authentication
...
```

**Result**: Each `#` heading creates a separate page. `##` headings become subsection links.

## Code Blocks

### Always close code blocks properly
Every opening ` ``` ` must have a matching closing ` ``` `.

```markdown
# Good
```bash
npm install @p2p/sdk
```

# Bad - unclosed code block will cause errors
```bash
npm install @p2p/sdk
```

### Never use heading syntax inside code blocks as actual headings
The parser correctly ignores headings inside code blocks, but avoid confusion:

```markdown
# Good - comment inside code block
```bash
npm install @p2p/sdk
# This is a bash comment, not a heading
yarn add @p2p/sdk
```

# Bad - could confuse readers
```bash
# or
yarn add @p2p/sdk
```
```

Instead, put alternatives outside code blocks:

```markdown
# Better approach
```bash
npm install @p2p/sdk
```

Or using yarn:

```bash
yarn add @p2p/sdk
```
```

## Heading Naming Conventions

### Use numbered chapters for ordering
```markdown
## 1. The Vision
## 2. System Overview
## 3. Implementation
```

### Keep heading titles descriptive
- **Good**: `## 1. Getting Started`
- **Bad**: `## or` (too short, unclear)

### Use consistent formatting
- Remove bold markers (`**`) from headings - they're cleaned automatically
- Use sentence case or title case consistently

## Skip Sections Configuration

Add document titles or unwanted sections to `skipSections` in `docs.config.json`:

```json
{
  "skipSections": ["P2P Protocol Whitepaper", "P2P Protocol Whitepaper Update"]
}
```

## Validation

Before building, run validation to catch issues:

```bash
# Validate only
python3 build_docs.py --validate-only

# Build with validation (default)
python3 build_docs.py

# Skip validation (not recommended)
python3 build_docs.py --no-validate
```

### What validation checks:
- ✅ Unclosed code blocks
- ✅ Missing heading levels for splitByHeading config
- ✅ Suspiciously short headings at split level
- ✅ Source file existence

## Configuration Reference

### docs.config.json options per document:

| Option | Type | Description |
|--------|------|-------------|
| `splitByHeading` | number | Heading level to split on (1=H1, 2=H2) |
| `numberSections` | boolean | Add position numbers to filenames |
| `generateTocLinks` | boolean | Generate subsection links in sidebar |
| `skipSections` | string[] | Section titles to skip |
| `extractImages` | boolean | Extract base64 images to files |

## Examples

### Correct whitepaper structure:
```markdown
# P2P Protocol Whitepaper

## Abstract
Summary of the document...

## 1. The Vision
### 1.1 Introduction
### 1.2 Goals

## 2. System Overview
### 2.1 Architecture
### 2.2 Components
```

### Correct SDK structure:
```markdown
# P2P SDK Documentation

# 1. Getting Started
## 1.1 Installation
## 1.2 Quick Start

# 2. Authentication
## 2.1 API Keys
## 2.2 Tokens
```
