import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  whitepaperSidebar: [
    {
        "type": "category",
        "label": "Abstract",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "00-abstract"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "1. The Vision",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "01-1-the-vision"
        },
        "items": [
            {
                "type": "link",
                "label": "1.1 From \"ramps\" to a privacy and credibility based economy",
                "href": "/whitepaper/the-vision#11-from-ramps-to-a-privacy-and-credibility-based-economy"
            },
            {
                "type": "link",
                "label": "1.2 What \"good\" looks like by 2026+",
                "href": "/whitepaper/the-vision#12-what-good-looks-like-by-2026"
            },
            {
                "type": "link",
                "label": "1.3 First principles",
                "href": "/whitepaper/the-vision#13-first-principles"
            },
            {
                "type": "link",
                "label": "1.4 What P2P Protocol is (and is not)",
                "href": "/whitepaper/the-vision#14-what-p2p-protocol-is-and-is-not"
            },
            {
                "type": "link",
                "label": "1.5 Why this matters now",
                "href": "/whitepaper/the-vision#15-why-this-matters-now"
            },
            {
                "type": "link",
                "label": "1.6 North-star outcomes (what \"good\" looks like to us)",
                "href": "/whitepaper/the-vision#16-north-star-outcomes-what-good-looks-like-to-us"
            },
            {
                "type": "link",
                "label": "1.7 Credibility-based DeFi (beyond over-collateralization)",
                "href": "/whitepaper/the-vision#17-credibility-based-defi-beyond-over-collateralization"
            },
            {
                "type": "link",
                "label": "1.8 A protocol for people, not just power users",
                "href": "/whitepaper/the-vision#18-a-protocol-for-people-not-just-power-users"
            },
            {
                "type": "link",
                "label": "1.9 Protocol-agnostic by design",
                "href": "/whitepaper/the-vision#19-protocol-agnostic-by-design"
            },
            {
                "type": "link",
                "label": "1.10 Credibility but with Privacy",
                "href": "/whitepaper/the-vision#110-credibility-but-with-privacy"
            },
            {
                "type": "link",
                "label": "1.11 Programmable compliance (policy without dossiers)",
                "href": "/whitepaper/the-vision#111-programmable-compliance-policy-without-dossiers"
            },
            {
                "type": "link",
                "label": "1.12 What gets unlocked if we get this right",
                "href": "/whitepaper/the-vision#112-what-gets-unlocked-if-we-get-this-right"
            },
            {
                "type": "link",
                "label": "1.13 Stewardship & governance philosophy",
                "href": "/whitepaper/the-vision#113-stewardship-governance-philosophy"
            },
            {
                "type": "link",
                "label": "1.14 What we won't compromise on",
                "href": "/whitepaper/the-vision#114-what-we-wont-compromise-on"
            },
            {
                "type": "link",
                "label": "1.15 Milestones that matter",
                "href": "/whitepaper/the-vision#115-milestones-that-matter"
            },
            {
                "type": "link",
                "label": "1.16 A short manifesto",
                "href": "/whitepaper/the-vision#116-a-short-manifesto"
            }
        ]
    },
    {
        "type": "category",
        "label": "How the protocol works today (high level, not vendor-locked)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "02-how-the-protocol-works-today-high-level-not-vendor-locked"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "Why credibility matters (and why over-collateralization shouldn't be the only answer)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "03-why-credibility-matters-and-why-over-collateralization-shouldnt-be-the-only-answer"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "2. Design Goals and Non-Goals",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "02-2-design-goals-and-non-goals"
        },
        "items": [
            {
                "type": "link",
                "label": "2.1 Goals",
                "href": "/whitepaper/design-goals-and-non-goals#21-goals"
            },
            {
                "type": "link",
                "label": "2.2 Non-Goals",
                "href": "/whitepaper/design-goals-and-non-goals#22-non-goals"
            }
        ]
    },
    {
        "type": "category",
        "label": "3. System Overview",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "03-3-system-overview"
        },
        "items": [
            {
                "type": "link",
                "label": "3.1 Actors",
                "href": "/whitepaper/system-overview#31-actors"
            },
            {
                "type": "link",
                "label": "3.2 Components",
                "href": "/whitepaper/system-overview#32-components"
            },
            {
                "type": "link",
                "label": "3.3 High-Level Flow",
                "href": "/whitepaper/system-overview#33-high-level-flow"
            },
            {
                "type": "link",
                "label": "3.4 On-Ramp Flow",
                "href": "/whitepaper/system-overview#34-on-ramp-flow"
            },
            {
                "type": "link",
                "label": "3.5 Off-Ramp Flow",
                "href": "/whitepaper/system-overview#35-off-ramp-flow"
            },
            {
                "type": "link",
                "label": "3.6 Key Considerations",
                "href": "/whitepaper/system-overview#36-key-considerations"
            }
        ]
    },
    {
        "type": "category",
        "label": "4. Cryptographic Primitives & Proof Integration",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "04-4-cryptographic-primitives-proof-integration"
        },
        "items": [
            {
                "type": "link",
                "label": "4.1 Proofs for Identity and Payments",
                "href": "/whitepaper/cryptographic-primitives-proof-integration#41-proofs-for-identity-and-payments"
            },
            {
                "type": "link",
                "label": "4.2 TLS-Backed Evidence",
                "href": "/whitepaper/cryptographic-primitives-proof-integration#42-tls-backed-evidence"
            },
            {
                "type": "link",
                "label": "4.3 Privacy Properties",
                "href": "/whitepaper/cryptographic-primitives-proof-integration#43-privacy-properties"
            }
        ]
    },
    {
        "type": "category",
        "label": "5. Trade Protocol (On- and Off-Ramp)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "05-5-trade-protocol-on-and-off-ramp"
        },
        "items": [
            {
                "type": "link",
                "label": "5.1 On-Ramp (Fiat \u2192 USDC on Base)",
                "href": "/whitepaper/trade-protocol-on-and-off-ramp#51-on-ramp-fiat-usdc-on-base"
            },
            {
                "type": "link",
                "label": "5.2 Off-Ramp (USDC on Base \u2192 Fiat)",
                "href": "/whitepaper/trade-protocol-on-and-off-ramp#52-off-ramp-usdc-on-base-fiat"
            },
            {
                "type": "link",
                "label": "5.3 Payment-Rail Risk Classes",
                "href": "/whitepaper/trade-protocol-on-and-off-ramp#53-payment-rail-risk-classes"
            }
        ]
    },
    {
        "type": "category",
        "label": "6. Proof-of-Credibility (Reputation & Matching)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "06-6-proof-of-credibility-reputation-matching"
        },
        "items": [
            {
                "type": "link",
                "label": "6.1 Building Trust Through Reputation",
                "href": "/whitepaper/proof-of-credibility-reputation-matching#61-building-trust-through-reputation"
            },
            {
                "type": "link",
                "label": "6.2 Inputs (illustrative, governed)",
                "href": "/whitepaper/proof-of-credibility-reputation-matching#62-inputs-illustrative-governed"
            },
            {
                "type": "link",
                "label": "6.3 Outputs",
                "href": "/whitepaper/proof-of-credibility-reputation-matching#63-outputs"
            },
            {
                "type": "link",
                "label": "6.4 Sybil & Gaming Resistance",
                "href": "/whitepaper/proof-of-credibility-reputation-matching#64-sybil-gaming-resistance"
            }
        ]
    },
    {
        "type": "category",
        "label": "7. Fraud Prevention",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "07-7-fraud-prevention"
        },
        "items": [
            {
                "type": "link",
                "label": "7.1 How Reputation Prevents Fraud",
                "href": "/whitepaper/fraud-prevention#71-how-reputation-prevents-fraud"
            },
            {
                "type": "link",
                "label": "7.2 Anti-Money Laundering Through Transaction Limits",
                "href": "/whitepaper/fraud-prevention#72-anti-money-laundering-through-transaction-limits"
            },
            {
                "type": "link",
                "label": "7.3 Merchant Accountability",
                "href": "/whitepaper/fraud-prevention#73-merchant-accountability"
            }
        ]
    },
    {
        "type": "category",
        "label": "8. Dispute Resolution",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "08-8-dispute-resolution"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "9. Pricing & Oracle Mechanics",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "09-9-pricing-oracle-mechanics"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "10. Liquidity & Market Design",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "10-10-liquidity-market-design"
        },
        "items": [
            {
                "type": "link",
                "label": "10.1 Current Liquidity Model",
                "href": "/whitepaper/liquidity-market-design#101-current-liquidity-model"
            },
            {
                "type": "link",
                "label": "10.2 Future Liquidity Enhancements",
                "href": "/whitepaper/liquidity-market-design#102-future-liquidity-enhancements"
            }
        ]
    },
    {
        "type": "category",
        "label": "11. Security Model",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "11-11-security-model"
        },
        "items": [
            {
                "type": "link",
                "label": "11.1 Assumptions & Adversaries",
                "href": "/whitepaper/security-model#111-assumptions-adversaries"
            },
            {
                "type": "link",
                "label": "11.2 Mitigations",
                "href": "/whitepaper/security-model#112-mitigations"
            }
        ]
    },
    {
        "type": "category",
        "label": "12. Privacy Model",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "12-12-privacy-model"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "13. Compliance & Policy Positioning",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "13-13-compliance-policy-positioning"
        },
        "items": [
            {
                "type": "link",
                "label": "13.1 User Responsibility in Taxation",
                "href": "/whitepaper/compliance-policy-positioning#131-user-responsibility-in-taxation"
            },
            {
                "type": "link",
                "label": "13.2 Micro-Transactions for Mass Adoption",
                "href": "/whitepaper/compliance-policy-positioning#132-micro-transactions-for-mass-adoption"
            }
        ]
    },
    {
        "type": "category",
        "label": "14. Accessing P2P Protocol: Clients & SDKs",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "14-14-accessing-p2p-protocol-clients-sdks"
        },
        "items": [
            {
                "type": "link",
                "label": "14.1 Clients and Ease of Use",
                "href": "/whitepaper/accessing-p2p-protocol-clients-sdks#141-clients-and-ease-of-use"
            },
            {
                "type": "link",
                "label": "14.2 Client-Side SDKs (B2B Integration)",
                "href": "/whitepaper/accessing-p2p-protocol-clients-sdks#142-client-side-sdks-b2b-integration"
            },
            {
                "type": "link",
                "label": "14.3 Coins.me (Consumer App)",
                "href": "/whitepaper/accessing-p2p-protocol-clients-sdks#143-coinsme-consumer-app"
            }
        ]
    },
    {
        "type": "category",
        "label": "15. Governance & Upgradability",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "15-15-governance-upgradability"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "16. Token Economics",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "16-16-token-economics"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "17. Disclosures & Risks",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "17-17-disclosures-risks"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "18. References",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "18-18-references"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "Appendices",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "21-appendices"
        },
        "items": []
    }
],
};

export default sidebars;
