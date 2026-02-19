---
id: 05-5-insurance-claim-outcomes
sidebar_position: 6
title: "5. INSURANCE CLAIM OUTCOMES"
slug: insurance-claim-outcomes
---

*Design rationale: spc.5, spc.6*

> Only merchants can raise claims. No fee at T1; fees apply only if escalated (spc.3.3).

## 5.1 Outcome Matrix

**Fees:** See Section 6.2.

| Path | Merchant | CoT Admin |
|------|----------|-----------|
| **T1: Approved** | +Claim*, +0 RP | +5 RP |
| **T1: Rejected, no appeal** | -50 RP | +5 RP |
| **T2: Approved (overturns)** | +Claim* -2.5%, +50 RP | -100 RP, -1% stake |
| **T2: Approved (upholds)** | +Claim* -2.5%, +0 RP | +25 RP |
| **T2: Rejected** | -100 RP, -2.5% | +25 RP (if upheld) |
| **T3: Approved (overturns T2)** | +Claim* -5%, +150 RP | -500 RP, -10% stake |
| **T3: Approved (upholds T2)** | +Claim* -5%, +0 RP | +100 RP |
| **T3: Rejected (overturns T2)** | -200 RP, -5% stake if fraud | -500 RP, -10% stake |
| **T3: Rejected (upholds T2)** | -200 RP | +100 RP |

*Claim payout varies by SubType: `CLAIM_ABSCONDING` = 75%, `CLAIM_MERCHANT_FAULT` = 100%, `CLAIM_EXTERNAL` = 100% (see Section 3.3).

## 5.2 Payout Process

1. **Challenge Window:** 7-day delay after approval
2. **Source Priority:** CAIP > CALR > PIP
3. **Execution:** `freeFiatAmount` credited, USDC transferred

---