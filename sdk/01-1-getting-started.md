---
id: 01-1-getting-started
sidebar_position: 0
title: "1. Getting Started"
slug: getting-started
---

## **1.1 Installation**

Install the P2P SDK using your preferred package manager:

```bash
npm install @p2p/sdk
# or
yarn add @p2p/sdk
```

## **1.2 Quick Start**

Initialize the SDK in your application:

```typescript
import { P2PClient } from '@p2p/sdk';

const client = new P2PClient({
  apiKey: 'your-api-key',
  environment: 'production' // or 'sandbox'
});
```

## **1.3 Configuration Options**

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| apiKey | string | Yes | Your API key |
| environment | string | No | 'production' or 'sandbox' |
| timeout | number | No | Request timeout in ms |