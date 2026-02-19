---
id: insurance-system
sidebar_position: 5
title: "Insurance System"
slug: insurance-system
---

Circles of Trust include a three-tier insurance system to protect participants:

## CAIP (Circle Admin Insurance Pool)

First-line coverage funded by a percentage of Circle volume plus slashed stakes. Covers routine incidents within the Circle's risk profile.

## CALR (Circle Admin Locked Rewards)

A portion of admin earnings locked in a rolling buffer. If collusion or negligence is detected, CALR is slashed before the admin can withdraw. This makes collusion economically irrational.

## PIP (Protocol Insurance Pool)

Backstop for systemic failures or when lower-tier pools are depleted. Large PIP claims require governance approval to prevent single actors from draining protocol reserves.

Insurance claims draw from pools in strict priority order: CAIP first, then CALR, then PIP.

---