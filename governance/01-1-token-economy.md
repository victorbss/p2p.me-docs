---
id: 01-1-token-economy
sidebar_position: 2
title: "1. TOKEN ECONOMY"
slug: token-economy
---

*Design rationale: spc.1, spc.2*

## 1.1 Token Utility

| Function | Description |
|----------|-------------|
| **Governance** | Voting power = staked `$P2P` only |
| **Public Delegation** | Community delegates to CoT admins; only `$P2P` grants voting rights |
| **CoT Admin Stake** | Required to operate Circle (in `exchangeToken`) |
| **Merchant Stake** | Custodial liquidity for order settlement (spc.2.1) |
| **Insurance** | Slashed stakes flow to CAIP/PIP |

## 1.2 Staking Requirements

**CoT Admin:**

| Parameter | Value |
|-----------|-------|
| Base Stake | $250 worth of `exchangeToken` |
| Unstake Cooldown | 30 days (configurable, min enforced) |
| During Cooldown | Cannot accept new merchants, volume frozen |

**Merchant:**

| Parameter | Value |
|-----------|-------|
| Min Stake | $250 worth of `exchangeToken` |
| Max Stake | $1000 worth of `exchangeToken` |
| Max Circles | 3 |
| Usage | Working Capital for Order Fulfillment (protocol-controlled) |


## 1.3 Public Delegation

| Circle Type | Delegation Token | Voting Rights | Capacity Effect |
|-------------|------------------|---------------|-----------------|
| `$P2P` Circle | `$P2P` | Yes | Increases order limits |
| Non-`$P2P` Circle | Circle's `exchangeToken` | No | Increases order limits |

**Progressive Multipliers:** See Section 10.5 for Admin/Circle tier mapping (C1-C5), merchant caps, and delegation limits.

**Delegation Economics:**

[S19: Merchant Economics]

- Delegators receive 10% of Circle fees
- Risk: Slashed proportionally if admin penalized
- Limits: Max 4x circle-stake, 15-day undelegate cooldown

---