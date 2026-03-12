---
id: stock-information
title: Stock Information
sidebar_label: Stock Information
---

# Stock & Location Configuration

Configure how inventory levels sync between Shopify locations and Odoo warehouses.

## Location Mapping

Map Shopify fulfilment locations to Odoo stock locations:

1. Go to **Shopify → Configuration → Location Mapping**
2. Click **Import Locations** to fetch all Shopify locations
3. For each Shopify location, select the corresponding **Odoo Location**
4. Save

## Stock Update Method

| Method | Description |
|---|---|
| **On Hand Qty** | Syncs the current on-hand quantity |
| **Forecasted Qty** | Syncs the forecasted quantity |

## Inventory Sync Direction

| Direction | Description |
|---|---|
| **Odoo → Shopify** | Export stock from Odoo to Shopify |
| **Shopify → Odoo** | Import stock from Shopify to Odoo |
| **Bidirectional** | Real-time sync in both directions |
