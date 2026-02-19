import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  cotSidebar: [
    {
        "type": "category",
        "label": "Circles of Trust",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "what-is-a-circle-of-trust"
        },
        "items": [
            "why-circles-of-trust",
            "how-circles-work",
            "merchant-onboarding",
            "rewards",
            "insurance-system",
            "anti-collusion-measures",
            "role-based-access-control"
        ]
    }
  ],
};

export default sidebars;
