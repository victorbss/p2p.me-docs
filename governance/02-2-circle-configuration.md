---
id: 02-2-circle-configuration
sidebar_position: 3
title: "2. CIRCLE CONFIGURATION"
slug: circle-configuration
---

## 2.1 Whitelist System

| Component | Criteria |
|-----------|----------|
| **Exchange Tokens** | Audited ERC-20, sufficient liquidity, no rebase/fee-on-transfer |
| **Settlement Tokens** | Stablecoins only (USDC, USDT, DAI, regional) |
| **AMM Pools** | Verified DEX, min $100k TVL |

**Swap Behavior:**
- If `exchangeToken == settlementToken`: Direct settlement
- If different: Atomic swap via whitelisted AMM pool (serves as price oracle)

---