---
id: token-utility
sidebar_position: 1
title: "Token Utility"
slug: token-utility
---

## Governance

Token holders vote on protocol parameters including fees, transaction limits, merchant rules, oracle configurations, and treasury allocations. Governance follows the OpenZeppelin Governor model with a 7-day voting period, 4% quorum for standard proposals and 20% for critical changes, and a 7-day timelock before execution.

One staked $P2P equals one vote. Delegation is supported, allowing passive holders to delegate their voting power to active participants.

## Staking

$P2P tokens serve as the economic backbone of the Circles of Trust system. Circle Admins stake tokens to operate merchant networks. Community members can delegate $P2P to Circles of Trust to earn a share of circle revenue based on working capital ratio.

Merchants stake USDC to join Circles. All stakes are slashable for violations including order abandonment, dispute losses, and fraud. Repeated violations result in full slashing and blacklisting.

## Fee Distribution

The protocol charges a configurable spread on each transaction, generating protocol revenue. This revenue is distributed across the network's participants:

| Recipient | Share of Revenue |
|-----------|-----------------|
| Merchants + Delegators | 53.33% |
| Buy-and-Burn | 20% (increasing to 33% via governance) |
| Insurance Pools | 17.78% |
| Circle Admins | 8.89% |

Revenue flows directly to network participants. The foundation receives no direct protocol fee revenue.

---