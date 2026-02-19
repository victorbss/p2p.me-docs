import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  governanceSidebar: [
    {
        "type": "category",
        "label": "Governance",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "00-key-terms"
        },
        "items": [
            "01-specification",
            "01-1-token-economy",
            "02-2-circle-configuration",
            "03-3-unified-proposal-system",
            "04-4-dispute-outcomes",
            "05-5-insurance-claim-outcomes",
            "06-6-parameters",
            "07-7-insurance-pools",
            "08-8-cot-oversight",
            "09-9-governance",
            "10-10-reputation-points-rp-system",
            "12-appendix-a-launch-configuration",
            "13-appendix-b-simulation-index",
            "14-appendix-c-simulation-results"
        ]
    }
  ],
};

export default sidebars;
