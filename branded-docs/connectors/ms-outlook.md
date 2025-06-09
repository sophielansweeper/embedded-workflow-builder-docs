---
title: Microsoft Outlook Connector
sidebar_label: Microsoft Outlook
description: Read and manage Microsoft Outlook calendars and email
---

![Microsoft Outlook](./assets/ms-outlook.png#connector-icon)
Read and manage Microsoft Outlook calendars and email

## Connections

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code Connectivity for Microsoft Outlook

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                             | Default                                                                                                                                                                               |
| ------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorize URL       | The OAuth 2.0 Authorization URL for Microsoft Outlook                | https://login.microsoftonline.com/common/oauth2/v2.0/authorize?prompt=consent                                                                                                         |
| Token URL           | The OAuth 2.0 Token URL for Microsoft Outlook                        | https://login.microsoftonline.com/common/oauth2/v2.0/token                                                                                                                            |
| Scopes              | Microsoft Outlook permission scopes are set on the OAuth application | https://graph.microsoft.com/User.Read https://graph.microsoft.com/Calendars.ReadWrite https://graph.microsoft.com/Mail.ReadWrite https://graph.microsoft.com/Mail.Send offline_access |
| Client ID           |                                                                      |                                                                                                                                                                                       |
| Client secret value |                                                                      |                                                                                                                                                                                       |

## Triggers

### Webhook

Receive and validate webhook requests from Outlook for webhooks you configure.

## Actions

### Cancel Event

Cancel an Event

| Input      | Comments                                             | Default |
| ---------- | ---------------------------------------------------- | ------- |
| Connection |                                                      |         |
| Event ID   | Event ID to manipulate                               |         |
| Comment    | Comment about the cancellation sent to all attendees |         |

### Create Calendar

Create a new Calendar

| Input      | Comments                                                                                                                                        | Default |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                                                                                 |         |
| Name       | Name of the Calendar                                                                                                                            |         |
| Color      | Color of the Calendar; see 'color' at https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0#properties for details | auto    |

### Create Event

Create an Event on a Calendar

| Input                     | Comments                                                                                                                            | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                     |         |
| Calendar ID               | Calendar ID to list Events of; will list all events for current user if unspecified                                                 |         |
| Location Name             | Name of the Location                                                                                                                |         |
| Subject                   | Subject of the Event                                                                                                                |         |
| Body (HTML)               | HTML Body of the Event                                                                                                              |         |
| Attendees Data Collection | Field for references to data structures representing attendees. Will be merged with Attendees if both are specified.                |         |
| Type                      | Attendees of the Event                                                                                                              |         |
| Start At                  | ISO formatted timestamp without timezone information                                                                                |         |
| Start Timezone            | Timezone for the Start time of the Event; use the List Supported Timezones action for details on valid aliases/values for this user | UTC     |
| End At                    | ISO formatted timestamp without timezone information                                                                                |         |
| End Timezone              | Timezone for the End time of the Event; use the List Supported Timezones action for details on valid aliases/values for this user   | UTC     |

### Create Event Subscription

Create an Event subscription for Microsoft Outlook

| Input                | Comments                                                                                                                                                              | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                       |         |
| Notification URL     | URL to send events of this Subscription to                                                                                                                            |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 10070 minutes (close to the maximum permitted by the Graph API). |         |
| Allow Duplicates     | Enable to allow more than one webhook per endpoint                                                                                                                    | false   |

### Create Mail Folder

Create a new mail folder

| Input            | Comments                                                                      | Default |
| ---------------- | ----------------------------------------------------------------------------- | ------- |
| Connection       |                                                                               |         |
| Parent Folder ID | Create a folder under this parent folder. Omit to create a root-level folder. |         |
| Display name     |                                                                               |         |

### Create Mail Folder Subscription

Create a Mail Folder subscription for Microsoft Outlook

| Input                | Comments                                                                                                                                                              | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                       |         |
| Mail Change Types    | The type of change to listen for                                                                                                                                      |         |
| Notification URL     | URL to send events of this Subscription to                                                                                                                            |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 10070 minutes (close to the maximum permitted by the Graph API). |         |

### Delete All Instance Subscriptions

Delete all subscriptions pointed at this instance

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Delete Calendar

Delete an existing Calendar

| Input       | Comments                     | Default |
| ----------- | ---------------------------- | ------- |
| Connection  |                              |         |
| Calendar ID | ID of the Calendar to modify |         |

### Delete Event

Delete an Event

| Input      | Comments               | Default |
| ---------- | ---------------------- | ------- |
| Connection |                        |         |
| Event ID   | Event ID to manipulate |         |

### Delete Mail Folder

Delete the specified mail folder

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |
| Folder ID  |          |         |

### Delete Message

Delete message by ID

| Input      | Comments                 | Default |
| ---------- | ------------------------ | ------- |
| Connection |                          |         |
| Message ID | The ID of a mail message |         |

### Delete Subscription

Delete existing subscription for Microsoft Outlook

| Input           | Comments                  | Default |
| --------------- | ------------------------- | ------- |
| Connection      |                           |         |
| Subscription ID | Subscription ID to manage |         |

### Get Calendar Event

Gets information about a specific calendar event

| Input      | Comments                   | Default |
| ---------- | -------------------------- | ------- |
| Connection |                            |         |
| Event ID   | The ID of a calendar event |         |

### Get Current User

Get the information and metadata of the user that is currently logged in

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Get Mail Message

Fetch and parse a raw message by ID

| Input      | Comments                 | Default |
| ---------- | ------------------------ | ------- |
| Connection |                          |         |
| Message ID | The ID of a mail message |         |

### Get Schedule Availability

Get the free/busy availability information for a collection of users

| Input                      | Comments                                                                                                                            | Default |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                 |                                                                                                                                     |         |
| Availability View Interval | Duration of time slot to check availability for in minutes                                                                          | 30      |
| Schedules                  | Collection of SMTP addresses of users, distribution lists, or resources to get availability information for                         |         |
| Start At                   | ISO formatted timestamp without timezone information                                                                                |         |
| Start Timezone             | Timezone for the Start time of the Event; use the List Supported Timezones action for details on valid aliases/values for this user | UTC     |
| End At                     | ISO formatted timestamp without timezone information                                                                                |         |
| End Timezone               | Timezone for the End time of the Event; use the List Supported Timezones action for details on valid aliases/values for this user   | UTC     |

### List Calendars

List all Calendars for the user

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                              |         |
| Page Limit | Enter number for desired page size.                                                          |         |
| Page Skip  | Enter number of records to skip.                                                             |         |
| Fetch All  | Turn on to fetch all pages of results. This will ignore the page limit and page skip inputs. | false   |

### List Events

List all Events for the user

| Input       | Comments                                                                                     | Default |
| ----------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                              |         |
| Calendar ID | Calendar ID to list Events of; will list all events for current user if unspecified          |         |
| Page Limit  | Enter number for desired page size.                                                          |         |
| Page Skip   | Enter number of records to skip.                                                             |         |
| Fetch All   | Turn on to fetch all pages of results. This will ignore the page limit and page skip inputs. | false   |

### List Mail Folders

Get the mail folder collection directly under the root folder of the signed-in user, or under the specified parent folder.

| Input            | Comments                                                                                     | Default |
| ---------------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection       |                                                                                              |         |
| Parent Folder ID | List all folders contained within this folder. Omit to list root-level folders.              |         |
| Page Limit       | Enter number for desired page size.                                                          |         |
| Page Skip        | Enter number of records to skip.                                                             |         |
| Fetch All        | Turn on to fetch all pages of results. This will ignore the page limit and page skip inputs. | false   |

### List Mail Messages

List mail messages in a user's mailbox

| Input      | Comments                                                                                     | Default |
| ---------- | -------------------------------------------------------------------------------------------- | ------- |
| Connection |                                                                                              |         |
| Folder ID  | The folder to list messages for. Omit to list all messages.                                  |         |
| Search     | A search query to filter messages. Can not be used with filter.                              |         |
| Filter     | A filter to apply to the messages. Can not be used with search.                              |         |
| Page Limit | Enter number for desired page size.                                                          |         |
| Page Skip  | Enter number of records to skip.                                                             |         |
| Fetch All  | Turn on to fetch all pages of results. This will ignore the page limit and page skip inputs. | false   |

### List Subscriptions

List all subscriptions for Microsoft Outlook

| Input                  | Comments                                             | Default |
| ---------------------- | ---------------------------------------------------- | ------- |
| Connection             |                                                      |         |
| Show Instance Webhooks | Show only subscriptions for this Instance's webhooks | true    |

### List Supported Languages

List supported languages for current user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### List Supported Timezones

List supported timezones for current user

| Input      | Comments | Default |
| ---------- | -------- | ------- |
| Connection |          |         |

### Raw Request

Send raw HTTP request to Microsoft Outlook

| Input                   | Comments                                                                                                                                                                                                                         | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                  |         |
| URL                     | Input the path only (/me/calendars), The base URL is already included (https://graph.microsoft.com/v1.0). For example, to connect to https://graph.microsoft.com/v1.0/me/calendars, only /me/calendars is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                 | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                    | false   |

### Send Message

Send a new message

| Input               | Comments                                                                                                                                                                                                                                                                                                                   | Default |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection          |                                                                                                                                                                                                                                                                                                                            |         |
| To                  | You can specify multiple addresses separated by commas. i.e. 'john@example.com' or 'john@example.com,sally@example.com'                                                                                                                                                                                                    |         |
| CC                  | You can specify multiple addresses separated by commas. i.e. 'john@example.com' or 'john@example.com,sally@example.com'                                                                                                                                                                                                    |         |
| BCC                 | You can specify multiple addresses separated by commas. i.e. 'john@example.com' or 'john@example.com,sally@example.com'                                                                                                                                                                                                    |         |
| Subject             |                                                                                                                                                                                                                                                                                                                            |         |
| Message Body        | Plain text or HTML body                                                                                                                                                                                                                                                                                                    |         |
| Body Content Type   |                                                                                                                                                                                                                                                                                                                            | html    |
| Attachments         | Specify a file name as the key (i.e. my-file.pdf), and the file as the value                                                                                                                                                                                                                                               |         |
| Dynamic Attachments | An array of objects with "key" and "value" properties, where "key" is the file name and "value" is the binary file data. Typically used as a reference from a previous step. Ex. [{"key":"my-attachment.pdf","value":"<BINARY FILE DATA TO ATTACH>"},{"key":"another-attachment.xlsx","value":"<BINARY EXCEL FILE DATA>"}] |         |

### Update Calendar

Update an existing Calendar

| Input       | Comments                                                                                                                                        | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                                                                                 |         |
| Calendar ID | ID of the Calendar to modify                                                                                                                    |         |
| Name        | Name of the Calendar                                                                                                                            |         |
| Color       | Color of the Calendar; see 'color' at https://learn.microsoft.com/en-us/graph/api/resources/calendar?view=graph-rest-1.0#properties for details | auto    |

### Update Event

Update an existing Event

| Input                     | Comments                                                                                                                            | Default |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                     |         |
| Event ID                  | Event ID to manipulate                                                                                                              |         |
| Location Name             | Name of the Location                                                                                                                |         |
| Subject                   | Subject of the Event                                                                                                                |         |
| Body (HTML)               | HTML Body of the Event                                                                                                              |         |
| Attendees Data Collection | Field for references to data structures representing attendees. Will be merged with Attendees if both are specified.                |         |
| Type                      | Attendees of the Event                                                                                                              |         |
| Start At                  | ISO formatted timestamp without timezone information                                                                                |         |
| Start Timezone            | Timezone for the Start time of the Event; use the List Supported Timezones action for details on valid aliases/values for this user | UTC     |
| End At                    | ISO formatted timestamp without timezone information                                                                                |         |
| End Timezone              | Timezone for the End time of the Event; use the List Supported Timezones action for details on valid aliases/values for this user   | UTC     |

### Update Event Subscription Expiration

Update existing Event subscription expiration for Microsoft Outlook

| Input                | Comments                                                                                                                                                              | Default |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection           |                                                                                                                                                                       |         |
| Subscription ID      | Subscription ID to manage                                                                                                                                             |         |
| Expiration Date/Time | Expiration date/time for subscription. If unspecified the default will be the current date/time plus 10070 minutes (close to the maximum permitted by the Graph API). |         |
