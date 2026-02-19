# $P2P Token Economics

## Overview

$P2P is an ownership token. Holders control protocol financials, vote on operational decisions, and hold enforceable claim over protocol intellectual property. The token is structured so that revenue flows, parameter changes, treasury allocation, and IP stewardship are governed by token holders rather than a centralized operator. Economic participation through staking, delegation, and buy-and-burn connects holder incentives directly to protocol performance.

For an investor-oriented overview with FAQs and reading order, see the [`Investor Guide`](/investor-guide).

### Token Details

| Field | Value |
|-------|-------|
| Name | P2P Governance Token |
| Ticker | $P2P |
| Total Supply | 25,800,000 (25.8M at launch) |
| Initial Float | 12.9M at TGE (10M sale + 2.9M liquidity = 50%) |
| Future Issuance | Only via governance-approved proposals (futarchy) |

---

## Token Utility

### Governance

Token holders vote on protocol parameters such as fees, limits, merchant rules, oracle configs, and treasury allocation. One staked $P2P = one vote, with delegation. The governance model uses OpenZeppelin Governor-style mechanics with phased decentralization. See [`/governance`](/governance) for details.

### Staking

Circle Admins stake $P2P to operate merchant networks. Community members delegate $P2P to Circles to participate in revenue sharing. Merchants stake USDC as working capital. The staking design creates skin-in-the-game at every layer. Admins risk their stake on operational quality, merchants risk theirs on order fulfillment, and delegators share in both risk and reward. See [`/circles-of-trust`](/circles-of-trust) for details.

### Fee Distribution

Protocol revenue is routed across participants. The split is governance-configurable. The target model follows.

| Recipient | Share of Revenue |
|-----------|-----------------|
| Merchants + Delegators | 53.33% |
| Buy-and-Burn | 20% (increasing to 33% via governance) |
| Insurance Pools | 17.78% |
| Circle Admins | 8.89% |

The design intent is that no single party captures a majority of protocol revenue. Merchants earn the most because they provide working capital and operational labor. Buy-and-burn connects token value to protocol usage. Insurance pools exist so disputes don't become externalised costs.

---

## Token Allocation

| Category | Tokens | % of Supply | Vesting |
|----------|--------|-----------|---------|
| **MetaDAO Sale** | **10,000,000** | **38.8%** | Unlocked at launch |
| **Liquidity** | **2,900,000** | **11.2%** | Treasury-provided to DEX pools at launch |
| **Team** | **7,740,000** | **30%** | Performance-based: 5 tranches at 2x, 4x, 8x, 16x, 32x ICO price (min 18 months) |
| **Investors** | **5,160,000** | **20%** | 1-year cliff (20%), then 20% per quarter for 4 quarters |
| **Total** | **25,800,000** | **100%** | |

No investor or team tokens unlock at TGE. At launch, 12.9M tokens circulate (10M sale + 2.9M liquidity). Future issuance is governance-gated per the documented model.

---

## MetaDAO Sale

The $P2P token launches through a MetaDAO-style sale mechanism designed for fair, community-first distribution.

### How It Works

1. Users commit USDC during a 4-day commitment window
2. Founders set a discretionary cap on total raise accepted
3. If oversubscribed, allocations and refunds are distributed pro-rata
4. 10M tokens are distributed proportionally among all participants at launch
5. Post-sale, the treasury provides 20% of raised USDC and 2.9M tokens to liquidity pools
6. Mint authority transfers to the market-governed treasury

### XP-Based Priority

Existing protocol users with XP receive allocations and priority access. Users who have actively used the protocol through trades, referrals, and community participation are rewarded with preferential positioning in the sale.

---

## Vesting Schedules

### Team Tokens (30% / 7.74M)

Team tokens follow the MetaDAO performance package model. Rather than time-based vesting, tokens unlock based on protocol performance milestones.

- 5 equal tranches of 1,548,000 tokens each
- Tranche 1 unlocks at 2x ICO price
- Tranche 2 unlocks at 4x ICO price
- Tranche 3 unlocks at 8x ICO price
- Tranche 4 unlocks at 16x ICO price
- Tranche 5 unlocks at 32x ICO price
- Minimum unlock time is 18 months from launch per tranche
- Price measured via 3-month TWAP

This aligns team incentives directly with protocol success. The team only benefits when the protocol grows.

### Investor Tokens (20% / 5.16M)

Investor tokens follow a cliff-and-quarterly schedule.

- Months 0 through 12 are fully locked (cliff)
- At month 12, 1,032,000 tokens unlock (20%)
- At month 15, 1,032,000 tokens unlock (Q1 post-cliff)
- At month 18, 1,032,000 tokens unlock (Q2 post-cliff)
- At month 21, 1,032,000 tokens unlock (Q3 post-cliff)
- At month 24, 1,032,000 tokens unlock (Q4 post-cliff). Fully vested

Vesting is intended to be enforced via on-chain vesting contracts at deployment, with locked tokens restricted per vesting policy.

---

## Buy-and-Burn

Buy-and-burn ties token supply reduction directly to protocol usage. Every transaction the protocol processes funds a portion of the burn.

- 20% of protocol revenue allocated to buy-and-burn (increasing to 33% via governance by 2027)
- Tokens purchased on open market via DEX and sent to zero address
- First burn expected Q2 2026 (~3 months post-TGE)

The mechanism is deliberately simple. Revenue comes in, and tokens are burned. The approach avoids complex rebasing or staking-dependent emissions. The burn rate scales with volume, creating a direct link between product traction and supply pressure.

---

## Staking Mechanics

Staking serves different purposes at each layer.

- **Circle Admins** stake $P2P to operate merchant networks. Their stake is slashable, and a portion of their rewards is locked as an insurance buffer. Running a Circle requires active commitment.
- **Merchants** stake USDC as working capital for order fulfillment. Their capacity is bounded by their stake. The protocol cannot commit more to orders than a merchant has at risk.
- **Delegators** stake $P2P to Circles to earn a share of revenue. Only delegation to $P2P-denominated Circles grants governance voting rights, which ties governance influence to active economic participation.

---

## Progressive Decentralization

Decentralization is phased because governance quality matters more than governance speed. Handing full control to token holders on day one, before tooling, participation habits, and security audits mature, creates more risk than it removes. The timeline reflects this tradeoff.

### Phase 1 (Month 0-6 post-TGE)

Foundation multisig controls upgrades. Emergency pause capability exists. The purpose of this phase is to catch deployment-stage issues before they become governance-stage crises.

### Phase 2 (Month 6-18 post-TGE)

Token-holder voting activates for non-critical parameters. Community can submit governance proposals. Foundation retains emergency pause but does not control routine parameter changes.

### Phase 3 (Month 18+ post-TGE)

Full DAO control. Foundation veto authority sunsets permanently. All protocol parameters governed by token holders. The foundation is reduced to an administrative and compliance role with no unilateral power over protocol behavior.

---

## Governance Mechanics

See [`/governance`](/governance) for the full governance model.

| Parameter | Value |
|-----------|-------|
| Voting Power | 1 staked $P2P = 1 vote (delegatable) |
| Voting Delay | 1 day |
| Voting Period | 7 days |
| Standard Quorum | 4% |
| Critical Quorum | 20% |
| Standard Majority | 50% + 1 |
| Critical Majority | 66% supermajority |
| Timelock | 7 days before execution |

Proposals that pass quorum and threshold are queued and executed after timelock. The dual quorum model (4% standard, 20% critical) exists so routine parameter tuning doesn't require mobilizing the entire token base, while high-impact changes demand broad consensus.

### Governable Parameters

- Fee percentages and spread configuration
- Staking and slashing rules
- Transaction volume limits
- Treasury allocation (amounts exceeding $100k require governance vote)
- Smart contract upgrades
- Token whitelisting

---

## Disclosures

The $P2P token provides governance rights and economic utility within the protocol, independently of any corporate entity. It carries no claim on foundation assets and no debt obligation. Value derives from protocol usage and network effects rather than any promise of returns.
