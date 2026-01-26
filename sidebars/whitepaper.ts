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
        "label": "0. The Vision",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "00-0-the-vision"
        },
        "items": [
            {
                "type": "link",
                "label": "0.1 From \u201cramps\u201d to a privacy and credibility based economy",
                "href": "/whitepaper/the-vision#01-from-ramps-to-a-privacy-and-credibility-based-economy"
            },
            {
                "type": "link",
                "label": "0.2 What \u201cgood\u201d looks like by 2026+",
                "href": "/whitepaper/the-vision#02-what-good-looks-like-by-2026"
            },
            {
                "type": "link",
                "label": "0.3 First principles",
                "href": "/whitepaper/the-vision#03-first-principles"
            },
            {
                "type": "link",
                "label": "0.4 What P2P.me is (and is not)",
                "href": "/whitepaper/the-vision#04-what-p2pme-is-and-is-not"
            },
            {
                "type": "link",
                "label": "0.5 Why this matters now",
                "href": "/whitepaper/the-vision#05-why-this-matters-now"
            },
            {
                "type": "link",
                "label": "0.6 North-star outcomes (what \u201cgood\u201d looks like to us)",
                "href": "/whitepaper/the-vision#06-north-star-outcomes-what-good-looks-like-to-us"
            },
            {
                "type": "link",
                "label": "0.7 Credibility-based DeFi (beyond over-collateralization)",
                "href": "/whitepaper/the-vision#07-credibility-based-defi-beyond-over-collateralization"
            },
            {
                "type": "link",
                "label": "0.8 A protocol for people, not just power users",
                "href": "/whitepaper/the-vision#08-a-protocol-for-people-not-just-power-users"
            },
            {
                "type": "link",
                "label": "0.9 Protocol-agnostic by design",
                "href": "/whitepaper/the-vision#09-protocol-agnostic-by-design"
            },
            {
                "type": "link",
                "label": "0.10 Credibility but with Privacy",
                "href": "/whitepaper/the-vision#010-credibility-but-with-privacy"
            },
            {
                "type": "link",
                "label": "0.11 Programmable compliance (policy without dossiers)",
                "href": "/whitepaper/the-vision#011-programmable-compliance-policy-without-dossiers"
            },
            {
                "type": "link",
                "label": "0.12 What gets unlocked if we get this right",
                "href": "/whitepaper/the-vision#012-what-gets-unlocked-if-we-get-this-right"
            },
            {
                "type": "link",
                "label": "0.13 Stewardship & governance philosophy",
                "href": "/whitepaper/the-vision#013-stewardship-governance-philosophy"
            },
            {
                "type": "link",
                "label": "0.14 What we won\u2019t compromise on",
                "href": "/whitepaper/the-vision#014-what-we-wont-compromise-on"
            },
            {
                "type": "link",
                "label": "0.15 Milestones that matter (vision-level, not dates)",
                "href": "/whitepaper/the-vision#015-milestones-that-matter-vision-level-not-dates"
            },
            {
                "type": "link",
                "label": "0.16 A short manifesto",
                "href": "/whitepaper/the-vision#016-a-short-manifesto"
            },
            {
                "type": "link",
                "label": "How the protocol works today (high level, not vendor-locked)",
                "href": "/whitepaper/the-vision#how-the-protocol-works-today-high-level-not-vendor-locked"
            },
            {
                "type": "link",
                "label": "Why credibility matters (and why over-collateralization shouldn\u2019t be the only answer)",
                "href": "/whitepaper/the-vision#why-credibility-matters-and-why-over-collateralization-shouldnt-be-the-only-answer"
            }
        ]
    },
    {
        "type": "category",
        "label": "1. Design Goals and Non-Goals",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "01-1-design-goals-and-non-goals"
        },
        "items": [
            {
                "type": "link",
                "label": "1.1 Goals",
                "href": "/whitepaper/design-goals-and-non-goals#11-goals"
            },
            {
                "type": "link",
                "label": "1.2 Non-Goals",
                "href": "/whitepaper/design-goals-and-non-goals#12-non-goals"
            }
        ]
    },
    {
        "type": "category",
        "label": "2. System Overview",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "02-2-system-overview"
        },
        "items": [
            {
                "type": "link",
                "label": "2.1 Actors",
                "href": "/whitepaper/system-overview#21-actors"
            },
            {
                "type": "link",
                "label": "2.2 Components",
                "href": "/whitepaper/system-overview#22-components"
            },
            {
                "type": "link",
                "label": "2.3 High-Level Flow",
                "href": "/whitepaper/system-overview#23-high-level-flow"
            },
            {
                "type": "link",
                "label": "Onramp Flow Illustration![][image1]",
                "href": "/whitepaper/system-overview#onramp-flow-illustrationimage1"
            },
            {
                "type": "link",
                "label": "Off-ramp Flow Illustration![][image2]",
                "href": "/whitepaper/system-overview#off-ramp-flow-illustrationimage2"
            }
        ]
    },
    {
        "type": "category",
        "label": "3. Cryptographic Primitives & Proof Integration",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "03-3-cryptographic-primitives-proof-integration"
        },
        "items": [
            {
                "type": "link",
                "label": "3.1 Proofs for Identity and Payments",
                "href": "/whitepaper/cryptographic-primitives-proof-integration#31-proofs-for-identity-and-payments"
            },
            {
                "type": "link",
                "label": "3.2 TLS-Backed Evidence",
                "href": "/whitepaper/cryptographic-primitives-proof-integration#32-tls-backed-evidence"
            },
            {
                "type": "link",
                "label": "3.3 Privacy Properties",
                "href": "/whitepaper/cryptographic-primitives-proof-integration#33-privacy-properties"
            }
        ]
    },
    {
        "type": "category",
        "label": "4. Trade Protocol (On- and Off-Ramp)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "04-4-trade-protocol-on-and-off-ramp"
        },
        "items": [
            {
                "type": "link",
                "label": "4.1 On-Ramp (Fiat \u2192 USDC on Base)",
                "href": "/whitepaper/trade-protocol-on-and-off-ramp#41-on-ramp-fiat-usdc-on-base"
            },
            {
                "type": "link",
                "label": "4.2 Off-Ramp (USDC on Base \u2192 Fiat)",
                "href": "/whitepaper/trade-protocol-on-and-off-ramp#42-off-ramp-usdc-on-base-fiat"
            },
            {
                "type": "link",
                "label": "4.3 Payment-Rail Risk Classes",
                "href": "/whitepaper/trade-protocol-on-and-off-ramp#43-payment-rail-risk-classes"
            }
        ]
    },
    {
        "type": "category",
        "label": "5. Proof-of-Credibility (Reputation & Matching)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "05-5-proof-of-credibility-reputation-matching"
        },
        "items": [
            {
                "type": "link",
                "label": "5.1 Inputs (illustrative, governed)",
                "href": "/whitepaper/proof-of-credibility-reputation-matching#51-inputs-illustrative-governed"
            },
            {
                "type": "link",
                "label": "5.2 Outputs",
                "href": "/whitepaper/proof-of-credibility-reputation-matching#52-outputs"
            },
            {
                "type": "link",
                "label": "5.3 Sybil & Gaming Resistance",
                "href": "/whitepaper/proof-of-credibility-reputation-matching#53-sybil-gaming-resistance"
            }
        ]
    },
    {
        "type": "category",
        "label": "6. Dispute Resolution",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "06-6-dispute-resolution"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "7. Pricing & Oracle Mechanics",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "07-7-pricing-oracle-mechanics"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "8. Liquidity & Market Design",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "08-8-liquidity-market-design"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "9. Security Model (TECH TODO)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "09-9-security-model-tech-todo"
        },
        "items": [
            {
                "type": "link",
                "label": "9.1 Assumptions & Adversaries",
                "href": "/whitepaper/security-model-tech-todo#91-assumptions-adversaries"
            },
            {
                "type": "link",
                "label": "9.2 Mitigations",
                "href": "/whitepaper/security-model-tech-todo#92-mitigations"
            }
        ]
    },
    {
        "type": "category",
        "label": "10. Privacy Model ( DECENTRALIZATION TODO)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "10-10-privacy-model-decentralization-todo"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "11. Compliance & Policy Positioning (LEGAL TODO)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "11-11-compliance-policy-positioning-legal-todo"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "12. Accessing [P2P.me](http://P2P.me): Clients & SDKs",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "12-12-accessing-p2pmehttpp2pme-clients-sdks"
        },
        "items": [
            {
                "type": "link",
                "label": "12.1 Clients and Ease of Use",
                "href": "/whitepaper/accessing-p2pmehttpp2pme-clients-sdks#121-clients-and-ease-of-use"
            },
            {
                "type": "link",
                "label": "12.2 Client-Side SDKs (B2B Integration)",
                "href": "/whitepaper/accessing-p2pmehttpp2pme-clients-sdks#122-client-side-sdks-b2b-integration"
            },
            {
                "type": "link",
                "label": "12.3 [Coins.me](http://Coins.me) (Consumer App)",
                "href": "/whitepaper/accessing-p2pmehttpp2pme-clients-sdks#123-coinsmehttpcoinsme-consumer-app"
            }
        ]
    },
    {
        "type": "category",
        "label": "13. Governance & Upgradability",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "13-13-governance-upgradability"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "14. Token Economics (for TGE \u2014 March 2026)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "14-14-token-economics-for-tge-march-2026"
        },
        "items": [
            {
                "type": "link",
                "label": "14.1 Roles & Utilities",
                "href": "/whitepaper/token-economics-for-tge-march-2026#141-roles-utilities"
            },
            {
                "type": "link",
                "label": "14.2 Issuance & Allocations (illustrative; to be finalized)",
                "href": "/whitepaper/token-economics-for-tge-march-2026#142-issuance-allocations-illustrative-to-be-finalized"
            },
            {
                "type": "link",
                "label": "14.3 Treasury & Fees",
                "href": "/whitepaper/token-economics-for-tge-march-2026#143-treasury-fees"
            }
        ]
    },
    {
        "type": "category",
        "label": "15. Disclosures & Risks",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "15-15-disclosures-risks"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "16. References",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "16-16-references"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "Appendices (to be expanded later)",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "18-appendices-to-be-expanded-later"
        },
        "items": []
    }
],
};

export default sidebars;
