---
title: Amazon DynamoDB Connector
sidebar_label: Amazon DynamoDB
description: Create, update, fetch, or delete items in an Amazon (AWS) DynamoDB database
---

![Amazon DynamoDB](./assets/aws-dynamodb.png#connector-icon)
Create, update, fetch, or delete items in an Amazon (AWS) DynamoDB database

## Connections

### AWS Role ARN

Connect to AWS using an assumed role

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN          |         |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

### DynamoDB Access Key and Secret

Authenticates requests to Amazon DynamoDB using an API Key and API Secret.

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Actions

### Create Table

Create a new DynamoDB Table

| Input                | Comments                                                                                                                                                                                                   | Default                                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AWS Region           | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                    |                                                                                                                                                                                          |
| Table Name           | Provide the name of the table you would like to interact with.                                                                                                                                             |                                                                                                                                                                                          |
| Attribute Definition | For each list item, provide a javascript object containing an attribute name, and an attribute type. The attribute type must be in the format that DynamoDB uses: N = number, S = string, L = Array etc... | <code>[<br /> {<br /> "AttributeName": "customerId",<br /> "AttributeType": "N"<br /> },<br /> {<br /> "AttributeName": "customerName",<br /> "AttributeType": "S"<br /> }<br />]</code> |
| Key Schema           | For each list item, provide a javascript object containing an attribute name, and a key type. The key type can either be a HASH or a RANGE key.                                                            | <code>[<br /> {<br /> "KeyType": "HASH",<br /> "AttributeName": "customerId"<br /> },<br /> {<br /> "KeyType": "RANGE",<br /> "AttributeName": "customerName"<br /> }<br />]</code>      |
| Billing Mode         | Select the item that represents your desired billing mode.                                                                                                                                                 | PROVISIONED                                                                                                                                                                              |
| Read Capacity Units  | One read capacity unit represents one strongly consistent read per second, or two eventually consistent reads per second, for an item up to 4 KB in size.                                                  | 5                                                                                                                                                                                        |
| Write Capacity Units | One write capacity unit represents one write per second for an item up to 1 KB in size. If you need to write an item that is larger than 1 KB, DynamoDB must consume additional write capacity units.      | 5                                                                                                                                                                                        |
| Connection           |                                                                                                                                                                                                            |                                                                                                                                                                                          |

### Delete Item

Delete an item from a DynamoDB database

| Input                            | Comments                                                                                                                                                                                                                                                                      | Default |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                       |         |
| Table Name                       | Provide the name of the table you would like to interact with.                                                                                                                                                                                                                |         |
| Hash / Primary Key Value         | The value of the hash key (primary key) to match                                                                                                                                                                                                                              |         |
| Range / Sort Key Value           | The value of the optional range key (sort key) to match. This is required if your table has a range key.                                                                                                                                                                      |         |
| Condition Expression             |                                                                                                                                                                                                                                                                               |         |
| Expression Attribute Values      | Expression attribute values in Amazon DynamoDB are substitutes for the actual values that you want to compare—values that you might not know until runtime. An expression attribute value must begin with a colon (:) and be followed by one or more alphanumeric characters. |         |
| Expression Attribute Value Types | The DynamoDB data type for each query param. You must specify a type for each Expression Attribute Value you provided.                                                                                                                                                        |         |
| Connection                       |                                                                                                                                                                                                                                                                               |         |

### Delete Table

Delete an existing DynamoDB Table

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Table Name | Provide the name of the table you would like to interact with.          |         |
| Connection |                                                                         |         |

### Describe Table

Fetch metadata about an existing DynamoDB Table

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Table Name | Provide the name of the table you would like to interact with.          |         |
| Connection |                                                                         |         |

### Get Item

Retrieve an item from a DynamoDB database

| Input                    | Comments                                                                                                 | Default |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region               | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                  |         |
| Table Name               | Provide the name of the table you would like to interact with.                                           |         |
| Hash / Primary Key Value | The value of the hash key (primary key) to match                                                         |         |
| Range / Sort Key Value   | The value of the optional range key (sort key) to match. This is required if your table has a range key. |         |
| Connection               |                                                                                                          |         |

### List Tables

List all DynamoDB Tables

| Input      | Comments                                                                | Default |
| ---------- | ----------------------------------------------------------------------- | ------- |
| AWS Region | AWS provides services in multiple regions, like us-west-2 or eu-west-1. |         |
| Connection |                                                                         |         |

### Query Items

Query a DynamoDB table

| Input                            | Comments                                                                                                                                                                                                                                                                      | Default |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                       |         |
| Table Name                       | Provide the name of the table you would like to interact with.                                                                                                                                                                                                                |         |
| Expression Attribute Values      | Expression attribute values in Amazon DynamoDB are substitutes for the actual values that you want to compare—values that you might not know until runtime. An expression attribute value must begin with a colon (:) and be followed by one or more alphanumeric characters. |         |
| Expression Attribute Value Types | The DynamoDB data type for each query param. You must specify a type for each Expression Attribute Value you provided.                                                                                                                                                        |         |
| Key Condition Expression         | The key condition expression for the query.                                                                                                                                                                                                                                   |         |
| Filter Expression                | The filter expression for the query.                                                                                                                                                                                                                                          |         |
| Query Parameters                 | The DynamoDB data type for each query param. You must specify a type for each Expression Attribute Value you provided.                                                                                                                                                        |         |
| Debug                            | Enable debug mode to log additional information.                                                                                                                                                                                                                              | false   |
| Connection                       |                                                                                                                                                                                                                                                                               |         |

### Raw Request

Execute single PartiQL statements.

| Input            | Comments                                                                                                               | Default                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| AWS Region       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                |                                    |
| Statement        | The PartiQL statement representing the operation to run.                                                               |                                    |
| Parameters       | The parameters for the PartiQL statement, if any.                                                                      | <code>[<br /> "Rose"<br />]</code> |
| Query Parameters | The DynamoDB data type for each query param. You must specify a type for each Expression Attribute Value you provided. |                                    |
| Debug            | Enable debug mode to log additional information.                                                                       | false                              |
| Connection       |                                                                                                                        |                                    |

### Update Item

Update an existing item in a DynamoDB database

| Input                            | Comments                                                                                                                                                                                                                                                                      | Default |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                       |         |
| Table Name                       | Provide the name of the table you would like to interact with.                                                                                                                                                                                                                |         |
| Hash / Primary Key Value         | The value of the hash key (primary key) to match                                                                                                                                                                                                                              |         |
| Range / Sort Key Value           | The value of the optional range key (sort key) to match. This is required if your table has a range key.                                                                                                                                                                      |         |
| Update Expression                | An update expression specifies how UpdateItem will modify the attributes of an item. For example, setting a scalar value or removing elements from a list or a map.                                                                                                           |         |
| Condition Expression             |                                                                                                                                                                                                                                                                               |         |
| Expression Attribute Values      | Expression attribute values in Amazon DynamoDB are substitutes for the actual values that you want to compare—values that you might not know until runtime. An expression attribute value must begin with a colon (:) and be followed by one or more alphanumeric characters. |         |
| Expression Attribute Value Types | The DynamoDB data type for each query param. You must specify a type for each Expression Attribute Value you provided.                                                                                                                                                        |         |
| Connection                       |                                                                                                                                                                                                                                                                               |         |

### Upsert Item

Creates a new item, or replaces an existing item with a new item

| Input                            | Comments                                                                                                                                                                                                                                                                      | Default |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| AWS Region                       | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                       |         |
| Table Name                       | Provide the name of the table you would like to interact with.                                                                                                                                                                                                                |         |
| Value                            | Provide a key value record to be inserted into the specified table.                                                                                                                                                                                                           |         |
| Value Types                      | For each item in the list, provide the datatype corresponding to the input item.                                                                                                                                                                                              |         |
| Condition Expression             |                                                                                                                                                                                                                                                                               |         |
| Expression Attribute Values      | Expression attribute values in Amazon DynamoDB are substitutes for the actual values that you want to compare—values that you might not know until runtime. An expression attribute value must begin with a colon (:) and be followed by one or more alphanumeric characters. |         |
| Expression Attribute Value Types | The DynamoDB data type for each query param. You must specify a type for each Expression Attribute Value you provided.                                                                                                                                                        |         |
| Connection                       |                                                                                                                                                                                                                                                                               |         |
