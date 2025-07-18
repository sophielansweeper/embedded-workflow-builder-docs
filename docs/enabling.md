---
title: Enable %WORKFLOW_PLURAL%
description: After testing your %WORKFLOW% you can enable it
---

Your %WORKFLOW% has two copies: the draft copy that you build and test in the %EMBEDDED_WORKFLOW_BUILDER%, and the production copy that runs when your %WORKFLOW% is enabled.

At any point as you [test](./testing.md) your %WORKFLOW%, you can save a draft copy by clicking the **Save draft** button.
Clicking this button will not affect your production copy.

Once you are satisfied with testing and your %WORKFLOW% works as expected, you can enable the production copy by first clicking the arrow to the right of **Save draft** and then selecting **Save as new version**.
Give your version a comment (describing what you changed), and optionally select **Enable this version**.

![Save a new version](./assets/enabling/save-new-version.png)

Alternatively, you can enable your %WORKFLOW% by clicking the **Enable** button at the top left of the canvas.

Enabling your %WORKFLOW% has the following effects:

- It makes a production-ready copy of your %WORKFLOW%.
  Any changes you make to the %WORKFLOW% after enabling it will not affect the production copy unless you explicitly save a new version and enable it.
- If your workflow uses a [schedule trigger](./triggering.md#schedule-triggers), it will start running on the schedule you defined.
- If your workflow uses a [webhook trigger](./triggering.md#universal-webhook-triggers), it will start listening for incoming webhook requests using its production URL.
