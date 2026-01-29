---
id: 03-3-trading-api
sidebar_position: 2
title: "3. Trading API"
slug: trading-api
---

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