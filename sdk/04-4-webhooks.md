---
id: 04-4-webhooks
sidebar_position: 3
title: "4. Webhooks"
slug: webhooks
---

# **4. Webhooks**

## **4.1 Setting Up Webhooks**

Configure webhook endpoints to receive real-time notifications:

```typescript
await client.webhooks.create({
  url: 'https://your-app.com/webhooks/p2p',
  events: ['order.matched', 'order.completed', 'dispute.created']
});
```

## **4.2 Webhook Events**

| Event | Description |
|-------|-------------|
| order.created | New order created |
| order.matched | Order matched with counterparty |
| order.completed | Trade completed successfully |
| dispute.created | Dispute opened |
| dispute.resolved | Dispute resolved |