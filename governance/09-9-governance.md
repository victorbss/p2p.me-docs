---
id: 09-9-governance
sidebar_position: 10
title: "9. GOVERNANCE"
slug: governance
---

## 9.1 Proposal Requirements

**Standard Proposals:** [S27]

| Type | Min RP | Bond | Threshold | Quorum |
|------|--------|------|-----------|--------|
| Parameter Change | 10,000 | 500 $P2P | 66% | 15% |
| Contract Upgrade | 10,000 | 500 $P2P | 66% | 15% |
| Whitelisting | 10,000 | 500 $P2P | 66% | 15% |
| Audit | 1,000 | 100 $P2P | 50%+1 | 5% |

**Critical Proposals (emergency actions):**

| Type | Min RP | Bond | Threshold | Quorum |
|------|--------|------|-----------|--------|
| Emergency Pause | 5,000 | 250 $P2P | 66% | 10% |
| Pool Emergency Fund | 5,000 | 250 $P2P | 66% | 10% |

*Critical proposals use reduced quorum (10%) for faster response to urgent situations but maintain supermajority threshold.*

Failed proposals: bond burned, -50 RP (or -200 for failed audits)

## 9.2 Governable Parameters

- **User:** RP rewards (2 per order), verification bonuses (300), tier thresholds (500/2k/5k/10k)
- **Merchant:** Fee % (2%), stake range ($250-$1000), cooldowns
- **Admin:** Min stake ($250), CALR lock (33%), delegation multipliers
- **Circle:** exchangeToken, settlementToken, AMM pool, slippage limits

---