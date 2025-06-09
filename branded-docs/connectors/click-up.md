---
title: ClickUp Connector
sidebar_label: ClickUp
description: Use the ClickUp component to manage users, projects, and teams in your ClickUp workspace.
---

![ClickUp](./assets/click-up.png#connector-icon)
Use the ClickUp component to manage users, projects, and teams in your ClickUp workspace.

## Connections

### ClickUp OAuth 2.0

ClickUp OAuth 2.0

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                                                                                         | Default |
| ------------- | ---------------------------------------------------------------------------------------------------------------- | ------- |
| Client ID     | Follow this step to generate https://clickup.com/api/developer-portal/authentication/#step-1-create-an-oauth-app |         |
| Client Secret | Follow this step to generate https://clickup.com/api/developer-portal/authentication/#step-1-create-an-oauth-app |         |

### ClickUp Personal Access Token

ClickUp Personal Access Token

| Input                 | Comments                                                                                                                                               | Default |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Personal Access Token | Follow the next steps to get an API key https://help.clickup.com/hc/en-us/articles/6303426241687-Getting-Started-with-the-ClickUp-API#personal-api-key |         |

## Triggers

### Webhook

Receive and validate webhook requests from ClickUp for webhooks you configure.

## Actions

### Add Guest to Folder

Share a Folder with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                   |         |
| Folder ID        | Folder ID                                                                         |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         | create  |
| Debug Request    | Enabling this flag will log out the current request.                              | false   |

### Add Guest to List

Share a List with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                   |         |
| List ID          | List ID                                                                           |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         | create  |
| Debug Request    | Enabling this flag will log out the current request.                              | false   |

### Add Guest to Task

Share a task with a guest.

| Input            | Comments                                                                          | Default |
| ---------------- | --------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                   |         |
| Task ID          | Task ID                                                                           |         |
| Guest ID         | Guest ID                                                                          |         |
| Include Shared   | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Custom Task ID   | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID          | Only used when the custom_task_ids parameter is set to true                       |         |
| Permission Level | Can be read (view only), comment, edit, or create (full).                         |         |
| Debug Request    | Enabling this flag will log out the current request.                              | false   |

### Add Task to List

Add a new task to an additional List.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| List ID       | List ID                                              |         |
| Task ID       | Task ID                                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Folder

Add a new Folder to a Space.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | Space ID value.                                      |         |
| Name          | Folder Name                                          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create List

Add a new list to a folder.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                      |         |
| Folder ID     | Folder ID                                                                            |         |
| Name          | Name of the new list                                                                 |         |
| Content       | Content                                                                              |         |
| Due Date      | Initial due date of the new list                                                     |         |
| Due Date Time | Due Date Time                                                                        | false   |
| Priority      | Initial priority of the new list                                                     |         |
| Assignee      | Include a user_id to assign this List.                                               |         |
| Status        | Status refers to the List color rather than the task Statuses available in the List. |         |
| Name          | Name of the new list                                                                 |         |
| Debug Request | Enabling this flag will log out the current request.                                 | false   |

### Create Space

Add a new Space to a Workspace.

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| Connection                |                                                      |         |
| Team ID                   | Team ID (Workspace) value                            |         |
| Space Name                | Space Name                                           |         |
| Multiple Assignees        | Will this Space have multiple assignees?             | true    |
| Enable Due Dates          | Enable Due Dates?                                    | true    |
| Use Start Date            | Use Start Date?                                      | true    |
| Remap Due Dates           | Remap Due Dates?                                     | true    |
| Remap closed Due Dates    | Remap closed Due Dates?                              | false   |
| Enable Time Tracking      | Enable Time Tracking?                                | true    |
| Enable Tags               | Enable Tags?                                         | true    |
| Enable Time Estimates     | Enable Time Estimates?                               | true    |
| Enable Checklists         | Enable Checklists?                                   | true    |
| Enable Custom Fields      | Enable Custom Fields?                                | true    |
| Enable Remap Dependencies | Enable Remap Dependencies?                           | true    |
| Enable Dependency Warning | Enable Dependency Warning?                           | true    |
| Enable Portfolios         | Enable Portfolios?                                   | true    |
| Debug Request             | Enabling this flag will log out the current request. | false   |

### Create Task

Create a new Task

| Input                        | Comments                                                                                                                                                                     | Default |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                   |                                                                                                                                                                              |         |
| List ID                      | List ID                                                                                                                                                                      |         |
| Custom Task ID               | If you want to reference a task by it's custom task id, this value must be true.                                                                                             | false   |
| Team ID                      | Only used when the custom_task_ids parameter is set to true.                                                                                                                 |         |
| Name                         | Task Name                                                                                                                                                                    |         |
| Description                  | Task Description                                                                                                                                                             |         |
| Markdown Description         | Markdown formatted description.                                                                                                                                              |         |
| Assignee                     | Task Assignees                                                                                                                                                               |         |
| Tag                          | Task Tags                                                                                                                                                                    |         |
| Status                       | Task Status                                                                                                                                                                  |         |
| Priority                     | Task Priority                                                                                                                                                                |         |
| Due Date                     | Task Due Date                                                                                                                                                                |         |
| Due Date Time                | Task Due Date Time                                                                                                                                                           | false   |
| Time Estimate                | Task Time Estimate                                                                                                                                                           |         |
| Start Date                   | Task Start Date                                                                                                                                                              |         |
| Start Date Time              | Task Start Date Time                                                                                                                                                         | false   |
| Notify All                   | If notify_all is true, notifications will be sent to everyone including the creator of the comment.                                                                          | true    |
| Parent                       | You can create a subtask by including an existing task ID. The parent task ID you include cannot be a subtask, and must be in the same List specified in the path parameter. |         |
| Links To                     | Include a task ID to create a linked dependency with your new task.                                                                                                          |         |
| Check Required Custom Fields | When creating a task via API any required Custom Fields are ignored by default (false).                                                                                      | false   |
| Custom Fields                |                                                                                                                                                                              |         |
| Debug Request                | Enabling this flag will log out the current request.                                                                                                                         | false   |

### Create Task Attachment

Upload a file to a task as an attachment.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Task ID        | Task ID                                                                          |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                     |         |
| File           | File to attach.                                                                  |         |
| File Name      | Name of the file to attach.                                                      |         |
| Debug Request  | Enabling this flag will log out the current request.                             | false   |

### Create Task Comment

Add a new comment to a task.

| Input          | Comments                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                     |         |
| Task ID        | Task ID                                                                                             |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true.                    | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                                        |         |
| Comment Text   | Comment Text                                                                                        |         |
| Notify All     | If notify_all is true, notifications will be sent to everyone including the creator of the comment. | true    |
| Assignee       | Assignee by ID                                                                                      |         |
| Debug Request  | Enabling this flag will log out the current request.                                                | false   |

### Create Team

This endpoint is used to create Teams: user groups which are groups of users you can assign items to in your Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Name          | Desired Team Name                                    |         |
| Member        | Add user by ID                                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Create Time Entry

Create a time entry.

| Input            | Comments                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                |         |
| Team ID          | Team ID (Workspace) value                                                                                      |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true.                               | false   |
| Custom Team ID   | Only used when the custom_task_ids parameter is set to true.                                                   |         |
| Description      | Description                                                                                                    |         |
| Start            | Start time                                                                                                     |         |
| Include Subtasks | Billable                                                                                                       | false   |
| Duration         | Duration                                                                                                       |         |
| Assignee         | Workspace owners and admins can include unknown user id. Workspace members can only include their own user id. |         |
| Task ID          | Associate a time entry with a task by ID                                                                       |         |
| Tags             | Code should have this format                                                                                   |         |
| Debug Request    | Enabling this flag will log out the current request.                                                           | false   |

### Create Webhook

Create a new webhook for a specific List.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace)                                  |         |
| Endpoint      | URL of the webhook endpoint.                         |         |
| Space ID      | Space ID                                             |         |
| Event         | Event type to trigger the webhook.                   |         |
| Folder ID     | Folder ID                                            |         |
| List ID       | List ID                                              |         |
| Task ID       | Task ID                                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Comment

Delete a task comment.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Comment ID    | Comment ID                                           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Folder

Delete a Folder from your Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Folder ID     | Folder ID                                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete List

Delete a List from your Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| List ID       | List ID                                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Space

Delete a Space from your Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | Space ID value.                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Task

Delete a task from your Workspace.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Task ID        | Task ID                                                                          |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                     |         |
| Debug Request  | Enabling this flag will log out the current request.                             | false   |

### Delete Team

This endpoint is used to remove a Team: user group from your Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Group ID      | Team ID (user group).                                |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Time Entry

Delete a time entry from a Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Timer ID      | The ID of a time entry.                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Delete Webhook

Delete a webhook.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Webhook ID    | Webhook ID                                           |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Edit Guest on Workspace

Rename and configure options for a guest.

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Team ID                | Team ID (Workspace) value                            |         |
| Username               |                                                      |         |
| Can Edit Tags          |                                                      | true    |
| Can See Time Spent     |                                                      | true    |
| Can See Time Estimated |                                                      | true    |
| Can Create Views       |                                                      | true    |
| Custom Role ID         | Custom Role ID value                                 |         |
| Guest ID               | Guest ID                                             |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### Edit User On Workspace

Update a user's name and role.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Team ID        | Team ID (Workspace) value                            |         |
| Connection     |                                                      |         |
| Admin          | Make an admin?                                       | true    |
| Custom Role ID | Custom Role ID value                                 |         |
| User ID        | User ID value                                        |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### Get Accessible Custom Fields

View the Custom Fields available on tasks in a specific List.

| Input         | Comments                                                            | Default |
| ------------- | ------------------------------------------------------------------- | ------- |
| Connection    |                                                                     |         |
| List ID       | Only include time entries associated with tasks in a specific List. |         |
| Debug Request | Enabling this flag will log out the current request.                | false   |

### Get Authorized Teams (Workspaces)

View the Workspaces available to the authenticated user.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Folder

View the Lists within a Folder.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Folder ID     | Folder ID                                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Guest

View information about a guest in a Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Guest ID      | Guest ID                                             |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get List

View details for a specific List.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| List ID       | List ID                                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get List Members

View the people who have access to a List.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| List ID       | List ID                                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Singular Time Entry

View a single time entry.

| Input                  | Comments                                                                                         | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                  |         |
| Team ID                | Team ID (Workspace) value                                                                        |         |
| Timer ID               | The ID of a time entry.                                                                          |         |
| Include Task Tags      | Include task tags in the response for time entries associated with tasks.                        | true    |
| Include Location Names | Include the names of the List, Folder, and Space along with the list_id,folder_id, and space_id. | true    |
| Debug Request          | Enabling this flag will log out the current request.                                             | false   |

### Get Space

View the Spaces available in a Workspace by ID.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | Space ID value.                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Task

View information about a task.

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Task ID          | Task ID                                                                          |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID          | Only used when the custom_task_ids parameter is set to true.                     |         |
| Include Subtasks | Include or exclude subtasks. By default, subtasks are excluded.                  | false   |
| Debug Request    | Enabling this flag will log out the current request.                             | false   |

### Get Task Comments

View task comments.

| Input          | Comments                                                                         | Default |
| -------------- | -------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                  |         |
| Task ID        | Task ID                                                                          |         |
| Custom Task ID | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Team ID        | Only used when the custom_task_ids parameter is set to true.                     |         |
| Start ID       | Enter the Comment id of a task comment.                                          |         |
| Start Date     | Unix time in milliseconds                                                        |         |
| Debug Request  | Enabling this flag will log out the current request.                             | false   |

### Get Task Members

View the members assigned to a task.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Task ID       | Task ID                                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Team

This endpoint is used to view Teams: user groups in your Workspace.

| Input         | Comments                                                                               | Default |
| ------------- | -------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                        |         |
| Team ID       | Team ID (Workspace) value                                                              |         |
| Group IDs     | Enter one or more Team ids (user groups) to retrieve information about specific Teams. |         |
| Debug Request | Enabling this flag will log out the current request.                                   | false   |

### Get Time Entries Within a Date Range

View time entries filtered by start and end date. By default, this endpoint returns time entries from the last 30 days created by the authenticated user.

| Input                  | Comments                                                                                         | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------- |
| Connection             |                                                                                                  |         |
| Team ID                | Team ID (Workspace) value                                                                        |         |
| Start Date             | Unix time in milliseconds                                                                        |         |
| End Date               | Unix time in milliseconds                                                                        |         |
| Assignee               | Filter by User ID                                                                                |         |
| Include Task Tags      | Include task tags in the response for time entries associated with tasks.                        | true    |
| Include Location Names | Include the names of the List, Folder, and Space along with the list_id,folder_id, and space_id. | true    |
| Space ID               | Only include time entries associated with tasks in a specific Space.                             |         |
| Folder ID              | Only include time entries associated with tasks in a specific Folder.                            |         |
| List ID                | Only include time entries associated with tasks in a specific List.                              |         |
| Task ID                | Only include time entries associated with a specific task.                                       |         |
| Custom Task ID         | If you want to reference a task by it's custom task id, this value must be true.                 | false   |
| Custom Team ID         | Only used when the custom_task_ids parameter is set to true.                                     |         |
| Debug Request          | Enabling this flag will log out the current request.                                             | false   |

### Get User

View information about a user in a Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Team ID       | Team ID (Workspace) value                            |         |
| User ID       | User ID value                                        |         |
| Connection    |                                                      |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Webhooks

View all webhooks for a list.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Workspace Plan

View the current Plan for the specified Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Get Workspace Seats

View the used, total, and available member and guest seats for a Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Invite Guest to Workspace

Invite a new guest to a workspace.

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Team ID                | Team ID (Workspace) value                            |         |
| Email                  | Email address of the invited guest                   |         |
| Can Edit Tags          |                                                      | true    |
| Can See Time Spent     |                                                      | true    |
| Can See Time Estimated |                                                      | true    |
| Can Create Views       |                                                      | true    |
| Custom Role ID         | Custom Role ID value                                 |         |
| Debug Request          | Enabling this flag will log out the current request. | false   |

### Invite User To Workspace

Invite someone to join your Workspace as a member.

| Input          | Comments                                             | Default |
| -------------- | ---------------------------------------------------- | ------- |
| Team ID        | Team ID (Workspace) value                            |         |
| Connection     |                                                      |         |
| Email          | Email address of User being added                    |         |
| Admin          | Make an admin?                                       | true    |
| Custom Role ID | Custom Role ID value                                 |         |
| Debug Request  | Enabling this flag will log out the current request. | false   |

### List Folders

View all folders in a space.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Space ID      | Space ID value.                                      |         |
| Archived      | Archived?                                            | false   |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Lists

View the Lists within a Folder.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Folder ID     | Folder ID                                            |         |
| Archived      | Filter for archived Lists?                           | false   |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Spaces

View the Spaces available in a Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### List Tasks

View the tasks in a List.

| Input                     | Comments                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------- | ------- |
| Connection                |                                                                        |         |
| List ID                   | Team ID (Workspace)                                                    |         |
| Archived                  | Archived?                                                              | false   |
| Page                      |                                                                        | 0       |
| Order By                  | Order by a particular field. By default, tasks are ordered by created. |         |
| Reverse                   | Tasks are displayed in reverse order.                                  | false   |
| Include Subtasks          | Include or exclude subtasks. By default, subtasks are excluded.        | false   |
| Include Closed            | Include or excluse closed tasks. By default, they are excluded.        | false   |
| Assignee                  | Filter by Assignees. Add Assingee                                      |         |
| Tag                       | Filter by tags. Add a tag to filter.                                   |         |
| Due Date Greater Than     | Filter by due date greater than Unix time in milliseconds.             |         |
| Due Date Less Than        | Filter by due date less than Unix time in milliseconds.                |         |
| Date Created Greater Than | Filter by date created greater than Unix time in milliseconds.         |         |
| Date Created Less Than    | Filter by date created less than Unix time in milliseconds.            |         |
| Date Updated Greater Than | Filter by date updated greater than Unix time in milliseconds.         |         |
| Date Updated Less Than    | Filter by date updated less than Unix time in milliseconds.            |         |
| Date Done Greater Than    | Filter by date done greater than Unix time in milliseconds.            |         |
| Date Done Less Than       | Filter by date done less than Unix time in milliseconds.               |         |
| Custom Fields             | Code should have this format                                           |         |
| Debug Request             | Enabling this flag will log out the current request.                   | false   |

### Raw Request

Send raw HTTP request to ClickUp

| Input                   | Comments                                                                                                                                                                                                                                             | Default |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                      |         |
| URL                     | Input the path only (/space/${spaceId}/tag), The base URL is already included (https://api.clickup.com/api/v2). For example, to connect to https://api.clickup.com/api/v2/space/${spaceId}/tag, only /space/${spaceId}/tag is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                              |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                            |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                 |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                     |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                               |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                  |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                          |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                             | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                  |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                 | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                  | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                     | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                  | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                        | false   |

### Remove Custom Field Value

Remove the data from a Custom Field on a task. This does not delete the option from the Custom Field.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| Task ID        | Enter the task ID of the task you want to update.                                 |         |
| Field ID       | Enter the universal unique identifier (UUID) of the Custom Field you want to set. |         |
| Custom Task ID | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true                       |         |
| Debug Request  | Enabling this flag will log out the current request.                              | false   |

### Remove Guest From Folder

Revoke a guest's access to a Folder.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| Folder ID      | Folder ID                                                                         |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Debug Request  | Enabling this flag will log out the current request.                              | false   |

### Remove Guest From List

Revoke a guest's access to a List.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| List ID        | List ID                                                                           |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Debug Request  | Enabling this flag will log out the current request.                              | false   |

### Remove Guest From Task

Revoke a guest's access to a task.

| Input          | Comments                                                                          | Default |
| -------------- | --------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                   |         |
| Task ID        | Task ID                                                                           |         |
| Guest ID       | Guest ID                                                                          |         |
| Include Shared | Exclude details of items shared with the guest by setting this parameter to false | true    |
| Custom Task ID | If you want to reference a task by its Custom Task ID, this value must be true.   | true    |
| Team ID        | Only used when the custom_task_ids parameter is set to true                       |         |
| Debug Request  | Enabling this flag will log out the current request.                              | false   |

### Remove Guest From Workspace

Revoke a guest's access to a Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Guest ID      | Guest ID                                             |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Remove Task From List

Remove a task from an additional List. You can't remove a task from its home List.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| List ID       | List ID                                              |         |
| Task ID       | Task ID                                              |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Remove User From Workspace

Deactivate a user from a Workspace.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Team ID       | Team ID (Workspace) value                            |         |
| Connection    |                                                      |         |
| User ID       | User ID value                                        |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Set Custom Field Value

Update the value of a Custom Field on a task.

| Input         | Comments                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                   |         |
| Task ID       | Enter the task ID of the task you want to update.                                 |         |
| Field ID      | Enter the universal unique identifier (UUID) of the Custom Field you want to set. |         |
| Field Value   |                                                                                   |         |
| Value Type    |                                                                                   |         |
| Debug Request | Enabling this flag will log out the current request.                              | false   |

### Start a Time Entry

Start a timer for the authenticated user.

| Input            | Comments                                                                         | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                  |         |
| Team ID          | Team ID (Workspace) value                                                        |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true. | false   |
| Custom Team ID   | Only used when the custom_task_ids parameter is set to true.                     |         |
| Description      | Description                                                                      |         |
| Include Subtasks | Billable                                                                         | false   |
| Task ID          | Associate a time entry with a task by ID                                         |         |
| Tag name         | Add a tag name                                                                   |         |
| Debug Request    | Enabling this flag will log out the current request.                             | false   |

### Stop a Time Entry

Stop a timer that's currently running for the authenticated user.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Team ID       | Team ID (Workspace) value                            |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Comment

Replace the content of a task comment, assign a comment, and mark a comment as resolved.

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Comment ID    | Comment ID                                           |         |
| Comment Text  | Comment Text                                         |         |
| Resolved      | Resolved?                                            | false   |
| Assignee      | Assignee by ID                                       |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update Folder

Rename a Folder

| Input         | Comments                                             | Default |
| ------------- | ---------------------------------------------------- | ------- |
| Connection    |                                                      |         |
| Folder ID     | Folder ID                                            |         |
| Name          | Folder Name                                          |         |
| Debug Request | Enabling this flag will log out the current request. | false   |

### Update List

Rename a List, update the List Info description, set a due date/time, set the List's priority, set an assignee, set or remove the List color.

| Input         | Comments                                                                             | Default |
| ------------- | ------------------------------------------------------------------------------------ | ------- |
| Connection    |                                                                                      |         |
| List ID       | List ID                                                                              |         |
| Name          | Name of the list                                                                     |         |
| Content       | Content                                                                              |         |
| Due Date      | Due date of the list                                                                 |         |
| Due Date Time | Set to true if due date has a time                                                   | false   |
| Priority      | Priority of the list                                                                 |         |
| Assignee      | User ID of the list assignee                                                         |         |
| Status        | Status refers to the List color rather than the task Statuses available in the List. |         |
| Unset Status  | By default, this is false. To remove the List color use unset_status: true.          | false   |
| Debug Request | Enabling this flag will log out the current request.                                 | false   |

### Update Space

Rename, set the Space color, and enable ClickApps for a Space.

| Input                     | Comments                                             | Default |
| ------------------------- | ---------------------------------------------------- | ------- |
| Connection                |                                                      |         |
| Space ID                  | Space ID value.                                      |         |
| Space Name                | Space Name                                           |         |
| Multiple Assignees        | Will this Space have multiple assignees?             | true    |
| Enable Due Dates          | Enable Due Dates?                                    | true    |
| Use Start Date            | Use Start Date?                                      | true    |
| Remap Due Dates           | Remap Due Dates?                                     | true    |
| Remap closed Due Dates    | Remap closed Due Dates?                              | false   |
| Enable Time Tracking      | Enable Time Tracking?                                | true    |
| Enable Tags               | Enable Tags?                                         | true    |
| Enable Time Estimates     | Enable Time Estimates?                               | true    |
| Enable Checklists         | Enable Checklists?                                   | true    |
| Enable Custom Fields      | Enable Custom Fields?                                | true    |
| Enable Remap Dependencies | Enable Remap Dependencies?                           | true    |
| Enable Dependency Warning | Enable Dependency Warning?                           | true    |
| Enable Portfolios         | Enable Portfolios?                                   | true    |
| Color                     | Hex Color Number                                     |         |
| Private                   | Private?                                             | true    |
| Admin Can Manage          | Admin Can Manage?                                    | true    |
| Debug Request             | Enabling this flag will log out the current request. | false   |

### Update Task

Update a task

| Input                | Comments                                                                                  | Default |
| -------------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                           |         |
| Task ID              | Task ID                                                                                   |         |
| Custom Task ID       | If you want to reference a task by it's custom task id, this value must be true.          | false   |
| Team ID              | Only used when the custom_task_ids parameter is set to true.                              |         |
| Name                 | Task Name                                                                                 |         |
| Description          | Task Description                                                                          |         |
| Markdown Description | Markdown formatted description.                                                           |         |
| Status               | Task Status                                                                               |         |
| Priority             | Task Priority                                                                             |         |
| Due Date             | Task Due Date                                                                             |         |
| Due Date Time        | Task Due Date Time                                                                        | false   |
| Parent               | You can move a subtask to another parent task by including "parent" with a valid task id. |         |
| Time Estimate        | Task Time Estimate                                                                        |         |
| Start Date           | Task Start Date                                                                           |         |
| Start Date Time      | Task Start Date Time                                                                      | false   |
| Add Assignee         | Add Assignee                                                                              |         |
| Remove Assignee      | Remove Assignee                                                                           |         |
| Archived             | Include Archived?                                                                         | false   |
| Debug Request        | Enabling this flag will log out the current request.                                      | false   |

### Update Team

This endpoint is used to manage Teams: user groups which are groups of users you can assign items to in your Workspace

| Input         | Comments                                                                                        | Default |
| ------------- | ----------------------------------------------------------------------------------------------- | ------- |
| Connection    |                                                                                                 |         |
| Group ID      | Team ID (user group).                                                                           |         |
| Team Name     | Desired Team Name                                                                               |         |
| Team Handle   | You may update the team handle which is used to @mention a Team (user group) in your Workspace. |         |
| Add Member    | Add members by ID. Comma separate each user ID.                                                 |         |
| Remove Member | Remove members by ID. Comma separate each user ID.                                              |         |
| Debug Request | Enabling this flag will log out the current request.                                            | false   |

### Update Time Entry

Update the details of a time entry.

| Input            | Comments                                                                                                       | Default |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                                                |         |
| Team ID          | Team ID (Workspace) value                                                                                      |         |
| Custom Task ID   | If you want to reference a task by it's custom task id, this value must be true.                               | false   |
| Custom Team ID   | Only used when the custom_task_ids parameter is set to true.                                                   |         |
| Description      | Description                                                                                                    |         |
| Start            | Start time                                                                                                     |         |
| Include Subtasks | Billable                                                                                                       | false   |
| Duration         | Duration                                                                                                       |         |
| Assignee         | Workspace owners and admins can include unknown user id. Workspace members can only include their own user id. |         |
| Task ID          | Associate a time entry with a task by ID                                                                       |         |
| Timer ID         | The ID of a time entry.                                                                                        |         |
| Tag Action       | Tag Action (use replace, add or remove)                                                                        |         |
| End              | End time                                                                                                       |         |
| Tags             | Code should have this format                                                                                   |         |
| Debug Request    | Enabling this flag will log out the current request.                                                           | false   |

### Update Webhook

Update the configuration of a webhook.

| Input         | Comments                                                                | Default |
| ------------- | ----------------------------------------------------------------------- | ------- |
| Connection    |                                                                         |         |
| Webhook ID    | Webhook ID                                                              |         |
| Endpoint      | URL of the webhook endpoint.                                            |         |
| All Events    | Subscribe to all events, when set to true it overrides the event inputs | false   |
| Event         | Event type to trigger the webhook.                                      |         |
| Status        | Status                                                                  |         |
| Debug Request | Enabling this flag will log out the current request.                    | false   |
