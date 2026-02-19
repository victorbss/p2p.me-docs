---
id: how-circles-work
sidebar_position: 2
title: "How Circles Work"
slug: how-circles-work
---

## Circle Registration

Any wallet can connect to the protocol contract to register a Circle. Each wallet address can create one Circle, automatically designating the creator as the Circle Admin. The Circle Admin stakes a minimum amount of $P2P tokens (configurable per country by the Protocol Admin).

Registration requires:
- Currency for the circle
- Circle name
- Auto-approval setting for payment channels
- Community link (Discord, Telegram, etc.)
- Admin stake amount in $P2P tokens
- Custom exchange token address for merchant staking

Upon successful registration, the system generates a unique CircleId and the Circle is marked as ACTIVE, enabling merchant participation and order assignment.

A Circle is eligible for receiving orders when:
1. The $P2P token stake on the circle meets the minimum threshold
2. At least one merchant has joined the circle

## Circle Lifecycle

Circles move through three states: DEFAULT, ACTIVE, and INACTIVE. A Circle transitions to INACTIVE if its $P2P token stake drops below the protocol-defined minimum threshold for its country.

---