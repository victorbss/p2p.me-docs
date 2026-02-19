import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tokenomicsSidebar: [
    {
        "type": "category",
        "label": "Token Economics",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "overview"
        },
        "items": [
            "token-utility",
            "token-allocation",
            "metadao-sale",
            "vesting-schedules",
            "buy-and-burn",
            "staking-mechanics",
            "progressive-decentralization",
            "governance-mechanics",
            "disclosures"
        ]
    }
  ],
};

export default sidebars;
