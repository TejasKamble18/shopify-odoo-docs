---
id: webhooks-configuration
title: Webhook Logs & Activity
sidebar_label: Webhook Activity
---

# Webhook Logs

Monitor incoming webhook events from Shopify in real time.

## Viewing Webhook Activity

Navigate to **Shopify → Reports → Webhook Logs**:

| Column | Description |
|---|---|
| **Event** | Webhook topic (e.g., `orders/create`) |
| **Status** | Received / Processed / Failed |
| **Instance** | Shopify store |
| **Payload** | Raw JSON payload from Shopify |
| **Received At** | Timestamp |

## Troubleshooting Failed Webhooks

If a webhook fails to process:
1. Click on the failed record to view the error message
2. Fix the underlying issue (e.g., missing product mapping)
3. Click **Reprocess** to retry
