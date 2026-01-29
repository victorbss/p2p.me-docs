import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  whitepaperSidebar: [
    {
        "type": "category",
        "label": "P2P Protocol Whitepaper",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "00-p2p-protocol-whitepaper"
        },
        "items": [
            {
                "type": "link",
                "label": "Abstract",
                "href": "/whitepaper/p2p-protocol-whitepaper#abstract"
            },
            {
                "type": "link",
                "label": "1. The Vision",
                "href": "/whitepaper/p2p-protocol-whitepaper#1-the-vision"
            },
            {
                "type": "link",
                "label": "1.1 From \"ramps\" to a privacy and credibility based economy",
                "href": "/whitepaper/p2p-protocol-whitepaper#11-from-ramps-to-a-privacy-and-credibility-based-economy"
            },
            {
                "type": "link",
                "label": "1.2 What \"good\" looks like by 2026+",
                "href": "/whitepaper/p2p-protocol-whitepaper#12-what-good-looks-like-by-2026"
            },
            {
                "type": "link",
                "label": "1.3 First principles",
                "href": "/whitepaper/p2p-protocol-whitepaper#13-first-principles"
            },
            {
                "type": "link",
                "label": "1.4 What P2P Protocol is (and is not)",
                "href": "/whitepaper/p2p-protocol-whitepaper#14-what-p2p-protocol-is-and-is-not"
            },
            {
                "type": "link",
                "label": "1.5 Why this matters now",
                "href": "/whitepaper/p2p-protocol-whitepaper#15-why-this-matters-now"
            },
            {
                "type": "link",
                "label": "1.6 North-star outcomes (what \"good\" looks like to us)",
                "href": "/whitepaper/p2p-protocol-whitepaper#16-north-star-outcomes-what-good-looks-like-to-us"
            },
            {
                "type": "link",
                "label": "1.7 Credibility-based DeFi (beyond over-collateralization)",
                "href": "/whitepaper/p2p-protocol-whitepaper#17-credibility-based-defi-beyond-over-collateralization"
            },
            {
                "type": "link",
                "label": "1.8 A protocol for people, not just power users",
                "href": "/whitepaper/p2p-protocol-whitepaper#18-a-protocol-for-people-not-just-power-users"
            },
            {
                "type": "link",
                "label": "1.9 Protocol-agnostic by design",
                "href": "/whitepaper/p2p-protocol-whitepaper#19-protocol-agnostic-by-design"
            },
            {
                "type": "link",
                "label": "1.10 Credibility but with Privacy",
                "href": "/whitepaper/p2p-protocol-whitepaper#110-credibility-but-with-privacy"
            },
            {
                "type": "link",
                "label": "1.11 Programmable compliance (policy without dossiers)",
                "href": "/whitepaper/p2p-protocol-whitepaper#111-programmable-compliance-policy-without-dossiers"
            },
            {
                "type": "link",
                "label": "1.12 What gets unlocked if we get this right",
                "href": "/whitepaper/p2p-protocol-whitepaper#112-what-gets-unlocked-if-we-get-this-right"
            },
            {
                "type": "link",
                "label": "1.13 Stewardship & governance philosophy",
                "href": "/whitepaper/p2p-protocol-whitepaper#113-stewardship-governance-philosophy"
            },
            {
                "type": "link",
                "label": "1.14 What we won't compromise on",
                "href": "/whitepaper/p2p-protocol-whitepaper#114-what-we-wont-compromise-on"
            },
            {
                "type": "link",
                "label": "1.15 Milestones that matter",
                "href": "/whitepaper/p2p-protocol-whitepaper#115-milestones-that-matter"
            },
            {
                "type": "link",
                "label": "1.16 A short manifesto",
                "href": "/whitepaper/p2p-protocol-whitepaper#116-a-short-manifesto"
            },
            {
                "type": "link",
                "label": "How the protocol works today (high level, not vendor-locked)",
                "href": "/whitepaper/p2p-protocol-whitepaper#how-the-protocol-works-today-high-level-not-vendor-locked"
            },
            {
                "type": "link",
                "label": "Why credibility matters (and why over-collateralization shouldn't be the only answer)",
                "href": "/whitepaper/p2p-protocol-whitepaper#why-credibility-matters-and-why-over-collateralization-shouldnt-be-the-only-answer"
            },
            {
                "type": "link",
                "label": "2. Design Goals and Non-Goals",
                "href": "/whitepaper/p2p-protocol-whitepaper#2-design-goals-and-non-goals"
            },
            {
                "type": "link",
                "label": "2.1 Goals",
                "href": "/whitepaper/p2p-protocol-whitepaper#21-goals"
            },
            {
                "type": "link",
                "label": "2.2 Non-Goals",
                "href": "/whitepaper/p2p-protocol-whitepaper#22-non-goals"
            },
            {
                "type": "link",
                "label": "3. System Overview",
                "href": "/whitepaper/p2p-protocol-whitepaper#3-system-overview"
            },
            {
                "type": "link",
                "label": "3.1 Actors",
                "href": "/whitepaper/p2p-protocol-whitepaper#31-actors"
            },
            {
                "type": "link",
                "label": "3.2 Components",
                "href": "/whitepaper/p2p-protocol-whitepaper#32-components"
            },
            {
                "type": "link",
                "label": "3.3 High-Level Flow",
                "href": "/whitepaper/p2p-protocol-whitepaper#33-high-level-flow"
            },
            {
                "type": "link",
                "label": "3.4 On-Ramp Flow",
                "href": "/whitepaper/p2p-protocol-whitepaper#34-on-ramp-flow"
            },
            {
                "type": "link",
                "label": "3.5 Off-Ramp Flow",
                "href": "/whitepaper/p2p-protocol-whitepaper#35-off-ramp-flow"
            },
            {
                "type": "link",
                "label": "3.6 Key Considerations",
                "href": "/whitepaper/p2p-protocol-whitepaper#36-key-considerations"
            },
            {
                "type": "link",
                "label": "4. Cryptographic Primitives & Proof Integration",
                "href": "/whitepaper/p2p-protocol-whitepaper#4-cryptographic-primitives-proof-integration"
            },
            {
                "type": "link",
                "label": "4.1 Proofs for Identity and Payments",
                "href": "/whitepaper/p2p-protocol-whitepaper#41-proofs-for-identity-and-payments"
            },
            {
                "type": "link",
                "label": "4.2 TLS-Backed Evidence",
                "href": "/whitepaper/p2p-protocol-whitepaper#42-tls-backed-evidence"
            },
            {
                "type": "link",
                "label": "4.3 Privacy Properties",
                "href": "/whitepaper/p2p-protocol-whitepaper#43-privacy-properties"
            },
            {
                "type": "link",
                "label": "5. Trade Protocol (On- and Off-Ramp)",
                "href": "/whitepaper/p2p-protocol-whitepaper#5-trade-protocol-on-and-off-ramp"
            },
            {
                "type": "link",
                "label": "5.1 On-Ramp (Fiat \u2192 USDC on Base)",
                "href": "/whitepaper/p2p-protocol-whitepaper#51-on-ramp-fiat-usdc-on-base"
            },
            {
                "type": "link",
                "label": "5.2 Off-Ramp (USDC on Base \u2192 Fiat)",
                "href": "/whitepaper/p2p-protocol-whitepaper#52-off-ramp-usdc-on-base-fiat"
            },
            {
                "type": "link",
                "label": "5.3 Payment-Rail Risk Classes",
                "href": "/whitepaper/p2p-protocol-whitepaper#53-payment-rail-risk-classes"
            },
            {
                "type": "link",
                "label": "6. Proof-of-Credibility (Reputation & Matching)",
                "href": "/whitepaper/p2p-protocol-whitepaper#6-proof-of-credibility-reputation-matching"
            },
            {
                "type": "link",
                "label": "6.1 Building Trust Through Reputation",
                "href": "/whitepaper/p2p-protocol-whitepaper#61-building-trust-through-reputation"
            },
            {
                "type": "link",
                "label": "6.2 Inputs (illustrative, governed)",
                "href": "/whitepaper/p2p-protocol-whitepaper#62-inputs-illustrative-governed"
            },
            {
                "type": "link",
                "label": "6.3 Outputs",
                "href": "/whitepaper/p2p-protocol-whitepaper#63-outputs"
            },
            {
                "type": "link",
                "label": "6.4 Sybil & Gaming Resistance",
                "href": "/whitepaper/p2p-protocol-whitepaper#64-sybil-gaming-resistance"
            },
            {
                "type": "link",
                "label": "7. Fraud Prevention",
                "href": "/whitepaper/p2p-protocol-whitepaper#7-fraud-prevention"
            },
            {
                "type": "link",
                "label": "7.1 How Reputation Prevents Fraud",
                "href": "/whitepaper/p2p-protocol-whitepaper#71-how-reputation-prevents-fraud"
            },
            {
                "type": "link",
                "label": "7.2 Anti-Money Laundering Through Transaction Limits",
                "href": "/whitepaper/p2p-protocol-whitepaper#72-anti-money-laundering-through-transaction-limits"
            },
            {
                "type": "link",
                "label": "7.3 Merchant Accountability",
                "href": "/whitepaper/p2p-protocol-whitepaper#73-merchant-accountability"
            },
            {
                "type": "link",
                "label": "8. Dispute Resolution",
                "href": "/whitepaper/p2p-protocol-whitepaper#8-dispute-resolution"
            },
            {
                "type": "link",
                "label": "9. Pricing & Oracle Mechanics",
                "href": "/whitepaper/p2p-protocol-whitepaper#9-pricing-oracle-mechanics"
            },
            {
                "type": "link",
                "label": "10. Liquidity & Market Design",
                "href": "/whitepaper/p2p-protocol-whitepaper#10-liquidity-market-design"
            },
            {
                "type": "link",
                "label": "10.1 Current Liquidity Model",
                "href": "/whitepaper/p2p-protocol-whitepaper#101-current-liquidity-model"
            },
            {
                "type": "link",
                "label": "10.2 Future Liquidity Enhancements",
                "href": "/whitepaper/p2p-protocol-whitepaper#102-future-liquidity-enhancements"
            },
            {
                "type": "link",
                "label": "11. Security Model",
                "href": "/whitepaper/p2p-protocol-whitepaper#11-security-model"
            },
            {
                "type": "link",
                "label": "11.1 Assumptions & Adversaries",
                "href": "/whitepaper/p2p-protocol-whitepaper#111-assumptions-adversaries"
            },
            {
                "type": "link",
                "label": "11.2 Mitigations",
                "href": "/whitepaper/p2p-protocol-whitepaper#112-mitigations"
            },
            {
                "type": "link",
                "label": "12. Privacy Model",
                "href": "/whitepaper/p2p-protocol-whitepaper#12-privacy-model"
            },
            {
                "type": "link",
                "label": "13. Compliance & Policy Positioning",
                "href": "/whitepaper/p2p-protocol-whitepaper#13-compliance-policy-positioning"
            },
            {
                "type": "link",
                "label": "13.1 User Responsibility in Taxation",
                "href": "/whitepaper/p2p-protocol-whitepaper#131-user-responsibility-in-taxation"
            },
            {
                "type": "link",
                "label": "13.2 Micro-Transactions for Mass Adoption",
                "href": "/whitepaper/p2p-protocol-whitepaper#132-micro-transactions-for-mass-adoption"
            },
            {
                "type": "link",
                "label": "14. Accessing P2P Protocol: Clients & SDKs",
                "href": "/whitepaper/p2p-protocol-whitepaper#14-accessing-p2p-protocol-clients-sdks"
            },
            {
                "type": "link",
                "label": "14.1 Clients and Ease of Use",
                "href": "/whitepaper/p2p-protocol-whitepaper#141-clients-and-ease-of-use"
            },
            {
                "type": "link",
                "label": "14.2 Client-Side SDKs (B2B Integration)",
                "href": "/whitepaper/p2p-protocol-whitepaper#142-client-side-sdks-b2b-integration"
            },
            {
                "type": "link",
                "label": "14.3 Coins.me (Consumer App)",
                "href": "/whitepaper/p2p-protocol-whitepaper#143-coinsme-consumer-app"
            },
            {
                "type": "link",
                "label": "15. Governance & Upgradability",
                "href": "/whitepaper/p2p-protocol-whitepaper#15-governance-upgradability"
            },
            {
                "type": "link",
                "label": "16. Token Economics",
                "href": "/whitepaper/p2p-protocol-whitepaper#16-token-economics"
            },
            {
                "type": "link",
                "label": "17. Disclosures & Risks",
                "href": "/whitepaper/p2p-protocol-whitepaper#17-disclosures-risks"
            },
            {
                "type": "link",
                "label": "18. References",
                "href": "/whitepaper/p2p-protocol-whitepaper#18-references"
            },
            {
                "type": "link",
                "label": "Appendices",
                "href": "/whitepaper/p2p-protocol-whitepaper#appendices"
            }
        ]
    }
],
};

export default sidebars;
