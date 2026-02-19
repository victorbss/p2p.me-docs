---
id: 01-specification
sidebar_position: 1
title: "Specification"
slug: specification
---

## spc.1 Regarding Token Governance

**spc.1.1** `$P2P` is the sole token conferring governance voting rights. This unifies protocol-wide decision-making under a single, non-fragmented voting base regardless of how many Circles exist or which `exchangeToken` each uses.

**spc.1.2** A Circle's `exchangeToken` determines the denomination for stakes, delegation, and liquidity within that Circle. When `exchangeToken` differs from `$P2P`, delegation to that Circle's admin increases order capacity but does not confer governance voting power. This separates liquidity provision from protocol governance.

**spc.1.3** Only delegation to `$P2P`-denominated Circles grants the delegator proportional voting rights. This ensures governance influence remains tied to the native protocol token.

## spc.2 Regarding Order Dispute Escrow

**spc.2.1** Merchant stakes are held custodially by the protocol smart contracts. This enables atomic settlement—when an order completes, the protocol can directly transfer staked funds without requiring merchant approval at execution time.

**spc.2.2** A merchant's order capacity is bounded by their staked amount. The protocol cannot commit more value to pending orders than the merchant has staked, ensuring all orders are fully collateralized.

**spc.2.3** When a merchant loses a dispute or commits an infraction, their stake serves as first-line compensation. The protocol slashes the stake and distributes funds to the affected party, dispute resolvers and/or insurance pools without requiring merchant cooperation.

## spc.3 Regarding Dispute Resolution

**spc.3.1** The protocol provides three resolution tiers to balance speed against accuracy. Tier 1 leverages the CoT Admin's local context and relationship knowledge for rapid resolution. When parties dispute the T1 outcome, escalation to an independent jury (T2) removes potential bias. Governance (T3) serves as final arbiter when community consensus is required.

**spc.3.2** If a resolver fails to act within the configured SLA, the proposal automatically becomes eligible to be escalated to the next tier. This prevents stalling attacks and ensures disputes cannot be indefinitely delayed by an unresponsive resolver.

**spc.3.3** Each tier increases the resolution fee cumulatively. This discourages frivolous escalation—parties with weak claims.

**spc.3.4** Tier 3 governance decisions are final and not appealable.

## spc.4 Regarding User Dispute Detterence

**spc.4.1** In SELL orders, the user's `settlementToken` is escrowed on-chain, providing collateral that can be forfeited if they lose a dispute. In BUY orders, the user sends fiat off-chain and has no on-chain stake at risk.

**spc.4.2** To compensate for the lack of collateral in BUY disputes, RP penalties for losing users are significantly higher than in SELL disputes.

**spc.4.3** A user who loses a dispute and falls below zero RP is blacklisted from the protocol. 

## spc.5 Regarding Insurance Pools

**spc.5.1** Insurance claims draw from pools in strict priority order: CAIP first, then CALR, then PIP. This ensures Circle-specific incidents are covered by Circle-specific funds before escalating to protocol-wide reserves.

**spc.5.2** CAIP (Circle Admin Insurance Pool) is funded by a percentage of Circle volume plus slashed stakes from that Circle. It covers routine incidents within the Circle's risk profile.

**spc.5.3** CALR (Circle Admin Locked Rewards) withholds a portion of admin earnings in a rolling lock. This creates skin-in-the-game for admins—if collusion or negligence is detected, CALR is slashed before the admin can withdraw those earnings.

**spc.5.4** PIP (Protocol Insurance Pool) serves as the backstop for systemic failures or when lower-tier pools are depleted. Large PIP claims require governance approval to prevent single actors from draining protocol reserves.

## spc.6 Regarding Claims Anti-Collusion

**spc.6.1** Admin revenue is partially locked via CALR. If an admin approves fraudulent claims and is later caught via audit, the locked portion is slashed first. This makes collusion economically irrational—the admin cannot extract gains before the detection window closes.

**spc.6.2** Claims above a set amount require review by a second CoT Admin from a different Circle. This dual-review requirement prevents a single admin from unilaterally approving large fraudulent claims.

**spc.6.3** On-chain metrics (claim approval rate, claims per merchant) are tracked. When thresholds are exceeded, the admin becomes eligible for a community-initiated audit. This provides a decentralized check on admin behavior.

## spc.7 Regarding Appeals and Finality of Resolutions

**spc.7.1** After a resolution is issued at any tier, the losing party has an appeal window to escalate. This balances the need for finality with the right to contest potentially incorrect decisions.

**spc.7.2** Once the appeal window expires without appeal, or after T3 resolution, the outcome becomes final and is executed. No further challenges are possible for that proposal.

**spc.7.3** Approved insurance claims have a challenge window before payout. This allows the community to flag suspicious approvals before funds leave the insurance pool.

## spc.8 Regarding Governance Quorum

**spc.8.1** Dispute governance (T3 escalations) uses a lower quorum than protocol governance because disputes require timely resolution and affect only the parties involved.

## spc.9 Regarding Reputation Points (RP)

**spc.9.1** RP is non-transferable, on-chain reputation capital that must be earned through protocol participation. Unlike `$P2P` tokens (which can be purchased), RP represents proven track record and cannot be acquired through economic means alone.

**spc.9.2** All participants have an RP floor of 0. Falling below 0 triggers automatic blacklisting (spc.4.3). There is no ceiling for positive RP, allowing long-term participants to accumulate reputation capital without limit.

**spc.9.3** Higher RP provides capacity benefits (larger orders, more concurrent operations), access benefits (governance, premium features), economic benefits (better fee rates), and resilience benefits (more buffer before blacklist). This creates a virtuous cycle rewarding consistent good behavior.

**spc.9.4** Each participant role (User, Merchant, Admin, Juror) has distinct tier thresholds that unlock progressively greater capabilities. Role transitions require meeting minimum RP thresholds, ensuring participants earn elevated privileges.

**spc.9.5** RP penalties are absolute values (not percentages), meaning higher-RP participants lose the same amount but have more buffer. However, fraud-related penalties are catastrophic regardless of tier, ensuring no participant is "too big to punish."

**spc.9.6** RP decays during extended inactivity, preventing reputation hoarding without ongoing participation. Any qualifying protocol activity resets the decay clock.

---