---
id: import-products
title: Import Products
sidebar_label: Import Products
---

# Import Products

Import all products from your Shopify store into Odoo.

## Running a Full Import

1. Navigate to **Shopify → Products → Import Products**
2. Select your **Shopify Instance**
3. Leave the date filter empty for a full import, or set a **From Date** for incremental sync
4. Click **Import**

The import runs asynchronously via the queue system. Check progress in **Shopify → Operations → Queue**.

## What Gets Created in Odoo

| Shopify | Odoo |
|---|---|
| Product | Product Template |
| Variant (Color/Size) | Product Variant |
| Product Image | Product Image |
| Price | Sales Price |
| Collection | Internal Category |
| Tags | Tags |

## Matching Logic

The connector matches products by **Shopify Product ID** stored on the Odoo product. If no match is found, a new product is created.
