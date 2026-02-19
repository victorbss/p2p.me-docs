# P2P Protocol Investor Token Guide

## Start Here

1. **This page** covers thesis, token logic, and FAQs.
2. [`/tokenomics`](/tokenomics) covers allocation, vesting, and mechanics.
3. [`/governance`](/governance) covers what governance is live vs roadmap.
4. [`/whitepaper`](/whitepaper) covers protocol context and vision.
5. [`/roadmap-features`](/roadmap-features) covers expansion tracks.

---

## Investor Thesis

- **Working core rails exist today.** Onramp/offramp, matching, disputes, and on-chain parameter controls are live and processing volume.
- **Expansion path is clear.** Remittance and multi-currency tracks build on existing rails. They add corridors and users, not new trust assumptions.
- **Early-stage structure.** Compact launch supply with no insider tokens at TGE.
- **Governance transition path.** Admin-operated today, with a documented multi-phase migration to token-governed control.
- **Value capture is explicit.** Staking, delegation, and buy-and-burn connect protocol revenue to token economics.

---

## Why the Token Exists

P2P on/off ramping is critical infrastructure for emerging markets. Millions of people depend on it to move between fiat and stablecoins every day. Infrastructure this important cannot remain under the control of a single operator. The token exists to decentralize ownership of this utility so that no single team, company, or jurisdiction can shut it down, censor it, or extract from it unfairly.

`$P2P` is an ownership token. Holders control protocol financials, govern operational parameters, direct treasury spending, and hold enforceable claim over protocol IP. If protocol resources or IP were ever misappropriated, token governance gives holders the mechanism to redirect control. This follows the same ownership-token model used by projects with futarchy and market-governed treasuries, applied to real, revenue-generating infrastructure.

The token enables four things.

- **Decentralized governance.** Holders vote on fees, limits, merchant rules, and treasury allocation. No single operator controls these decisions.
- **Trust staking ("Circles of Trust").** Token holders stake $P2P on merchant liquidity pools to attest to their trustworthiness, earning stablecoin yield from the Circle's transaction revenue.
- **Revenue-linked ownership.** Protocol revenue funds buybacks and burns, directly connecting token value to network usage and growth.
- **Censorship resistance.** Decentralized ownership means no single point of failure. The protocol can survive regulatory pressure in any one jurisdiction because control is distributed globally among token holders.

---

## FAQs

### Why does P2P need a token?

P2P on/off ramping is essential financial infrastructure in emerging markets. Without a token, control over this infrastructure stays with a single operator who can change fees, censor users, or shut it down. The token transfers that control to the community. It coordinates governance, dispute escalation, treasury management, and trust attestation (Circles of Trust) across a globally distributed holder base.

### Is this an ownership token?

Yes. Holders govern protocol financials, vote on parameter and treasury decisions, and hold enforceable claim over protocol IP. If protocol resources were ever misappropriated, token governance gives holders the mechanism to redirect control. This is protocol ownership, distinct from equity in a traditional company.

### How does the MetaDAO-style sale work?

Users commit USDC during a 4-day window. If oversubscribed, allocations are pro-rata. Existing protocol users with XP get priority. No private rounds happen at TGE. The sale is the primary distribution event. Full mechanics in [`/tokenomics`](/tokenomics).

### What unlocks at TGE?

10M sale tokens + 2.9M liquidity tokens (12.9M total, 50% of supply). Zero investor or team tokens unlock at launch. Investor tokens have a 1-year cliff then quarterly vesting. Team tokens unlock only when protocol performance milestones are hit. Locked tokens cannot be staked.

### How does buy-and-burn work?

20% of protocol revenue buys tokens on the open market and sends them to the zero address. The rate is designed to increase to 33% via governance. The mechanism is funded entirely by real transaction revenue from a working product. More protocol usage means more burn pressure. Timeline and automation details in [`/tokenomics`](/tokenomics).

### Is supply fixed?

Yes, fixed at launch (25.8M). Future issuance requires governance approval via futarchy. The protocol runs on transaction revenue, not token emissions. This is central to the ownership-token thesis. Real revenue from a working product funds operations, buybacks, and staking rewards without dilution.

### Why Base chain?

Low fees and fast finality make frequent small transactions practical. Multi-chain expansion is on the roadmap. Chain choice does not lock the token design.

### How do I separate what's live from what's planned?

[`/governance`](/governance) explicitly labels what is implemented on-chain today vs roadmap. Every other doc follows the same convention. Treat "target model" language as forward-looking.

---

## Where To Go Next

- Token mechanics are in [`/tokenomics`](/tokenomics)
- Governance model is in [`/governance`](/governance)
- Protocol overview is in [`/whitepaper`](/whitepaper)
- Operational guides are in [`/user-guide`](/user-guide) and [`/merchant-guide`](/merchant-guide)
