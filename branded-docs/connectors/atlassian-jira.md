---
title: Jira Connector
sidebar_label: Jira
description: Manage Jira issues, comments, projects and users
---

![Jira](./assets/atlassian-jira.png#connector-icon)
Manage Jira issues, comments, projects and users

## Connections

### Jira Basic Connection

Jira Basic Connection

| Input    | Comments                                                                                                          | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------- | ------- |
| Username | Provide a valid username for the given jira account you want to connect.                                          |         |
| API Key  | Provide an api token to authenticate all requests with. Cloud users need to generate an API token for this value. |         |
| Host     | Provide a string value for the URL of your Jira account.                                                          |         |
| Version  | Select an API version for your Jira API request                                                                   | 3       |

### Jira OAuth 2.0 Connection

Jira OAuth 2.0 Connection

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input          | Comments                                                                                                                                                                                                              | Default                                                                                                                                                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL  | The OAuth 2.0 Authorization URL for Jira                                                                                                                                                                              | https://auth.atlassian.com/authorize?audience=api.atlassian.com&prompt=consent                                                                                                                                                |
| Token URL      | The OAuth 2.0 Token URL for Jira                                                                                                                                                                                      | https://auth.atlassian.com/oauth/token                                                                                                                                                                                        |
| Scopes         | A space-delimited set of one or more scopes to get the user's permission to access.                                                                                                                                   | read:project:jira read:user:jira write:issue:jira read:issue:jira read:issue-link:jira write:issue-link:jira read:issue-link-type:jira write:issue-link-type:jira read:issue.transition:jira delete:issue:jira offline_access |
| Client ID      |                                                                                                                                                                                                                       |                                                                                                                                                                                                                               |
| Client Secret  |                                                                                                                                                                                                                       |                                                                                                                                                                                                                               |
| Jira Site Name | By default this connector connects to the first Jira site this user has access to. If you have multiple Jira sites, please specify which one you would like to connect to, you can use the site name or the full url. |                                                                                                                                                                                                                               |
| Version        | Select an API version for your Jira API request                                                                                                                                                                       | 3                                                                                                                                                                                                                             |

## Actions

### Add Comment

Add a comment to an existing issue

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Issue ID       | Provide the ID of the Issue.                                                                                  |         |
| Comment        | Provide a string value for the comment.                                                                       |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Add Issue Attachment

Add a file attachment to an issue

| Input      | Comments                                                     | Default |
| ---------- | ------------------------------------------------------------ | ------- |
| Connection |                                                              |         |
| Issue ID   | Provide the ID of the Issue.                                 |         |
| File       | The file to upload - either string contents or a binary file |         |
| File Name  | The name of the file to upload                               |         |

### Create Issue

Create an issue within a given project

| Input               | Comments                                                                                                                                                                                                                           | Default                                                                                                                                                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                 |
| Project ID          | Provide the ID or Name of the Project.                                                                                                                                                                                             |                                                                                                                                                                                                                                 |
| Summary             | Provide a string value for the summary of the issue.                                                                                                                                                                               |                                                                                                                                                                                                                                 |
| Description         | Provide a string value for the description of the issue.                                                                                                                                                                           |                                                                                                                                                                                                                                 |
| ADF Description     | The above json code will print: 'Some text' in the Jira Issue description, to get more info visit: https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/ to get a JSON representation of your description. | <code>{<br /> "version": 1,<br /> "type": "doc",<br /> "content": [<br /> {<br /> "type": "paragraph",<br /> "content": [<br /> {<br /> "type": "text",<br /> "text": "Some text"<br /> }<br /> ]<br /> }<br /> ]<br />}</code> |
| Issue Type Name     | Provide a value for the name type of the issue. Use this field or the Issue Type ID field.                                                                                                                                         |                                                                                                                                                                                                                                 |
| Issue Type ID       | Provide the ID of the Issue Type. Use this field or the Issue Type Name field.                                                                                                                                                     |                                                                                                                                                                                                                                 |
| Assignee Account ID | Provide the Account ID for the person being assigned the issue.                                                                                                                                                                    |                                                                                                                                                                                                                                 |
| Reporter Account ID | Provide the Account ID for the person that is reporting the issue.                                                                                                                                                                 |                                                                                                                                                                                                                                 |
| Due Date            | Provide due date for the issue.                                                                                                                                                                                                    |                                                                                                                                                                                                                                 |
| Priority            | Provide the unique identifier of the priority. This value can either be an Id, key, or name of the desired record.                                                                                                                 |                                                                                                                                                                                                                                 |
| Labels              | Provide a list of labels for the issue.                                                                                                                                                                                            |                                                                                                                                                                                                                                 |
| Versions            | Provide JSON data for the versions. You must supply a JSON array with an object containing an Id.                                                                                                                                  |                                                                                                                                                                                                                                 |
| Fix Versions        | Provide JSON data for the fix versions. Your object must have a property 'id'                                                                                                                                                      |                                                                                                                                                                                                                                 |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                      |                                                                                                                                                                                                                                 |
| Values              | The names of the fields and their values to use when creating/updating a record                                                                                                                                                    |                                                                                                                                                                                                                                 |

### Create User

Create a new user record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Email Address  | Provide a string value for a valid email address.                                                             |         |
| Username       | Provide a string value for the username of the user.                                                          |         |
| Password       | Provide a password to assign to the user.                                                                     |         |
| Notifications  | This flag will determine if the user will receive notifications.                                              | false   |
| Display Name   | Provide a string value for the display name to assign to the new user.                                        |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Create Version

Create a new version

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Description    | Provide a string value for the description of the issue.                                                      |         |
| Version Name   | Provide a string value for the name of the version.                                                           |         |
| Archived       | This flag determines if the given version is archived.                                                        | false   |
| Released       | This flag determines if the given version has been released.                                                  | false   |
| Start Date     | Provide a value for the startDate.                                                                            |         |
| Release Date   | Provide a valid date for the release of the given version.                                                    |         |
| Project Key    | Provide a string value for the key of the project.                                                            |         |
| Project ID     | Provide the ID or Name of the Project.                                                                        |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Create Webhook

Create a webhook to send data from Jira to an instance URL

| Input           | Comments                                                                                                                                                                                                                                                                             | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection      |                                                                                                                                                                                                                                                                                      |         |
| Webhook URL     | Reference a flow's URL from the trigger payload                                                                                                                                                                                                                                      |         |
| Webhook Details | Webhook Details payload to be sent into Jira's OAuth2 Webhook API or Jira's REST API; must match structure of `webhooks` property for Register Dynamic Webhook endpoint: https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-webhooks/#api-rest-api-3-webhook-post |         |

### Delete Comment

Delete a comment from an issue

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Issue ID   | Provide the ID of the Issue. |         |
| Comment ID | Provide the Comment ID.      |         |

### Delete Issue

Delete an issue by id

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Issue ID   | Provide the ID of the Issue. |         |

### Delete Webhook

Delete a webhook by ID

| Input      | Comments                        | Default |
| ---------- | ------------------------------- | ------- |
| Connection |                                 |         |
| Webhook ID | The ID of the webhook to remove |         |

### Download Issue Attachments

Download the attachments data connected to an issue

| Input          | Comments                                                                                               | Default |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| Connection     |                                                                                                        |         |
| Issue ID       | Providing an Issue ID will return all attachments of an Issue.                                         |         |
| Attachment IDs | The IDs of the attachments to download. If this field is provided, the issue id input will be ignored. |         |

### Find Issue

Find Issue by attribute

| Input        | Comments            | Default |
| ------------ | ------------------- | ------- |
| Connection   |                     |         |
| Search Type  | Attribute to search |         |
| Search Value | Value to search for |         |

### Find Project

Find Project by attribute

| Input        | Comments            | Default |
| ------------ | ------------------- | ------- |
| Connection   |                     |         |
| Search Type  | Attribute to search |         |
| Search Value | Value to search for |         |

### Find User

Find User by attribute

| Input        | Comments            | Default |
| ------------ | ------------------- | ------- |
| Connection   |                     |         |
| Search Value | Value to search for |         |

### Get Board

Get information and metadata of a board by Id

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Board ID   | Provide the ID of the Board. |         |

### Get Comments

Get all the comments on a given issue

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Issue ID   | Provide the ID of the Issue. |         |

### Get Current User

Get the information and metadata of the current user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Issue

Get the information and metadata of an issue

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Issue ID   | Provide the ID of the Issue. |         |

### Get Project

Get the information and metadata of a project

| Input      | Comments                               | Default |
| ---------- | -------------------------------------- | ------- |
| Connection |                                        |         |
| Project ID | Provide the ID or Name of the Project. |         |

### Get Status List

Returns a status list

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Project ID  | Provide the ID or Name of the Project.                                           |         |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |

### Get User

Get information and metadata about an user by id

| Input      | Comments                                                                                                                | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                         |         |
| Account ID | Provide the Account ID of the account to use.                                                                           |         |
| Expand     | The response may contain a list under the \_expandable property; you can specify any of its values separated by commas. |         |

### Get Version

Get the information and metadata of an existing version

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Version ID | Provide the ID of the Version. |         |

### List Assignable Users for Project

Returns a list of users assignable to the given project

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Project Key | Provide a string value for the key of the project.                               |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |

### List Boards

Retrieve a list of existing boards

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |
| Filter      | The filter applied to the list of dashboards.                                    | my      |

### List Board Sprints

List all sprints within a board

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Board ID    | Provide the ID of the Board.                                                     |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |

### List Issue Attachments

Returns a list of issue attachments

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Issue ID   | Provide the ID of the Issue. |         |
| Connection |                              |         |

### List Issue Custom Fields

List all configured issue fields

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Issue Fields

List all non-custom issue fields

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Issue Link Types

List all available issue link types

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Issues

Returns a list of issues

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |

### List Issue Transitions

Returns a list of issue transitions

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Issue ID   | Provide the ID of the Issue. |         |

### List Issue Types

Returns a list of issue types

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Issue Worklogs

Returns a list of issue worklogs

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Issue ID   | Provide the ID of the Issue. |         |

### List Priorities

Returns a list of all priorities

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |

### List Projects

Retrieve a list of all projects

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |

### List Versions

Returns a list of all versions

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Project ID  | Provide the ID or Name of the Project.                                           |         |
| Max Results | Provide a value for the maximum amount of results to be returned in the request. |         |
| Start At    | Provide the index of the first item to return (to start from)                    | 0       |

### List Webhooks

List all webhooks configured, including those for other integrations

| Input      | Comments                           | Default |
| ---------- | ---------------------------------- | ------- |
| Connection |                                    |         |
| Fetch All  | Turn this On to fetch all results. | false   |

### Query

Search your entire Jira site using a JQL query

| Input       | Comments                                                                                                                | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                         |         |
| Search      | Provide a string value to search on.                                                                                    |         |
| Expand      | The response may contain a list under the \_expandable property; you can specify any of its values separated by commas. |         |
| Start At    | Provide the index of the first item to return (to start from)                                                           | 0       |
| Max Results | Provide a value for the maximum amount of results to be returned in the request.                                        |         |

### Raw Request

Send raw HTTP request to Jira

| Input                   | Comments                                                                                                                                                                                                                                                                                        | Default                    |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Connection              |                                                                                                                                                                                                                                                                                                 |                            |
| URL                     | Input the path only (/rest/api/3/project/recent), The base URL is already included (https://api.atlassian.com/ex/jira/<CLOUD_ID>). For example, to connect to https://api.atlassian.com/ex/jira/<CLOUD_ID>/rest/api/3/project/recent, only /rest/api/3/project/recent is entered in this field. | /rest/api/3/project/recent |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                         |                            |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                       |                            |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                            |                            |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                |                            |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                          |                            |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                             |                            |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                     |                            |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                        | json                       |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                             |                            |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                             | 0                          |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                | false                      |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                             | 0                          |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                   | false                      |

### Refresh Webhook

Refresh webhook expiration by ID

| Input      | Comments                     | Default |
| ---------- | ---------------------------- | ------- |
| Connection |                              |         |
| Webhook ID | ID of the webhook to refresh |         |

### Search Issues

Returns a list of issues that match the given string of text

| Input       | Comments                                           | Default |
| ----------- | -------------------------------------------------- | ------- |
| Connection  |                                                    |         |
| Search      | Provide a string value to search on.               |         |
| Project Key | Provide a string value for the key of the project. |         |

### Search Projects

Returns a list of projects that match the given string of text

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Search     | Provide a string value to search on. |         |

### Search Users

Returns a single user that matches the given string of text

| Input      | Comments                             | Default |
| ---------- | ------------------------------------ | ------- |
| Connection |                                      |         |
| Search     | Provide a string value to search on. |         |

### Transition Issue

Transition an existing issue by Id

| Input         | Comments                          | Default |
| ------------- | --------------------------------- | ------- |
| Connection    |                                   |         |
| Issue ID      | Provide the ID of the Issue.      |         |
| Transition ID | Provide the ID of the Transition. |         |

### Update Comment

Update the contents and metadata of an existing comment.

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Issue ID       | Provide the ID of the Issue.                                                                                  |         |
| Comment ID     | Provide the Comment ID.                                                                                       |         |
| Comment        | Provide a string value for the comment.                                                                       |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |

### Update Issue

Update an existing issue within a given project

| Input               | Comments                                                                                                                                                                                                                           | Default                                                                                                                                                                                                                         |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection          |                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                 |
| Issue ID            | Provide the ID of the Issue.                                                                                                                                                                                                       |                                                                                                                                                                                                                                 |
| Project ID          | Provide the ID or Name of the Project.                                                                                                                                                                                             |                                                                                                                                                                                                                                 |
| Summary             | Provide a string value for the summary of the issue.                                                                                                                                                                               |                                                                                                                                                                                                                                 |
| Description         | Provide a string value for the description of the issue.                                                                                                                                                                           |                                                                                                                                                                                                                                 |
| ADF Description     | The above json code will print: 'Some text' in the Jira Issue description, to get more info visit: https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/ to get a JSON representation of your description. | <code>{<br /> "version": 1,<br /> "type": "doc",<br /> "content": [<br /> {<br /> "type": "paragraph",<br /> "content": [<br /> {<br /> "type": "text",<br /> "text": "Some text"<br /> }<br /> ]<br /> }<br /> ]<br />}</code> |
| Issue Type Name     | Provide a value for the name type of the issue. Use this field or the Issue Type ID field.                                                                                                                                         |                                                                                                                                                                                                                                 |
| Issue Type ID       | Provide the ID of the Issue Type. Use this field or the Issue Type Name field.                                                                                                                                                     |                                                                                                                                                                                                                                 |
| Assignee Account ID | Provide the Account ID for the person being assigned the issue.                                                                                                                                                                    |                                                                                                                                                                                                                                 |
| Reporter Account ID | Provide the Account ID for the person that is reporting the issue.                                                                                                                                                                 |                                                                                                                                                                                                                                 |
| Fix Versions        | Provide JSON data for the fix versions. Your object must have a property 'id'                                                                                                                                                      |                                                                                                                                                                                                                                 |
| Priority            | Provide the unique identifier of the priority. This value can either be an Id, key, or name of the desired record.                                                                                                                 |                                                                                                                                                                                                                                 |
| Labels              | Provide a list of labels for the issue.                                                                                                                                                                                            |                                                                                                                                                                                                                                 |
| Due Date            | Provide due date for the issue.                                                                                                                                                                                                    |                                                                                                                                                                                                                                 |
| Versions            | Provide JSON data for the versions. You must supply a JSON array with an object containing an Id.                                                                                                                                  |                                                                                                                                                                                                                                 |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                      |                                                                                                                                                                                                                                 |
| Values              | The names of the fields and their values to use when creating/updating a record                                                                                                                                                    |                                                                                                                                                                                                                                 |

### Update Version

Update an existing version by Id

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection     |                                                                                                               |         |
| Version ID     | Provide the ID of the Version.                                                                                |         |
| Description    | Provide a string value for the description of the issue.                                                      |         |
| Version Name   | Provide a string value for the name of the version.                                                           |         |
| Archived       | This flag determines if the given version is archived.                                                        | false   |
| Released       | This flag determines if the given version has been released.                                                  | false   |
| Start Date     | Provide a value for the startDate.                                                                            |         |
| Release Date   | Provide a valid date for the release of the given version.                                                    |         |
| Project Key    | Provide a string value for the key of the project.                                                            |         |
| Project ID     | Provide the ID or Name of the Project.                                                                        |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Values         | The names of the fields and their values to use when creating/updating a record                               |         |
