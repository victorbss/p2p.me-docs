---
title: 7. Pricing & Oracle Mechanics
sidebar_label: 7. Pricing & Oracles
---

# 7. Pricing & Oracle Mechanics

[P2P.me](http://P2P.me) determines indicative pricing using **built-in oracle adapters** that aggregate rates from selected exchanges and P2P venues into a median/TWAP with fallbacks. Parameters: source set, staleness bounds, deviation thresholds, and circuit breakers. Quotes carry an **expiry** to limit exposure; if the oracle fails or exceeds deviation limits, orders pause or re-quote.
