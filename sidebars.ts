import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '0. Vision',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'vision'},
      items: [
        {
          type: 'link',
          label: 'From “ramps” to a privacy and credibility based economy',
          href: '/whitepaper/vision#01-from-ramps-to-a-privacy-and-credibility-based-economy'
        },
        {
          type: 'link',
          label: 'What “good” looks like by 2026+',
          href: '/whitepaper/vision#02-what-good-looks-like-by-2026'
        },
        {
          type: 'link',
          label: 'First principles',
          href: '/whitepaper/vision#03-first-principles'
        },
        {
          type: 'link',
          label: 'What P2P.me is (and is not)',
          href: '/whitepaper/vision#04-what-p2pme-is-and-is-not'
        },
        {
          type: 'link',
          label: 'Why this matters now',
          href: '/whitepaper/vision#05-why-this-matters-now'
        },
        {
          type: 'link',
          label: 'North-star outcomes (what “good” looks like to us)',
          href: '/whitepaper/vision#06-north-star-outcomes-what-good-looks-like-to-us'
        },
        {
          type: 'link',
          label: 'Credibility-based DeFi (beyond over-collateralization)',
          href: '/whitepaper/vision#07-credibility-based-defi-beyond-over-collateralization'
        },
        {
          type: 'link',
          label: 'A protocol for people, not just power users',
          href: '/whitepaper/vision#08-a-protocol-for-people-not-just-power-users'
        },
        {
          type: 'link',
          label: 'Protocol-agnostic by design',
          href: '/whitepaper/vision#09-protocol-agnostic-by-design'
        },
        {
          type: 'link',
          label: 'Credibility but with Privacy',
          href: '/whitepaper/vision#010-credibility-but-with-privacy'
        },
        {
          type: 'link',
          label: 'Programmable compliance (policy without dossiers)',
          href: '/whitepaper/vision#011-programmable-compliance-policy-without-dossiers'
        },
        {
          type: 'link',
          label: 'What gets unlocked if we get this right',
          href: '/whitepaper/vision#012-what-gets-unlocked-if-we-get-this-right'
        },
        {
          type: 'link',
          label: 'Stewardship & governance philosophy',
          href: '/whitepaper/vision#013-stewardship-governance-philosophy'
        },
        {
          type: 'link',
          label: 'What we won’t compromise on',
          href: '/whitepaper/vision#014-what-we-wont-compromise-on'
        },
        {
          type: 'link',
          label: 'Milestones that matter (vision-level, not dates)',
          href: '/whitepaper/vision#015-milestones-that-matter-vision-level-not-dates'
        },
        {
          type: 'link',
          label: 'A short manifesto',
          href: '/whitepaper/vision#016-a-short-manifesto'
        },
        {
          type: 'link',
          label: 'Why credibility matters (and why over-collateralization shouldn’t be the only answer)',
          href: '/whitepaper/vision#why-credibility-matters-and-why-over-collateralization-shouldnt-be-the-only-answer'
        },
      ]
    },
    {
      type: 'category',
      label: '1. Design Goals',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'design-goals'},
      items: [
        {
          type: 'link',
          label: 'Goals',
          href: '/whitepaper/design-goals#11-goals'
        },
        {
          type: 'link',
          label: 'Non-Goals',
          href: '/whitepaper/design-goals#12-non-goals'
        },
      ]
    },
    {
      type: 'category',
      label: '2. System Overview',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'system-overview'},
      items: [
        {
          type: 'link',
          label: 'Actors',
          href: '/whitepaper/system-overview#21-actors'
        },
        {
          type: 'link',
          label: 'Components',
          href: '/whitepaper/system-overview#22-components'
        },
        {
          type: 'link',
          label: 'High-Level Flow',
          href: '/whitepaper/system-overview#23-high-level-flow'
        },
        {
          type: 'link',
          label: 'Onramp Flow Illustration',
          href: '/whitepaper/system-overview#onramp-flow-illustration'
        },
        {
          type: 'link',
          label: 'Off-ramp Flow Illustration',
          href: '/whitepaper/system-overview#off-ramp-flow-illustration'
        },
      ]
    },
    {
      type: 'category',
      label: '3. Cryptographic Primitives',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'crypto-primitives'},
      items: [
        {
          type: 'link',
          label: 'Proofs for Identity and Payments',
          href: '/whitepaper/crypto-primitives#31-proofs-for-identity-and-payments'
        },
        {
          type: 'link',
          label: 'TLS-Backed Evidence',
          href: '/whitepaper/crypto-primitives#32-tls-backed-evidence'
        },
        {
          type: 'link',
          label: 'Privacy Properties',
          href: '/whitepaper/crypto-primitives#33-privacy-properties'
        },
      ]
    },
    {
      type: 'category',
      label: '4. Trade Protocol',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'trade-protocol'},
      items: [
        {
          type: 'link',
          label: 'On-Ramp (Fiat → USDC on Base)',
          href: '/whitepaper/trade-protocol#41-on-ramp-fiat-usdc-on-base'
        },
        {
          type: 'link',
          label: 'Off-Ramp (USDC on Base → Fiat)',
          href: '/whitepaper/trade-protocol#42-off-ramp-usdc-on-base-fiat'
        },
        {
          type: 'link',
          label: 'Payment-Rail Risk Classes',
          href: '/whitepaper/trade-protocol#43-payment-rail-risk-classes'
        },
      ]
    },
    {
      type: 'category',
      label: '5. Proof-of-Credibility',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'reputation'},
      items: [
        {
          type: 'link',
          label: 'Inputs (illustrative, governed)',
          href: '/whitepaper/reputation#51-inputs-illustrative-governed'
        },
        {
          type: 'link',
          label: 'Outputs',
          href: '/whitepaper/reputation#52-outputs'
        },
        {
          type: 'link',
          label: 'Sybil & Gaming Resistance',
          href: '/whitepaper/reputation#53-sybil-gaming-resistance'
        },
      ]
    },
    {
      type: 'category',
      label: '6. Dispute Resolution',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'disputes'},
      items: [
      ]
    },
    {
      type: 'category',
      label: '7. Pricing & Oracle Mechanics',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'pricing'},
      items: [
      ]
    },
    {
      type: 'category',
      label: '8. Liquidity & Market Design',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'liquidity'},
      items: [
      ]
    },
    {
      type: 'category',
      label: '9. Security Model',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'security'},
      items: [
        {
          type: 'link',
          label: 'Assumptions & Adversaries',
          href: '/whitepaper/security#91-assumptions-adversaries'
        },
        {
          type: 'link',
          label: 'Mitigations',
          href: '/whitepaper/security#92-mitigations'
        },
      ]
    },
    {
      type: 'category',
      label: '10. Privacy Model',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'privacy'},
      items: [
      ]
    },
    {
      type: 'category',
      label: '11. Compliance',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'compliance'},
      items: [
      ]
    },
    {
      type: 'category',
      label: '12. Clients & SDKs',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'clients'},
      items: [
        {
          type: 'link',
          label: 'Clients and Ease of Use',
          href: '/whitepaper/clients#121-clients-and-ease-of-use'
        },
        {
          type: 'link',
          label: 'Client-Side SDKs (B2B Integration)',
          href: '/whitepaper/clients#122-client-side-sdks-b2b-integration'
        },
        {
          type: 'link',
          label: '[Coins.me](http://Coins.me) (Consumer App)',
          href: '/whitepaper/clients#123-coinsmehttpcoinsme-consumer-app'
        },
      ]
    },
    {
      type: 'category',
      label: '13. Governance',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'governance'},
      items: [
      ]
    },
    {
      type: 'category',
      label: '14. Token Economics',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'tokenomics'},
      items: [
        {
          type: 'link',
          label: 'Roles & Utilities',
          href: '/whitepaper/tokenomics#141-roles-utilities'
        },
        {
          type: 'link',
          label: 'Issuance & Allocations (illustrative; to be finalized)',
          href: '/whitepaper/tokenomics#142-issuance-allocations-illustrative-to-be-finalized'
        },
        {
          type: 'link',
          label: 'Treasury & Fees',
          href: '/whitepaper/tokenomics#143-treasury-fees'
        },
      ]
    },
    {
      type: 'category',
      label: '15. Disclosures & Risks',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'risks'},
      items: [
      ]
    },
    {
      type: 'category',
      label: '16. References',
      collapsible: true,
      collapsed: true,
      link: {type: 'doc', id: 'references'},
      items: [
      ]
    },
  ],
};

export default sidebars;
