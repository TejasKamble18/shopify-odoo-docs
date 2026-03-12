---
id: import-unshipped-orders
title: Import Unshipped Orders
sidebar_label: Import Unshipped Orders
---

# Import Unshipped Orders

Import all open, unpaid or unshipped orders from Shopify.

## Steps

1. Navigate to **Shopify → Orders → Import Unshipped Orders**
2. Select your **Shopify Instance**
3. Set the **From Date** (or leave empty for all)
4. Click **Import**

Each order is created as a Sales Order in Odoo with status **Draft** or **Confirmed** depending on your Auto Workflow settings.

## Matching Logic

Orders are matched by **Shopify Order ID**. Existing orders are updated; new orders are created.
