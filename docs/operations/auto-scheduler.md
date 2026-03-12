---
id: auto-scheduler
title: Auto Scheduler
sidebar_label: Auto Scheduler
---

# Auto Scheduler (Cron Jobs)

The connector includes pre-configured scheduled actions for regular background sync.

## Available Cron Jobs

| Job | Default Interval | Purpose |
|---|---|---|
| Import Unshipped Orders | Every 15 minutes | Pull new orders from Shopify |
| Import Shipped Orders | Every 30 minutes | Update shipped orders |
| Export Stock to Shopify | Every 1 hour | Push inventory updates |
| Import Products | Every 6 hours | Sync product changes |
| Process Queue | Every 5 minutes | Process pending queue records |

## Configuring Schedules

1. Go to **Settings → Technical → Automation → Scheduled Actions**
2. Find the Shopify cron jobs (prefixed with "Shopify")
3. Click to open and adjust the **Interval Number** and **Interval Unit**
4. Enable/disable as needed

:::info
Webhooks provide real-time sync for most operations. Scheduled crons act as a safety net to catch anything missed by webhooks.
:::
