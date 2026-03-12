---
id: auto-workflow
title: Auto Workflow
sidebar_label: Auto Workflow
---

# Auto Workflow

Auto Workflow automates the full order processing pipeline so you don't have to manually confirm, invoice, and ship each order.

## Workflow Configuration

Navigate to **Shopify → Configuration → Auto Workflow**:

| Setting | Description |
|---|---|
| **Confirm Sales Order** | Automatically confirm the SO |
| **Create Invoice** | Create invoice after confirmation |
| **Validate Invoice** | Automatically validate the invoice |
| **Register Payment** | Auto-register payment from Shopify |
| **Create Delivery** | Create delivery order |
| **Validate Delivery** | Auto-validate the delivery |

## Workflow Per Order Status

Create separate workflows for different Shopify order statuses:

- **Paid orders** → Full automation (confirm + invoice + ship)
- **Pending orders** → Create SO only, wait for payment
- **COD orders** → Create SO + delivery, skip invoice

## Payment Journal Mapping

Map Shopify payment gateways to Odoo accounting journals in **Shopify → Configuration → Payment Gateway Mapping**.
