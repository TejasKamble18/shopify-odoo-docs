---
id: import-customer
title: Import Customers
sidebar_label: Import Customers
---

# Import Customers

Sync your Shopify customers into Odoo contacts.

## Manual Import

1. Navigate to **Shopify → Operations → Import Customers**
2. Select your **Shopify Instance**
3. Set the **From Date** (leave empty to import all)
4. Click **Import Now**

## What Gets Imported

| Shopify Field | Odoo Field |
|---|---|
| First Name + Last Name | Contact Name |
| Email | Email |
| Phone | Phone |
| Address | Delivery Address |
| Tags | Tags |
| Company | Company Name |

## Auto Customer Creation

Enable automatic customer creation on order import in **Configuration → Order Settings → Auto Create Customer**. Customers are matched by email to avoid duplicates.
