---
title: Enabling %WORKFLOW_PLURAL%
description: After testing your %WORKFLOW% you can enable it
---

After [testing](./testing.md) your %WORKFLOW% thoroughly you can enable it by clicking the "Enable" button in the %EMBEDDED_WORKFLOW_BUILDER%.
Enabling your %WORKFLOW% does several things:

- It makes a production-ready copy of your %WORKFLOW%. Any changes you make to the %WORKFLOW% after enabling it will not affect the production copy.
- If your workflow uses a [schedule trigger](./triggering.md#schedule-triggers), it will start running on the schedule you defined.
- If your workflow uses a [webhook trigger](./triggering.md#universal-webhook-triggers), it will start listening for incoming webhook requests using its production URL.
