---
title: Building %WORKFLOW_PLURAL%
description: Build new %WORKFLOW_PLURAL% using %COMPANY_POSESSIVE% %EMBEDDED_WORKFLOW_BUILDER%
---

%COMPANY_POSESSIVE% %EMBEDDED_WORKFLOW_BUILDER% lets you build %WORKFLOW_PLURAL% that connect %COMPANY_CORE_PRODUCT% to the other apps and services you use.
This article describes how to build %WORKFLOW_PLURAL%.

If you have not done so yet, please first review the [Getting Started](./get-started.md) guide.

## Creating a new %WORKFLOW%

To create a new %WORKFLOW% first log in to %COMPANY_CORE_PRODUCT% [here](%APP_LOGIN_URL%).
Next, %NAVIGATING_TO_BUILDER%.
Here, you will see all of the %WORKFLOW_PLURAL% that you've built.

To create a new %WORKFLOW%, click **+ %WORKFLOW%**.

## Steps

Actions, like downloading a file from an [SFTP server](./connectors/sftp.md) or posting a message to [Slack](./connectors/slack.md), are added as %WORKFLOW% **steps**.
Steps are executed in order, and results from one step can be used as inputs for subsequent steps.

Steps are run in order from top to bottom, and you can add conditional logic to your %WORKFLOW% with [branching](./branching.md), or run a series of steps within a [loop](./looping.md).
If one step throws an error, your %WORKFLOW% stops running until it is invoked again (though, you can decide how to [handle errors](./error-handling.md)).

### The trigger step

The first step of your %WORKFLOW% is the **trigger** step, which determines when your %WORKFLOW% will run.
The [triggers](./triggering.md) article details how triggers work, and how to invoke your %WORKFLOW%.

### Adding steps to a %WORKFLOW%

To add a step to an %WORKFLOW%, click the **+** icon underneath the trigger or another action.

Select the connector and action you would like to add to your integration.
For example, you can choose the **Amazon DynamoDB** connector, and then select the **Query Items** action.

![Add a step to a %WORKFLOW%](./assets/building/add-step.png)

### Cloning steps

TODO

### Changing step names and descriptions

TODO

## Passing data between steps

TODO

### The trigger's step results

TODO

### Step results

TODO

### Step inputs

TODO

#### Value inputs

TODO

#### Reference inputs

TODO

#### Config variable inputs

TODO: is this a thing in EWB?

#### Template inputs

TODO
