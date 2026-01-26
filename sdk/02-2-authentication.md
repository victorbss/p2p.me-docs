---
id: 02-2-authentication
sidebar_position: 2
title: "2. Authentication"
slug: authentication
---

# **2. Authentication**

## **2.1 API Keys**

Generate API keys from your P2P dashboard. Keep your keys secure and never expose them in client-side code.

## **2.2 JWT Tokens**

For user-specific operations, use JWT tokens:

```typescript
const token = await client.auth.getToken({
  userId: 'user-123',
  permissions: ['trade', 'view']
});
```