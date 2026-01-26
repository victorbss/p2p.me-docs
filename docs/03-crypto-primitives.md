---
title: 3. Cryptographic Primitives
sidebar_label: 3. ZK & Proofs
---

# 3. Cryptographic Primitives & Proof Integration

## 3.1 Proofs for Identity and Payments

[P2P.me](http://P2P.me) uses **ZK proofs** to validate transactions and identity data records. A new member can perform **trustless KYC** by sharing a ZK proof of their identity document; this bolsters on-chain reputation and transaction limits without revealing raw PII on-chain.

## 3.2 TLS-Backed Evidence

To achieve maximum privacy, proofs harness the TLS layer of web sessions (e.g., TLS 1.2/1.3) so that a user or merchant can produce a **cryptographic witness** that a specific statement about a bank transfer page, PSP receipt, or KYC provider result is true, without exposing credentials or page contents.

**Important:** [P2P.me](http://P2P.me) specifies **where proofs are verified**:

* **On-chain verifier** for compact claims and attestation hashes.

* **Off-chain verifier/relayer** (open-source reference) for complex or rail-specific statements, posting a succinct attestation back on-chain.

   Raw proofs may remain with users; the chain stores minimal commitments and verdicts.

## 3.3 Privacy Properties

* **Non-interactive disclosure:** share only the proof, not the underlying data.  
* **Selective reveal:** only fields required by the verification circuit are exposed to the circuit.  
* **Bounded linkage:** protocol IDs and commitments minimize cross-session linkability where feasible.
