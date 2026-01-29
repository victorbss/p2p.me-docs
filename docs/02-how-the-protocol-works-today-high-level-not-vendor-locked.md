---
id: 02-how-the-protocol-works-today-high-level-not-vendor-locked
sidebar_position: 2
title: "How the protocol works today (high level, not vendor-locked)"
slug: how-the-protocol-works-today-high-level-not-vendor-locked
---

1. **Placing orders.** A user clicks "Buy USDC" (or "Sell USDC") and enters an amount. Users can import an existing wallet address to start transacting.
2. **Order matching.** An innovative Proof-of-Credibility algorithm keeps a list of carefully vetted stablecoin merchants queued for order matching. A fiat payment address is shared over the smart contract, encrypted via the user's keys; for off-ramps, a wallet address is presented.
3. **Transfers and confirmation.** The payer completes the fiat or crypto transfer; the counterparty acknowledges or either party submits a zero-knowledge proof that the payment event occurred. Settlement completes within minutes in the common case.
4. **Disputes.** If a party files a dispute, the other party can issue and share a proof of payment (or non-payment) without disclosing extra identity or bank data. Designated verifiers evaluate the submitted proofs, and smart contracts finalize the outcome based on their attestations.
5. **On-chain operations.** The complete communication flow between merchant and buyer/seller takes place on-chain; proofs are verified by open verifiers with on-chain attestations, keeping the process secure and fully decentralized.

---