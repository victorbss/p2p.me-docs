---
id: merchant-onboarding
sidebar_position: 3
title: "Merchant Onboarding"
slug: merchant-onboarding
---

## Registration

Merchants specify the CircleId of the Circle they wish to join. The system verifies all eligibility criteria, including country-specific minimum and maximum stake requirements, before completing registration. A protocol-wide configurable limit on the maximum number of merchants per Circle is enforced.

Merchants stake USDC to join Circles. If the Circle has auto-approval enabled, the merchant's payment channel is approved immediately. Otherwise, it enters a pending state for Circle Admin review.

## Unregistration

When a merchant initiates an unstake request:

1. If the merchant's USDC balance is greater than or equal to the delegated stake amount, the request proceeds. The delegated portion is moved to the delegation pool, and the remaining amount becomes eligible for withdrawal after a cooldown period (default 30 days).
2. If the balance is less than the delegated stake requirement, the unstake request is rejected. The merchant must increase their stake or complete sell orders to raise their balance.
3. Upon successful unstake, the merchant is dissociated from the current Circle. After the cooldown period, they can join any other Circle.

## Blacklisting

Circle Admins can blacklist merchants within their circle, restricting them from operations including orders and payment channel modifications. Unstaking remains permitted for blacklisted merchants.

---