---
id: 06-6-parameters
sidebar_position: 7
title: "6. PARAMETERS"
slug: parameters
---

## 6.1 Timing

| Parameter | Dispute | Claim |
|-----------|---------|-------|
| T1 SLA | 4 hours | 7 days |
| T2 SLA | 72 hours | 72 hours |
| T3 SLA | 7 days | 7 days |
| Appeal Window | 48 hours | 48 hours |
| Execution Delay | 24 hours | 7 days |
| Voting Delay | 1 day  | 1 day |

## 6.2 Fees (spc.3.3)

**Disputes (from order escrow):**

| Tier | Fee | Cumulative | Distribution |
|------|-----|------------|--------------|
| T1 | 2.5% | 2.5% | Admin 100% |
| T2 | +2.5% | 5% | Jurors 100% |
| T3 | +5% | 10% | PIP 100% |


**Claims (from merchant stake):**

| Tier | Fee | Cumulative | Distribution |
|------|-----|------------|--------------|
| T1 | 0% | 0% | N/A |
| T2 | 2.5% | 2.5% | Jurors 100% |
| T3 | +2.5% | 5% | PIP 100% |

## 6.3 RP Penalties

**Disputes:**

[S18, S32, S33: RP Penalty Balance]

| Actor | Outcome | Tier | SELL Order | BUY Order |
|-------|---------|------|------------|-----------|
| **Dispute Loser** |
| User | Loses dispute | T1 | -25 | -250 |
| User | Loses dispute | T2 | -100 | -500 |
| User | Loses dispute | T3 | -300 | -1000 |
| Merchant | Loses dispute | T1 | -25 | -25 |
| Merchant | Loses dispute | T2 | -100 | -100 |
| Merchant | Loses dispute | T3 | -300 | -300 |
| **Dispute Winner** |
| User or Merchant | Wins dispute | T1 | +10 | +10 |
| User or Merchant | Wins dispute | T2 | +50 | +50 |
| User or Merchant | Wins dispute | T3 | +150 | +150 |
| **CoT Admin** |
| Admin | Resolves T1 (any outcome) | T1 | +5 | +5 |
| Admin | T1 decision overturned at T2 | T2 | -100 | -100 |
| Admin | T1 decision upheld at T2 | T2 | +25 | +25 |
| Admin | T1 decision overturned at T3 | T3 | -500 | -500 |
| Admin | T1 decision upheld at T3 | T3 | +100 | +100 |
| **T2 Jurors** |
| Juror | Votes with majority (T2 final) | T2 | +50 | +50 |
| Juror | Votes against majority (T2 final) | T2 | -50 | -50 |
| Juror | T2 vote aligned with T3 (T3 overturns T2) | T3 | +300 | +300 |
| Juror | T2 vote misaligned with T3 (T3 overturns T2) | T3 | -300 | -300 |
| Juror | T2 vote aligned with T3 (T3 upholds T2) | T3 | +100 | +100 |
| Juror | T2 vote misaligned with T3 (T3 upholds T2) | T3 | -100 | -100 |


**Claims:**

*Only merchants can raise claims (see Section 5.1).*

| Actor | Outcome | Tier | RP Change |
|-------|---------|------|-----------|
| **Merchant (Claimant)** |
| Merchant | Claim approved | T1 | +0 |
| Merchant | Claim rejected, no appeal | T1 | -50 |
| Merchant | Claim approved (overturns T1 rejection) | T2 | +50 |
| Merchant | Claim approved (upholds T1 approval) | T2 | +0 |
| Merchant | Claim rejected | T2 | -100 |
| Merchant | Claim approved (overturns T2 rejection) | T3 | +150 |
| Merchant | Claim approved (upholds T2 approval) | T3 | +0 |
| Merchant | Claim rejected | T3 | -200 |
| **CoT Admin** |
| Admin | Resolves T1 (any outcome) | T1 | +5 |
| Admin | T1 decision upheld at T2 | T2 | +25 |
| Admin | T1 decision overturned at T2 | T2 | -100 |
| Admin | T1 decision upheld at T3 | T3 | +100 |
| Admin | T1 decision overturned at T3 | T3 | -500 |

## 6.4 Staking Penalties

| Parameter | Value |
|-----------|-------|
| `dispute.merchantSlashT2` | 10% |
| `dispute.merchantSlashT3` | 50% |
| `dispute.adminSlashT2` | 1% |
| `dispute.adminSlashT3` | 10% |
| `claim.merchantSlashFraud` | 5% |
| `claim.adminSlashWrong` | 5% |

## 6.5 Quorum & Voting

*Design rationale: spc.8*

**Dispute Governance (T3 escalations):**

[S26: Quorum Analysis]

| Parameter | Value |
|-----------|-------|
| Jury size | 5 (VRF selected) |
| Jury majority | 3/5 (60%) |
| T3 quorum | 4% staked $P2P |
| T3 majority | 50% + 1 |

**Protocol Governance:** See Section 9.1 for proposal requirements (quorum, threshold, bond).

## 6.6 Pool Health Thresholds

| Pool | Min Balance | Target | Action if Below |
|------|-------------|--------|-----------------|
| CAIP | 1% monthly volume | 3% | Pause onboarding |
| CALR | 30 days earnings* | 60 days | Block unstake |
| PIP | $100k | $500k | Emergency funding vote |
| All pools | Depleted | N/A | Emergency gov vote; new claims queued |

*CALR "Min Balance" refers to earnings equivalent, not lock duration (lock is always 30 days rolling per Section 7.3).

---