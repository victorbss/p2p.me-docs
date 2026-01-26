import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  sdkSidebar: [
    {
        "type": "category",
        "label": "P2P SDK Documentation",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "p2p-sdk-documentation"
        },
        "items": []
    },
    {
        "type": "category",
        "label": "1. Getting Started",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "getting-started"
        },
        "items": [
            {
                "type": "link",
                "label": "1.1 Installation",
                "href": "/sdk/getting-started#11-installation"
            }
        ]
    },
    {
        "type": "category",
        "label": "or",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "or"
        },
        "items": [
            {
                "type": "link",
                "label": "1.2 Quick Start",
                "href": "/sdk/or#12-quick-start"
            },
            {
                "type": "link",
                "label": "1.3 Configuration Options",
                "href": "/sdk/or#13-configuration-options"
            }
        ]
    },
    {
        "type": "category",
        "label": "2. Authentication",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "authentication"
        },
        "items": [
            {
                "type": "link",
                "label": "2.1 API Keys",
                "href": "/sdk/authentication#21-api-keys"
            },
            {
                "type": "link",
                "label": "2.2 JWT Tokens",
                "href": "/sdk/authentication#22-jwt-tokens"
            }
        ]
    },
    {
        "type": "category",
        "label": "3. Trading API",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "trading-api"
        },
        "items": [
            {
                "type": "link",
                "label": "3.1 Creating an Order",
                "href": "/sdk/trading-api#31-creating-an-order"
            },
            {
                "type": "link",
                "label": "3.2 Listing Orders",
                "href": "/sdk/trading-api#32-listing-orders"
            },
            {
                "type": "link",
                "label": "3.3 Order Lifecycle",
                "href": "/sdk/trading-api#33-order-lifecycle"
            }
        ]
    },
    {
        "type": "category",
        "label": "4. Webhooks",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "webhooks"
        },
        "items": [
            {
                "type": "link",
                "label": "4.1 Setting Up Webhooks",
                "href": "/sdk/webhooks#41-setting-up-webhooks"
            },
            {
                "type": "link",
                "label": "4.2 Webhook Events",
                "href": "/sdk/webhooks#42-webhook-events"
            }
        ]
    },
    {
        "type": "category",
        "label": "5. Error Handling",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "error-handling"
        },
        "items": [
            {
                "type": "link",
                "label": "5.1 Error Codes",
                "href": "/sdk/error-handling#51-error-codes"
            },
            {
                "type": "link",
                "label": "5.2 Common Errors",
                "href": "/sdk/error-handling#52-common-errors"
            }
        ]
    },
    {
        "type": "category",
        "label": "6. Best Practices",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "best-practices"
        },
        "items": [
            {
                "type": "link",
                "label": "6.1 Security",
                "href": "/sdk/best-practices#61-security"
            },
            {
                "type": "link",
                "label": "6.2 Performance",
                "href": "/sdk/best-practices#62-performance"
            }
        ]
    },
    {
        "type": "category",
        "label": "7. Support",
        "collapsible": true,
        "collapsed": true,
        "link": {
            "type": "doc",
            "id": "support"
        },
        "items": []
    }
],
};

export default sidebars;
