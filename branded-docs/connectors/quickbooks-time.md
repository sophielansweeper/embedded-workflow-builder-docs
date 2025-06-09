---
title: QuickBooks Time Connector
sidebar_label: QuickBooks Time
description: Manage Employee Time Tracking within Intuit QuickBooks Time
---

![QuickBooks Time](./assets/quickbooks-time.png#connector-icon)
Manage Employee Time Tracking within Intuit QuickBooks Time

## Connections

### OAuth 2.0

OAuth 2.0 flow

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                                          | Default |
| ------------- | ------------------------------------------------- | ------- |
| Client ID     | Client Identifier of your app for Quickbooks Time |         |
| Client Secret | Client Secret of your app for Quickbooks Time     |         |

## Actions

### Create Timesheet

Creates a Timesheet

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| User ID                     | The Id of the record to modify                                                                                                                                                                                                    |         |
| Jobcode ID                  | The Jobcode Id                                                                                                                                                                                                                    |         |
| Start Date                  | Start time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                           |         |
| End Date                    | End time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                             |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Create User

Creates a User from the provided data

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Username                    | Username of the user                                                                                                                                                                                                              |         |
| First Name                  | First name of the user                                                                                                                                                                                                            |         |
| Last Name                   | Last name of the user                                                                                                                                                                                                             |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Delete Timesheet

Deletes a Timesheet

| Input        | Comments                               | Default |
| ------------ | -------------------------------------- | ------- |
| Connection   |                                        |         |
| Job Code IDs | A comma separated list of Job Code Ids |         |

### Get Job Code Assignments

Gets a list of Job Codes and their associated Users

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| User IDs                    | A comma separated list of User Ids to filter on                                                                                                                                                                                   |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Get Job Codes

Gets a list of Job Codes

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Get Time Sheets

Gets a list of Time Sheets

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| User IDs                    | A comma separated list of User Ids to filter on                                                                                                                                                                                   |         |
| Job Code IDs                | A comma separated list of Job Code Ids to filter on                                                                                                                                                                               |         |
| Start Date                  | YYYY-MM-DD formatted date                                                                                                                                                                                                         |         |
| End Date                    | YYYY-MM-DD formatted date                                                                                                                                                                                                         |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Get Users

Gets a list of Users with optional filters

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Active                      | 'yes', 'no', or 'both'. Default is 'yes'                                                                                                                                                                                          |         |
| Per Page                    | Represents how many results you'd like to retrieve per request (page). Default is 50. Max is 50                                                                                                                                   |         |
| Page                        | Represents the page of results you'd like to retrieve. Default is 1.                                                                                                                                                              |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Update Timesheet

Updates a Timesheet

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| Timesheet ID                | The Id of the record to modify                                                                                                                                                                                                    |         |
| Jobcode ID                  | The Jobcode Id                                                                                                                                                                                                                    |         |
| Start Date                  | Start time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                           |         |
| End Date                    | End time of the timesheet, in ISO 8601 format (YYYY-MM-DDThh:mm:ss±hh:mm). Time should reflect the user's local time.                                                                                                             |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |

### Update User

Updates a specified User

| Input                       | Comments                                                                                                                                                                                                                          | Default |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                                                                   |         |
| ID                          | The Id of the record to modify                                                                                                                                                                                                    |         |
| Username                    | Username of the user                                                                                                                                                                                                              |         |
| Additional Query Parameters | Additional query parameters to be provided for use in filtering result sets. For example, when filtering users it is possible to provide 'usernames' as the key and a comma separated list of one or more usernames to filter on. |         |
