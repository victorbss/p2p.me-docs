---
id: 02-2-system-overview
sidebar_position: 3
title: "2. System Overview"
slug: system-overview
---

# **2\. System Overview**

## **2.1 Actors**

* **Buyer/Seller (User):** initiates on- or off-ramp orders.  
* **Merchant (Liquidity Peer):** mediates liquidity for stablecoin ↔ fiat.  
* **Matcher/Protocol Contracts:** on-chain components that queue, match, verify states, and finalize outcomes.  
* **Proof Verifier:** on-chain logic (and/or lightweight off-chain attesters) that check ZK/TLS-based proofs attached to disputes or compliance tasks.  
* **Governance:** token-holder or council mechanisms that configure parameters, upgrades, and treasury.

## **2.2 Components**

* **Base L2 smart contracts** for order lifecycle, matching, dispute windows, parameter registry, and fee routing.  
* **Reputation registry** implementing **Proof-of-Credibility** (inputs, scoring, decay).  
* **Oracle adapter** for reference pricing and safeguards (median/TWAP, fallbacks, circuit breakers).  
* **Client SDKs and reference apps** (e.g., [Coins.me](http://Coins.me)) that speak the protocol.

## **2.3 High-Level Flow**

1. **Placing Orders:** A user clicks “Buy USDC” (or “Sell USDC”) and enters amount; the user may import an existing Base USDC wallet.  
2. **Order Matching:** A list of carefully vetted merchants is queued via **Proof-of-Credibility**. A fiat payment address is shared over the smart contract, encrypted with the user’s keys; for off-ramps, a Base USDC address is presented.  
3. **Fiat/Stablecoin Transfer:** The payer performs the transfer on the designated rail.  
4. **Confirmation/Settlement:** Within minutes, settlement succeeds once the counter-proof condition is met (e.g., merchant confirms receipt or buyer submits transfer proof). Wallet balances update accordingly.  
5. **Dispute Window:** If a party contests, they submit a ZK/TLS-backed proof that a payment or action occurred (or did not). Smart contracts (and/or designated verifiers) resolve deterministically.

## Onramp Flow Illustration![](/img/whitepaper/image1.png)

## Off-ramp Flow Illustration![](/img/whitepaper/image2.png)