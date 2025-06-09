---
title: Salesforce Connector
sidebar_label: Salesforce
description: Query, create, update or delete Salesforce records
---

![Salesforce](./assets/salesforce.png#connector-icon)
Query, create, update or delete Salesforce records

## Connections

### Salesforce Basic Connection

Authenticate requests to Salesforce using basic auth.

| Input     | Comments                                            | Default |
| --------- | --------------------------------------------------- | ------- |
| Username  | The username of the Salesforce account              |         |
| Password  | The password of the Salesforce account              |         |
| Login URL | Your SalesForce Login URL - required for Basic Auth |         |

### Salesforce OAuth 2.0

Authenticate requests to Salesforce using values obtained from the developer console.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input           | Comments                                       | Default                                                |
| --------------- | ---------------------------------------------- | ------------------------------------------------------ |
| Authorize URL   | The OAuth 2.0 Authorization URL for Salesforce | https://login.salesforce.com/services/oauth2/authorize |
| Token URL       | The OAuth 2.0 Token URL for Salesforce         | https://login.salesforce.com/services/oauth2/token     |
| Revoke URL      | The OAuth 2.0 Revocation URL for Salesforce    | https://login.salesforce.com/services/oauth2/revoke    |
| Consumer Key    |                                                |                                                        |
| Consumer Secret |                                                |                                                        |

## Triggers

### New and Updated Records

Checks for new and updated records in Salesforce.

| Input                | Comments                                                                                                                                                     | Default |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection           |                                                                                                                                                              |         |
| Show New Records     | Show new records.                                                                                                                                            | true    |
| Show Updated Records | Show updated records.                                                                                                                                        | true    |
| Version              | Salesforce API Version Number.                                                                                                                               | 63.0    |
| Record Type          | The type of Salesforce Record.                                                                                                                               |         |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                     |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String. |         |
| Max Records To Fetch | You can set the maximum number of records the trigger will fetch. By default, it will fetch up to 20,000 records.                                            | 20000   |

### Webhook

Trigger for handling webhook requests from the Salesforce platform. Returns the expected response to Salesforce and converts the XML payload to an object for more convenient use in the rest of the flow.

### Workflow Outbound Message Webhook

Trigger for handling workflow rule triggers from the Salesforce platform. Creates a Workflow Outbound Message and a Workflow Rule. Returns the expected response to Salesforce and converts the XML payload to an object for more convenient use in the rest of the flow.

| Input                 | Comments                                                                                                                                                                                                                                                                                | Default      |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Connection            |                                                                                                                                                                                                                                                                                         |              |
| Record Type           | The type of Salesforce Record.                                                                                                                                                                                                                                                          |              |
| Trigger Type          | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Outbound Message Name | The name of the outbound message to be used.                                                                                                                                                                                                                                            |              |
| Workflow Rule Name    | The name of the workflow rule to be used.                                                                                                                                                                                                                                               |              |
| Description           | Provide a string value for the description of the object.                                                                                                                                                                                                                               |              |
| Fields                | Fields to include in the Outbound Message.                                                                                                                                                                                                                                              |              |
| Version               | Salesforce API Version Number.                                                                                                                                                                                                                                                          | 63.0         |

## Actions

### Abort a Bulk Job

Aborts a Job

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Abort a Bulk Query Job

Aborts a query job.

| Input        | Comments                         | Default |
| ------------ | -------------------------------- | ------- |
| Connection   |                                  |         |
| Version      | Salesforce API Version Number.   | 63.0    |
| Query Job Id | The ID of the query job to abort |         |

### Add Attachment

Attach a file to a Parent record object (Account, Opportunity, etc.)

| Input         | Comments                                                         | Default |
| ------------- | ---------------------------------------------------------------- | ------- |
| Connection    |                                                                  |         |
| Version       | Salesforce API Version Number.                                   | 63.0    |
| Record ID     | The ID of a Salesforce Record                                    |         |
| File Name     | The name of the file you wish to upload                          |         |
| File Contents | Reference a file from a previous step, or enter plain text here. |         |

### Add User Permission Set

Adds a Permission Set to the specified User

| Input          | Comments                               | Default |
| -------------- | -------------------------------------- | ------- |
| Version        | Salesforce API Version Number.         | 63.0    |
| User Name      | Provide a User Name                    |         |
| Permission Set | Provide the name of the Permission Set |         |
| Connection     |                                        |         |

### Bulk Insert Records

Creates new Salesforce Records

| Input                  | Comments                                                    | Default |
| ---------------------- | ----------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                              | 63.0    |
| Record Type            | The type of Salesforce Record.                              |         |
| External ID Field Name | The name of the column that refers to the External ID Field |         |
| File                   | The file to be uploaded                                     |         |
| Connection             |                                                             |         |

### Bulk Upsert Records

Updates Salesforce Records if they exists, otherwise creates new Salesforce Records

| Input                  | Comments                                                    | Default |
| ---------------------- | ----------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                              | 63.0    |
| Record Type            | The type of Salesforce Record.                              |         |
| External ID Field Name | The name of the column that refers to the External ID Field |         |
| File                   | The file to be uploaded                                     |         |
| Connection             |                                                             |         |

### Complete Upload Bulk Job

Notifies Salesforce servers that the upload of job data is complete and is ready for processing. You can’t add any more job data.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Composite Requests

Send multiple requests in a single HTTP call

| Input               | Comments                                                                                                                                                                                                                       | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection          |                                                                                                                                                                                                                                |         |
| Version             | Salesforce API Version Number.                                                                                                                                                                                                 | 63.0    |
| All Or None         | Specifies what to do when an error occurs while processing a subrequest. If the value is true, the entire composite request is rolled back. The top-level request returns HTTP 200 and includes responses for each subrequest. | true    |
| Collate Subrequests | Controls whether the API collates unrelated subrequests to bulkify them (true) or not (false).                                                                                                                                 | false   |
| Composite Request   | Collection of subrequests to execute.                                                                                                                                                                                          |         |

### Create a Bulk Job

Creates a job representing a bulk operation and its associated data that is sent to Salesforce for asynchronous processing.

| Input                  | Comments                                                                                                                            | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                     |         |
| Version                | Salesforce API Version Number.                                                                                                      | 63.0    |
| Object                 | The object type for the data being processed. Use only a single object type per job.                                                |         |
| Operation              | The operation to execute                                                                                                            | insert  |
| External ID Field Name | The external ID field in the object being updated. Only needed for upsert operations. Field values must also exist in CSV job data. |         |
| Assignment Rule Id     | The ID of an assignment rule to run for a Case or a Lead. The assignment rule can be active or inactive.                            |         |
| Column Delimiter       | The delimiter to use for the columns                                                                                                | COMMA   |
| Line Ending            | The line ending to use for the file                                                                                                 | LF      |

### Create Account

Create a Salesforce Account Record

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object                                                                       |         |
| Website                | Provide a valid URL for the website of the object                                                             |         |
| Account Type           | The type of account record                                                                                    |         |
| Industry               | The type of account record                                                                                    |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the object                                                                    |         |
| Billing City           | The city of the object's billing address                                                                      |         |
| Billing Postal Code    | The zip code of the object's billing address                                                                  |         |
| Billing State          | The state of the object's billing address                                                                     |         |
| Billing Street Address | The street address of the billing object                                                                      |         |
| Billing Country        | The state of the object's billing address                                                                     |         |
| Street Address         | The street address of the object                                                                              |         |
| State                  | The state of the object's address                                                                             |         |
| Country                | The country of the object's address                                                                           |         |
| Name                   | The name of the object                                                                                        |         |
| City                   | The city of the object's address                                                                              |         |
| Postal Code            | The zip code of the object's address                                                                          |         |
| Connection             |                                                                                                               |         |

### Create Bulk Query Job

Creates a query job.

| Input            | Comments                             | Default |
| ---------------- | ------------------------------------ | ------- |
| Connection       |                                      |         |
| Version          | Salesforce API Version Number.       | 63.0    |
| Operation        | The operation to execute             | query   |
| Query            | The query to execute                 |         |
| Column Delimiter | The delimiter to use for the columns | COMMA   |
| Line Ending      | The line ending to use for the file  | LF      |

### Create Contact

Create a Salesforce contact

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Email Address          | The email address for the object                                                                              |         |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object                                                                       |         |
| First Name             | The first name of the contact at the company                                                                  |         |
| Last Name              | The last name of the contact at the company                                                                   |         |
| Department             | Provide a string value that represents the name of the contact's department                                   |         |
| Birthdate              | Provide a string value that represents the birthdate                                                          |         |
| Fax                    | Provide a string value for the fax number                                                                     |         |
| Title                  | The title of the object                                                                                       |         |
| Mobile Phone           | The mobile phone number for the object                                                                        |         |
| Assistant              | Provide a string value that represents the name of the contact's assistant                                    |         |
| Assistant's Phone      | Provide a string value that represents the phone number of the contact's assistant                            |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
| Billing City           | The city of the object's billing address                                                                      |         |
| Billing Postal Code    | The zip code of the object's billing address                                                                  |         |
| Billing State          | The state of the object's billing address                                                                     |         |
| Billing Street Address | The street address of the billing object                                                                      |         |
| Billing Country        | The state of the object's billing address                                                                     |         |
| Street Address         | The street address of the object                                                                              |         |
| State                  | The state of the object's address                                                                             |         |
| Country                | The country of the object's address                                                                           |         |
| City                   | The city of the object's address                                                                              |         |
| Postal Code            | The zip code of the object's address                                                                          |         |
| Connection             |                                                                                                               |         |

### Create Customer

Create a Salesforce customer

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                             | 63.0    |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party Id             | Represents the individual object related to this customer record.                                                                                                          |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner Id             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           |                                                                                                                                                                            |         |

### Create Lead

Create a Salesforce Lead Record

| Input               | Comments                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Version             | Salesforce API Version Number.                                                                                      | 63.0    |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.       |         |
| Field Values        | Name of a record's fields and their corresponding values                                                            |         |
| First Name          | The first name of the contact at the company                                                                        |         |
| Last Name           | The last name of the contact at the company                                                                         |         |
| Company             | The name of the company                                                                                             |         |
| Title               | The title of the object                                                                                             |         |
| Phone               | The primary phone number for the object                                                                             |         |
| Email Address       | The email address for the object                                                                                    |         |
| Lead Source         | Provide a value for the source of the lead.                                                                         |         |
| Rating              | The rating for the lead.                                                                                            |         |
| Website             | Provide a valid URL for the website of the object                                                                   |         |
| Street Address      | The street address of the object                                                                                    |         |
| State               | The state of the object's address                                                                                   |         |
| City                | The city of the object's address                                                                                    |         |
| Postal Code         | The zip code of the object's address                                                                                |         |
| Number of Employees | The number of employees associated with the object.                                                                 |         |
| Description         | Provide a string value for the description of the object.                                                           |         |
| Annual Revenue      | The estimated annual revenue of the object                                                                          |         |
| Lead Status         | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted |         |
| Connection          |                                                                                                                     |         |

### Create Metadata

Create new metadata components.

| Input         | Comments                                                                           | Default                                                                                                                                                                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                    |                                                                                                                                                                                                                                                                                                               |
| Version       | Salesforce API Version Number.                                                     | 63.0                                                                                                                                                                                                                                                                                                          |
| Metadata Type | The type of metadata to act upon.                                                  | CustomObject                                                                                                                                                                                                                                                                                                  |
| Metadata      | See https://jsforce.github.io/document/#create-metadata for related documentation. | <code>[<br /> {<br /> "fullName": "TestObject1__c",<br /> "label": "Test Object 1",<br /> "pluralLabel": "Test Object 1",<br /> "nameField": {<br /> "type": "Text",<br /> "label": "Test Object Name"<br /> },<br /> "deploymentStatus": "Deployed",<br /> "sharingModel": "ReadWrite"<br /> }<br />]</code> |

### Create Metadata Fields

Create custom fields from metadata

| Input         | Comments                                                                           | Default                                                                                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                                                                                    |                                                                                                                                                                                                                                 |
| Version       | Salesforce API Version Number.                                                     | 63.0                                                                                                                                                                                                                            |
| Metadata Type | The type of metadata to act upon.                                                  | CustomField                                                                                                                                                                                                                     |
| Metadata      | See https://jsforce.github.io/document/#create-metadata for related documentation. | <code>[<br /> {<br /> "fullName": "Contact.FieldName1__c",<br /> "label": "Field Name 1",<br /> "type": "Text",<br /> "length": 80,<br /> "inlineHelpText": "Text that appears in the ? next to a field."<br /> }<br />]</code> |

### Create Opportunity

Create a Salesforce Opportunity Record, which is a sale or pending deal

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version          | Salesforce API Version Number.                                                                                | 63.0    |
| Next Step        | Provide a string value for the next step of the sale.                                                         |         |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Name of a record's fields and their corresponding values                                                      |         |
| Amount           | Provide a number that represents the opportunity amount.                                                      |         |
| AccountId        | The Id of the account to reference                                                                            |         |
| Stage            | The stage the sale is currently in.                                                                           |         |
| Opportunity Type | Provide a value for what stage the sales process is in.                                                       |         |
| Close Date       | The date the sale will close.                                                                                 |         |
| Lead Source      | Provide a value for the source of the lead.                                                                   |         |
| Probability      | The probability of the success of the sale                                                                    |         |
| Description      | Provide a string value for the description of the object.                                                     |         |
| Name             | The name of the object                                                                                        |         |
| Connection       |                                                                                                               |         |

### Create Profile

Create a Salesforce Profile

| Input        | Comments                                                                                                                                                                            | Default |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version      | Salesforce API Version Number.                                                                                                                                                      | 63.0    |
| Name         | The name of the profile.                                                                                                                                                            |         |
| Description  | Description of the profile.                                                                                                                                                         |         |
| Permissions  | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| User License | Identifier for associated UserLicense.                                                                                                                                              |         |
| Connection   |                                                                                                                                                                                     |         |

### Create Record

Create a Salesforce Record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| Record Type    | The type of Salesforce Record.                                                                                |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| Connection     |                                                                                                               |         |

### Create User

Create a Salesforce User

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| Profile        | Provide the name of the User Profile                                                                          |         |
| User Name      | Provide a User Name                                                                                           |         |
| First Name     | The first name of the contact at the company                                                                  |         |
| Last Name      | The last name of the contact at the company                                                                   |         |
| Time Zone      | Time Zone in the format of 'America/New_York'                                                                 |         |
| Alias          | Provide an Alias for the User                                                                                 |         |
| Email Address  | The email address for the object                                                                              |         |
| Connection     |                                                                                                               |         |

### Create Workflow Outbound Message

Create a Workflow Outbound Message

| Input                  | Comments                                                                                              | Default |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                                                                        | 63.0    |
| Workflow Record Type   | The type of Salesforce Record for the Workflow                                                        |         |
| Outbound Message Name  | Name of the Outbound Message                                                                          |         |
| Description            | Provide a string value for the description of the object.                                             |         |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                            |         |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used |         |
| Fields                 | Fields to include in the Outbound Message.                                                            |         |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message      |         |
| Connection             |                                                                                                       |         |

### Create Workflow Rule

Create a Workflow Rule

| Input                    | Comments                                                                                                                                                                                                                                                                                | Default      |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                  | Salesforce API Version Number.                                                                                                                                                                                                                                                          | 63.0         |
| Workflow Record Type     | The type of Salesforce Record for the Workflow                                                                                                                                                                                                                                          |              |
| Rule Name                | Name of the Workflow Rule                                                                                                                                                                                                                                                               |              |
| Trigger Type             | Conditions in which the trigger fires. On All Changes: The workflow rule is considered on all changes. On Create Only: Considered on creation. On Create or Meets Rule Criteria: Considered on create and when it is updated to meet any Rule Criteria configured to the workflow rule. | onAllChanges |
| Active                   | Determines if this Rule is active                                                                                                                                                                                                                                                       | true         |
| Description              | Provide a string value for the description of the object.                                                                                                                                                                                                                               |              |
| Rule Criteria Filter     | Filter criteria data structure to use with the rule, use this or Formula. See https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem                                                                                                       |              |
| Formula                  | Formula to evaluate. Use this input or Filter Criteria                                                                                                                                                                                                                                  |              |
| Outbound Message Actions | Full Names of the Outbound Message Actions for this Rule to fire                                                                                                                                                                                                                        |              |
| Connection               |                                                                                                                                                                                                                                                                                         |              |

### Delete a Bulk Job

Deletes a job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Delete A Bulk Query Job

Deletes a query job.

| Input        | Comments                          | Default |
| ------------ | --------------------------------- | ------- |
| Connection   |                                   |         |
| Version      | Salesforce API Version Number.    | 63.0    |
| Query Job Id | The ID of the query job to delete |         |

### Delete Account

Delete an existing account record

| Input        | Comments                                                 | Default |
| ------------ | -------------------------------------------------------- | ------- |
| Version      | Salesforce API Version Number.                           | 63.0    |
| Field Values | Name of a record's fields and their corresponding values |         |
| Record ID    | The ID of a Salesforce Record                            |         |
| Connection   |                                                          |         |

### Delete Contact

Delete an existing contact record

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Record ID  | The ID of a Salesforce Record  |         |
| Connection |                                |         |

### Delete Customer

Delete an existing customer record

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Record ID  | The ID of a Salesforce Record  |         |
| Connection |                                |         |

### Delete Lead

Delete a Salesforce Lead Record

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Record ID  | The ID of a Salesforce Record  |         |
| Connection |                                |         |

### Delete Metadata

Delete one or more metadata components.

| Input             | Comments                                | Default      |
| ----------------- | --------------------------------------- | ------------ |
| Connection        |                                         |              |
| Metadata Type     | The type of metadata to act upon.       | CustomObject |
| Version           | Salesforce API Version Number.          | 63.0         |
| Object Full Names | The full names of the objects to delete |              |

### Delete Opportunity

Delete an existing opportunity record

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Record ID  | The ID of a Salesforce Record  |         |
| Connection |                                |         |

### Delete Profile

Delete a Salesforce Profile

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Record ID  | The ID of a Salesforce Record  |         |
| Connection |                                |         |

### Delete Record

Delete an existing Salesforce Record

| Input       | Comments                       | Default |
| ----------- | ------------------------------ | ------- |
| Version     | Salesforce API Version Number. | 63.0    |
| Record Type | The type of Salesforce Record. |         |
| Record ID   | The ID of a Salesforce Record  |         |
| Connection  |                                |         |

### Delete Workflow Outbound Message

Delete a Workflow Outbound Message

| Input                | Comments                                        | Default |
| -------------------- | ----------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                  | 63.0    |
| Full Name Identifier | Unique identifier for Metadata/Workflow objects |         |
| Connection           |                                                 |         |

### Delete Workflow Rule

Delete a Workflow Rule

| Input                | Comments                                        | Default |
| -------------------- | ----------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                  | 63.0    |
| Full Name Identifier | Unique identifier for Metadata/Workflow objects |         |
| Connection           |                                                 |         |

### Describe Customer SObject

Metadata description API for Salesforce object.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Connection |                                |         |

### Describe Object

Describe attributes of a Salesforce Record Type

| Input       | Comments                       | Default |
| ----------- | ------------------------------ | ------- |
| Version     | Salesforce API Version Number. | 63.0    |
| Record Type | The type of Salesforce Record. |         |
| Connection  |                                |         |

### Describe Permissions

Describe permissions of a Salesforce Record Type

| Input       | Comments                       | Default |
| ----------- | ------------------------------ | ------- |
| Version     | Salesforce API Version Number. | 63.0    |
| Record Type | The type of Salesforce Record. |         |
| Connection  |                                |         |

### Find Record

Find a single Salesforce Record

| Input             | Comments                                                                                                                                                     | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Version           | Salesforce API Version Number.                                                                                                                               | 63.0    |
| Record Type       | The type of Salesforce Record.                                                                                                                               |         |
| Dynamic Fields    | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                |         |
| Field Values      | Name of a record's fields and their corresponding values                                                                                                     |         |
| Field Value Types | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String. |         |
| Connection        |                                                                                                                                                              |         |

### Find Records

Find and fetch Salesforce Records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Record Type          | The type of Salesforce Record.                                                                                                                                                                                                                           |         |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           |                                                                                                                                                                                                                                                          |         |

### Get Attachment

Get a file attachment from an account, opportunity or contact

| Input      | Comments                                | Default |
| ---------- | --------------------------------------- | ------- |
| Connection |                                         |         |
| Version    | Salesforce API Version Number.          | 63.0    |
| File Id    | The id of the file you wish to retrieve |         |

### Get Bulk Job Failed Record Results

Retrieves a list of failed records for a completed insert, delete, update or upsert job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Get Bulk Job Info

Retrieves detailed information about a job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Get Bulk Job Successful Record Results

Retrieves the successful record results for a job.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |

### Get Current User

Return information about the current session's user

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Connection |                                |         |

### Get Customer

Gets an existing customer record

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Record ID  | The ID of a Salesforce Record  |         |
| Connection |                                |         |

### Get File

Retrieves a file from Salesforce ContentVersion

| Input              | Comments                                             | Default |
| ------------------ | ---------------------------------------------------- | ------- |
| Content Version Id | The ID of the ContentVersion of the file to retrieve |         |
| Version            | Salesforce API Version Number.                       | 63.0    |
| Connection         |                                                      |         |

### Get Information About a Bulk Query Job

Gets information about one query job.

| Input        | Comments                       | Default |
| ------------ | ------------------------------ | ------- |
| Connection   |                                |         |
| Version      | Salesforce API Version Number. | 63.0    |
| Query Job Id | The ID of the query job        |         |

### Get Information About All Query Jobs

Gets information about all query jobs in the org.

| Input                  | Comments                                                                                                                                             | Default  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection             |                                                                                                                                                      |          |
| Version                | Salesforce API Version Number.                                                                                                                       | 63.0     |
| Is PK Chunking Enabled | If set to true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false    |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                                    |          |
| Concurrency Mode       | For future use. Gets information only about jobs matching the specified concurrency mode.                                                            | parallel |
| Query Locator          | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                     |          |

### Get Record

Get a single Salesforce Record by Id

| Input       | Comments                       | Default |
| ----------- | ------------------------------ | ------- |
| Version     | Salesforce API Version Number. | 63.0    |
| Record Type | The type of Salesforce Record. |         |
| Record ID   | The ID of a Salesforce Record  |         |
| Connection  |                                |         |

### Get Results for a Bulk Query Job

Gets the results for a query job. The job must be in a Job Complete state

| Input        | Comments                                                                                                                         | Default |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection   |                                                                                                                                  |         |
| Version      | Salesforce API Version Number.                                                                                                   | 63.0    |
| Query Job Id | The ID of the query job                                                                                                          |         |
| Locator      | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results. |         |
| Max Records  | The maximum number of records to retrieve per set of results for the query. The request is still subject to the size limits.     |         |

### List Bulk Jobs

Retrieves all jobs in the org.

| Input                  | Comments                                                                                                                                             | Default |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection             |                                                                                                                                                      |         |
| Version                | Salesforce API Version Number.                                                                                                                       | 63.0    |
| Is PK Chunking Enabled | If set to true, the request only returns information about jobs where PK Chunking is enabled. This only applies to Bulk API (not Bulk API 2.0) jobs. | false   |
| Job Type               | Gets information only about jobs matching the specified job type.                                                                                    |         |
| Locator                | A string that identifies a specific set of query results. Providing a value for this parameter returns only that set of results.                     |         |

### List Composite Resources

Gets a list of URIs for other composite resources.

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Connection |                                |         |
| Version    | Salesforce API Version Number. | 63.0    |

### List Contacts

List all contacts records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           |                                                                                                                                                                                                                                                          |         |

### List Customers

List all customer records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           |                                                                                                                                                                                                                                                          |         |

### List Leads

List all lead records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           |                                                                                                                                                                                                                                                          |         |

### List Metadata

Get all metadata components.

| Input         | Comments                          | Default      |
| ------------- | --------------------------------- | ------------ |
| Connection    |                                   |              |
| Metadata Type | The type of metadata to act upon. | CustomObject |
| Version       | Salesforce API Version Number.    | 63.0         |

### List Opportunities

List all opportunity records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           |                                                                                                                                                                                                                                                          |         |

### List Profiles

List all profile records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           |                                                                                                                                                                                                                                                          |         |

### List Users

List all user records

| Input                | Comments                                                                                                                                                                                                                                                 | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version              | Salesforce API Version Number.                                                                                                                                                                                                                           | 63.0    |
| Dynamic Fields       | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.                                                                                                                                            |         |
| Field Values         | Name of a record's fields and their corresponding values                                                                                                                                                                                                 |         |
| Field Value Types    | For each item, provide the key and the type corresponding to the field Value you entered above. You can assign a value a type of Boolean, Number, or String.                                                                                             |         |
| Page Size            | Provide an integer value for the maximum results returned per page when paginating results.                                                                                                                                                              |         |
| Page Number          | Provide an integer value for which page to return when paginating results.                                                                                                                                                                               |         |
| Sort Criteria        | The criteria by which you wish to sort the records. Use a string to specify the field and order. Prefix with '-' for descending order. For example, '-CreatedDate Name' will sort by 'CreatedDate' in descending order and by 'Name' in ascending order. |         |
| Fetch All            | Fetch all records.                                                                                                                                                                                                                                       | false   |
| Max Records To Fetch | If Fetch All is enabled, you can specify the maximum records to fetch, by default it will fetch up to 20,000 records.                                                                                                                                    | 20000   |
| Connection           |                                                                                                                                                                                                                                                          |         |

### List Workflow Outbound Messages

List all Workflow Outbound Messages

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Connection |                                |         |

### List Workflow Rules

List all Workflow Rules

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Connection |                                |         |

### Raw Request

Send raw HTTP request to Salesforce

| Input                   | Comments                                                                                                                                                                                                                                                                                                                   | Default |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection              |                                                                                                                                                                                                                                                                                                                            |         |
| Version                 | Salesforce API Version Number.                                                                                                                                                                                                                                                                                             | 63.0    |
| URL                     | Input the path only (/chatter/feeds/record/), The base URL is already included (https://<YOUR_INSTANCE_URL_COMING_FROM_CONNECTION>/services/data/v<YOUR_INPUT_VERSION>). For example, to connect to https://instance_name/services/data/v58.0/chatter/feeds/record/, only /chatter/feeds/record/ is entered in this field. |         |
| Method                  | The HTTP method to use.                                                                                                                                                                                                                                                                                                    |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                                                                                                                                                  |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                       |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                                                                                                                                           |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                                                                                                                                                     |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                                                                                                                                                        |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                                                                                                                                                |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                                                                                                                                                   | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                                                                                                                                                        |         |
| Debug Request           | Enabling this flag will log out the current request.                                                                                                                                                                                                                                                                       | false   |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                                                                                                                                                        | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors.                                                                                                                           | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                                                                                                                                                        | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                                                                                                                                              | false   |

### Read Metadata of Object

Get the metadata of an object by full name

| Input            | Comments                          | Default      |
| ---------------- | --------------------------------- | ------------ |
| Connection       |                                   |              |
| Metadata Type    | The type of metadata to act upon. | CustomObject |
| Version          | Salesforce API Version Number.    | 63.0         |
| Object Full Name |                                   |              |

### Remove User Permission Set

Removes a Permission Set from the specified User

| Input          | Comments                               | Default |
| -------------- | -------------------------------------- | ------- |
| Version        | Salesforce API Version Number.         | 63.0    |
| User Name      | Provide a User Name                    |         |
| Permission Set | Provide the name of the Permission Set |         |
| Connection     |                                        |         |

### Salesforce Query

Run an SOQL Query Against SalesForce

| Input      | Comments                                        | Default |
| ---------- | ----------------------------------------------- | ------- |
| Version    | Salesforce API Version Number.                  | 63.0    |
| SOQL Query | A SalesForce Object Query Language (SOQL) query |         |
| Connection |                                                 |         |

### Send Transactional Email

Sends a message to a single recipient via Salesforce

| Input                 | Comments                                   | Default |
| --------------------- | ------------------------------------------ | ------- |
| Message Key           | The key of the message template            |         |
| Definition Key        | The key of the message template definition |         |
| Recipient Contact Key | The key of the recipient contact           |         |
| Recipient Email       | The email of the recipient                 |         |
| Recipient Attributes  | Key-value pairs to personalize the message |         |
| Connection            |                                            |         |
| Version               | Salesforce API Version Number.             | 63.0    |

### Subscribe to Record Change

Create a workflow rule to subscribe to Record Changes in Salesforce.

| Input                  | Comments                                                                                                                                                                          | Default      |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Version                | Salesforce API Version Number.                                                                                                                                                    | 63.0         |
| Outbound Message Name  | Name of the Outbound Message                                                                                                                                                      |              |
| Workflow Record Type   | The type of Salesforce Record for the Workflow                                                                                                                                    |              |
| Trigger Event          |                                                                                                                                                                                   | onAllChanges |
| Endpoint URL           | The endpoint URL to send the outbound message / webhook to                                                                                                                        |              |
| Rule Criteria Filter   | Filter criteria data structure to use with the rule, use this or Formula. See https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/customfield.htm#filteritem |              |
| Formula                | Formula to evaluate. Use this input or Filter Criteria                                                                                                                            |              |
| Integration User Email | The email of the user under which the payload is sent. If not provided, the current user will be used                                                                             |              |
| Description            | Provide a string value for the description of the object.                                                                                                                         |              |
| Fields                 | Fields to include in the Outbound Message.                                                                                                                                        |              |
| Dynamic Fields         | Dynamic Fields, provided by value collection config variable, to include in the Outbound Message                                                                                  |              |
| Connection             |                                                                                                                                                                                   |              |

### Update Account

Update an existing account record

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID              | The ID of a Salesforce Record                                                                                 |         |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object                                                                       |         |
| Website                | Provide a valid URL for the website of the object                                                             |         |
| Account Type           | The type of account record                                                                                    |         |
| Industry               | The type of account record                                                                                    |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
| Number of Employees    | The number of employees associated with the object.                                                           |         |
| Annual Revenue         | The estimated annual revenue of the object                                                                    |         |
| Billing City           | The city of the object's billing address                                                                      |         |
| Billing Postal Code    | The zip code of the object's billing address                                                                  |         |
| Billing State          | The state of the object's billing address                                                                     |         |
| Billing Street Address | The street address of the billing object                                                                      |         |
| Billing Country        | The state of the object's billing address                                                                     |         |
| Street Address         | The street address of the object                                                                              |         |
| State                  | The state of the object's address                                                                             |         |
| Country                | The country of the object's address                                                                           |         |
| Name                   | The name of the object                                                                                        |         |
| City                   | The city of the object's address                                                                              |         |
| Postal Code            | The zip code of the object's address                                                                          |         |
| Connection             |                                                                                                               |         |

### Update Contact

Update an existing contact record

| Input                  | Comments                                                                                                      | Default |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID              | The ID of a Salesforce Record                                                                                 |         |
| Email Address          | The email address for the object                                                                              |         |
| Version                | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields         | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values           | Name of a record's fields and their corresponding values                                                      |         |
| Phone                  | The primary phone number for the object                                                                       |         |
| First Name             | The first name of the contact at the company                                                                  |         |
| Last Name              | The last name of the contact at the company                                                                   |         |
| Department             | Provide a string value that represents the name of the contact's department                                   |         |
| Birthdate              | Provide a string value that represents the birthdate                                                          |         |
| Fax                    | Provide a string value for the fax number                                                                     |         |
| Title                  | The title of the object                                                                                       |         |
| Mobile Phone           | The mobile phone number for the object                                                                        |         |
| Assistant              | Provide a string value that represents the name of the contact's assistant                                    |         |
| Assistant's Phone      | Provide a string value that represents the phone number of the contact's assistant                            |         |
| Description            | Provide a string value for the description of the object.                                                     |         |
| Billing City           | The city of the object's billing address                                                                      |         |
| Billing Postal Code    | The zip code of the object's billing address                                                                  |         |
| Billing State          | The state of the object's billing address                                                                     |         |
| Billing Street Address | The street address of the billing object                                                                      |         |
| Billing Country        | The state of the object's billing address                                                                     |         |
| Street Address         | The street address of the object                                                                              |         |
| State                  | The state of the object's address                                                                             |         |
| Country                | The country of the object's address                                                                           |         |
| City                   | The city of the object's address                                                                              |         |
| Postal Code            | The zip code of the object's address                                                                          |         |
| Connection             |                                                                                                               |         |

### Update Customer

Update an existing customer record

| Input                | Comments                                                                                                                                                                   | Default |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID            | The ID of a Salesforce Record                                                                                                                                              |         |
| Version              | Salesforce API Version Number.                                                                                                                                             | 63.0    |
| Name                 | Name of this customer.                                                                                                                                                     |         |
| Party Id             | Represents the individual object related to this customer record.                                                                                                          |         |
| Customer Status Type | The status of the customer account.                                                                                                                                        | Active  |
| Last Reference Date  | The timestamp for when the current user last viewed a record related to this record.                                                                                       |         |
| Last Viewed Date     | The timestamp for when the current user last viewed this record. If this value is null, it’s possible that this record was referenced (LastReferencedDate) and not viewed. |         |
| Owner Id             | The ID of the user who owns the record.                                                                                                                                    |         |
| Total Lifetime Value | The total revenue amount gained from this customer.                                                                                                                        |         |
| Connection           |                                                                                                                                                                            |         |

### Update Lead

Update a Salesforce Lead Record

| Input               | Comments                                                                                                            | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID           | The ID of a Salesforce Record                                                                                       |         |
| Version             | Salesforce API Version Number.                                                                                      | 63.0    |
| Company             | The name of the company                                                                                             |         |
| Email Address       | The email address for the object                                                                                    |         |
| Lead Status         | The status of the lead. Examples of valid values include: Open, Working, Closed - Converted, Closed - Not Converted |         |
| Dynamic Fields      | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable.       |         |
| Field Values        | Name of a record's fields and their corresponding values                                                            |         |
| First Name          | The first name of the contact at the company                                                                        |         |
| Last Name           | The last name of the contact at the company                                                                         |         |
| Title               | The title of the object                                                                                             |         |
| Phone               | The primary phone number for the object                                                                             |         |
| Lead Source         | Provide a value for the source of the lead.                                                                         |         |
| Rating              | The rating for the lead.                                                                                            |         |
| Website             | Provide a valid URL for the website of the object                                                                   |         |
| Street Address      | The street address of the object                                                                                    |         |
| State               | The state of the object's address                                                                                   |         |
| City                | The city of the object's address                                                                                    |         |
| Postal Code         | The zip code of the object's address                                                                                |         |
| Number of Employees | The number of employees associated with the object.                                                                 |         |
| Description         | Provide a string value for the description of the object.                                                           |         |
| Annual Revenue      | The estimated annual revenue of the object                                                                          |         |
| Connection          |                                                                                                                     |         |

### Update Metadata

Update one or more metadata components.

| Input         | Comments                                                                            | Default     |
| ------------- | ----------------------------------------------------------------------------------- | ----------- |
| Connection    |                                                                                     |             |
| Version       | Salesforce API Version Number.                                                      | 63.0        |
| Metadata Type | The type of metadata to act upon.                                                   | CustomField |
| Metadata      | Check https://jsforce.github.io/document/#update-metadata for related documentation |             |

### Update Opportunity

Update an existing opportunity record

| Input            | Comments                                                                                                      | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Record ID        | The ID of a Salesforce Record                                                                                 |         |
| Next Step        | Provide a string value for the next step of the sale.                                                         |         |
| Version          | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields   | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values     | Name of a record's fields and their corresponding values                                                      |         |
| Amount           | Provide a number that represents the opportunity amount.                                                      |         |
| Stage            | The stage the sale is currently in.                                                                           |         |
| AccountId        | The Id of the account to reference                                                                            |         |
| Opportunity Type | Provide a value for what stage the sales process is in.                                                       |         |
| Close Date       | The date the sale will close.                                                                                 |         |
| Lead Source      | Provide a value for the source of the lead.                                                                   |         |
| Probability      | The probability of the success of the sale                                                                    |         |
| Description      | Provide a string value for the description of the object.                                                     |         |
| Name             | The name of the object                                                                                        |         |
| Connection       |                                                                                                               |         |

### Update Profile

Update a Salesforce Profile

| Input       | Comments                                                                                                                                                                            | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version     | Salesforce API Version Number.                                                                                                                                                      | 63.0    |
| Record ID   | The ID of a Salesforce Record                                                                                                                                                       |         |
| Name        | The name of the profile.                                                                                                                                                            |         |
| Description | Description of the profile.                                                                                                                                                         |         |
| Permissions | Key/value object with permission name keys and boolean value indicating if a permission is granted or not. Use 'Describe Permissions' to retrieve the permissions of a Record Type. |         |
| Connection  |                                                                                                                                                                                     |         |

### Update Record

Updates an existing Salesforce Record

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| Record Type    | The type of Salesforce Record.                                                                                |         |
| Record ID      | The ID of a Salesforce Record                                                                                 |         |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| Connection     |                                                                                                               |         |

### Update User

Update a Salesforce User

| Input          | Comments                                                                                                      | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                | 63.0    |
| Dynamic Fields | A field for dynamic inputs that can be configured at deploy time with the use of a key value config variable. |         |
| Field Values   | Name of a record's fields and their corresponding values                                                      |         |
| User Name      | Provide a User Name                                                                                           |         |
| Connection     |                                                                                                               |         |

### Upload Bulk Job Data

Uploads data for a job using CSV data you provide.

| Input       | Comments                                                                         | Default |
| ----------- | -------------------------------------------------------------------------------- | ------- |
| Connection  |                                                                                  |         |
| Version     | Salesforce API Version Number.                                                   | 63.0    |
| Bulk Job Id | The ID of the Bulk Job. This is the ID returned from the Create Bulk Job action. |         |
| File        | The file to be uploaded                                                          |         |

### Upload File

Uploads a file to Salesforce ContentVersion

| Input          | Comments                                                                                                                                                                                            | Default |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Version        | Salesforce API Version Number.                                                                                                                                                                      | 63.0    |
| Connection     |                                                                                                                                                                                                     |         |
| File           | The file to be uploaded                                                                                                                                                                             |         |
| Path On Client | The complete path of the document. One of the fields that determines the FileType. Specify a complete path including the path extension in order for the document to be visible in the Preview tab. |         |

### Upsert Record

Updates a Salesforce Record if it exists, otherwise creates a new Salesforce Record

| Input                  | Comments                                                    | Default |
| ---------------------- | ----------------------------------------------------------- | ------- |
| Version                | Salesforce API Version Number.                              | 63.0    |
| Record Type            | The type of Salesforce Record.                              |         |
| External ID Field Name | The name of the column that refers to the External ID Field |         |
| Records                | The records to be upserted                                  |         |
| Connection             |                                                             |         |

### Validate Connection

Returns a boolean value that specifies whether the provided Connection is valid

| Input      | Comments                       | Default |
| ---------- | ------------------------------ | ------- |
| Version    | Salesforce API Version Number. | 63.0    |
| Connection |                                |         |
