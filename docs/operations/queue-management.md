---
id: queue-management
title: Queue Management
sidebar_label: Queue Management
---

# Queue Management

The connector uses an async queue system for reliable, retryable processing of all sync operations.

## Viewing the Queue

Navigate to **Shopify → Operations → Queue**:

| Column | Description |
|---|---|
| **Name** | Record type (Order, Product, Customer) |
| **State** | Draft / In Progress / Done / Failed |
| **Instance** | Shopify store instance |
| **Created** | When the queue record was created |
| **Message** | Error details on failure |

## Queue States

| State | Meaning |
|---|---|
| **Draft** | Waiting to be processed |
| **In Progress** | Currently processing |
| **Done** | Successfully completed |
| **Failed** | Error — click to see details |

## Retrying Failed Records

1. Filter by **State = Failed**
2. Select the failed records
3. Click **Action → Set to Draft**
4. The cron will automatically reprocess them

## Bulk Queue Management

Use **Action → Mark as Done** to clear resolved errors from the view without reprocessing.
