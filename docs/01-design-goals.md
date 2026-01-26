---
title: 1. Design Goals
sidebar_label: 1. Design Goals
---

# 1. Design Goals and Non-Goals

## 1.1 Goals

* **Decentralized on/off-ramp** between fiat and stablecoins without fiat escrow.  
* **Privacy by design** using ZK proofs to authenticate identity data and fiat payment events while keeping raw data off-chain.  
* **Credible neutrality**: protocol-level rules are open, transparent, and upgradable via governance.  
* **Fast settlement**: typical completion within minutes, targeting sub-~90s for common rails as network, liquidity, and automation improve.  
* **Safety & integrity**: explicit threat model, dispute flows, and rate/limit controls to minimize fraud.

## 1.2 Non-Goals

* [P2P.me](http://P2P.me) does **not** hold customer fiat or crypto in custody.  
* [P2P.me](http://P2P.me) does **not** guarantee price or liquidity; it coordinates peers and market inputs.  
* [P2P.me](http://P2P.me) does **not** “store proofs on behalf of users” by default; the protocol **verifies** proofs and records necessary attestations on-chain while raw evidence can remain off-chain.
