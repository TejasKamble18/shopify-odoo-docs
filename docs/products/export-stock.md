---
id: export-stock
title: Export Stock to Shopify
sidebar_label: Export Stock
---

# Export Stock to Shopify

Push current Odoo inventory levels to Shopify.

## Manual Export

1. Navigate to **Shopify → Products → Export Stock**
2. Select your **Shopify Instance**
3. Select the **Warehouse** or **Location**
4. Click **Export**

The connector updates the inventory level for each mapped product in the selected Shopify location.

## Automatic Export

Enable the **Export Stock Scheduler** in your cron settings for automatic periodic export. See [Auto Scheduler](/docs/operations/auto-scheduler).

:::tip
For real-time stock updates, webhooks handle inventory changes from Shopify. For Odoo-originated stock changes (e.g., manufacturing, transfers), use the scheduled export or trigger a manual export.
:::
