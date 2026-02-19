import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  ambassadorSidebar: [
    {
        "type": "category",
        "label": "Ambassador Program",
        "collapsible": true,
        "collapsed": false,
        "link": {
            "type": "doc",
            "id": "cypherpunk-20-manifesto"
        },
        "items": [
            "hierarchy",
            "four-tracks",
            "actions-by-role",
            "selection",
            "weekly-updates-offboarding",
            "discord-structure",
            "remuneration",
            "principles"
        ]
    }
  ],
};

export default sidebars;
