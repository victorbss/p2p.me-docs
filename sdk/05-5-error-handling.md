---
id: 05-5-error-handling
sidebar_position: 4
title: "5. Error Handling"
slug: error-handling
---

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