# **P2P SDK Documentation**

Welcome to the P2P SDK documentation. This guide will help you integrate P2P functionality into your applications.

# **1. Getting Started**

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

# **3. Trading API**

## **3.1 Creating an Order**

```typescript
const order = await client.orders.create({
  type: 'buy',
  amount: 100,
  currency: 'USDC',
  fiatCurrency: 'INR',
  paymentMethod: 'upi'
});
```

## **3.2 Listing Orders**

```typescript
const orders = await client.orders.list({
  status: 'pending',
  limit: 10
});
```

## **3.3 Order Lifecycle**

Orders go through the following states:
1. `pending` - Order created, waiting for match
2. `matched` - Counterparty found
3. `payment_pending` - Awaiting fiat payment
4. `confirming` - Payment being verified
5. `completed` - Trade successful
6. `cancelled` - Trade cancelled
7. `disputed` - Under dispute resolution

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

# **5. Error Handling**

## **5.1 Error Codes**

```typescript
try {
  await client.orders.create(orderData);
} catch (error) {
  if (error.code === 'INSUFFICIENT_BALANCE') {
    // Handle insufficient balance
  } else if (error.code === 'RATE_LIMITED') {
    // Handle rate limiting
  }
}
```

## **5.2 Common Errors**

| Code | Description | Solution |
|------|-------------|----------|
| INVALID_API_KEY | API key is invalid | Check your API key |
| RATE_LIMITED | Too many requests | Implement backoff |
| INSUFFICIENT_BALANCE | Not enough funds | Add funds to wallet |

# **6. Best Practices**

## **6.1 Security**

- Never expose API keys in client-side code
- Use environment variables for sensitive data
- Implement proper error handling
- Validate webhook signatures

## **6.2 Performance**

- Cache frequently accessed data
- Use pagination for large datasets
- Implement request batching where possible

# **7. Support**

For additional support:
- Documentation: https://docs.p2p.me
- Discord: https://discord.gg/p2pfoundation
- Email: support@p2p.me
