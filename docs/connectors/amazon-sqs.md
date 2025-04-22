---
title: Amazon SQS Connector
sidebar_label: Amazon SQS
description: Send, receive and manage messages within an Amazon (AWS) SQS queue
---

## Description

Send, receive and manage messages within an Amazon (AWS) SQS queue

## Connections

### AWS Role ARN

Connect to AWS using an assumed role

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Role ARN          | An AWS IAM Role ARN          |         |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

### AWS SQS Access Key and Secret

Authenticates requests to Amazon SQS using an API Key and API Secret

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Access Key ID     | An AWS IAM Access Key ID     |         |
| Secret Access Key | An AWS IAM Secret Access Key |         |

## Actions

### Create Queue

Create an Amazon SQS Queue

| Input                       | Comments                                                                                                                                                                         | Default |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                  |                                                                                                                                                                                  |         |
| AWS Region                  | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                          |         |
| Dynamic Access Key ID       | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                      |         |
| Dynamic Secret Access Key   | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.           |         |
| Dynamic Session Token       | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                         |         |
| Name                        | The name of a new queue. Can only include alphanumeric characters, hyphens, or underscores and must be 1 to 80 characters in length. FIFO queues must end with the .fifo suffix. |         |
| FIFO Queue                  | This flag enables the creation of a FIFO Queue. Once you create a FIFO queue you cannot change it to a standard queue.                                                           | false   |
| Content Based Deduplication | This flag enables Content Based Deduplication on a FIFO queue. Once you create a FIFO queue you cannot change the value of this input.                                           | false   |
| Tags                        | The list of tags you want to tag your AWS SQS queue with.                                                                                                                        |         |

### Delete Message

Delete a message from an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                                                       | Default    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Connection                |                                                                                                                                                                                                |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                        |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                    |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                         |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                       |            |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.                                    | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Receipt Handle            | Every time you receive a message from a queue, you receive a receipt handle for that message. This handle is associated with the action of receiving the message, not with the message itself. |            |

### Delete Queue

Delete an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                               | Default    |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Connection                |                                                                                                                                                                        |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |            |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.            | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |

### Get a Queue's URL

Get the URL of an Amazon SQS Queue given its name

| Input                     | Comments                                                                                                                                                                         | Default |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                                  |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                          |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                      |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.           |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                         |         |
| Name                      | The name of a new queue. Can only include alphanumeric characters, hyphens, or underscores and must be 1 to 80 characters in length. FIFO queues must end with the .fifo suffix. |         |

### List Queues

Fetch a list of Amazon SQS Queues

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                        |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |
| Queue Prefix              | Provide an integer value for the maximum amount of items that will be returned. Provide a value from 1 to 50.                                                          |         |

### Receive Messages

Receive messages from an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                                                                                                                                                                 | Default    |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Connection                |                                                                                                                                                                                                                                                                                                          |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                  |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                                                                                              |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                                                                                   |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                                                                                                 |            |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.                                                                                                                                              | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Max Messages              | Provide a number for the max amount of values to be returned.                                                                                                                                                                                                                                            |            |
| Wait Time (seconds)       | The duration (in seconds) for which the call waits for a message to arrive in the queue before returning. If a message is available, the call returns sooner than WaitTimeSeconds. If no messages are available and the wait time expires, the call returns successfully with an empty list of messages. |            |

### Send Message

Send a message to an Amazon SQS Queue

| Input                     | Comments                                                                                                                                                                                                                                                                                                                        | Default    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------------------- | --- |
| Connection                |                                                                                                                                                                                                                                                                                                                                 |            |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                                                                                                                                                                         |            |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.                                                                                                                                                                     |            |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key.                                                                                                                                                          |            |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                                                                                                                                                                                        |            |
| Queue URL                 | You require the queue URL to send, receive, and delete queue messages. A queue URL is constructed in the following format: https://{REGION_ENDPOINT}/queue.                                                                                                                                                                     | api-domain | /{YOUR_ACCOUNT_NUMBER}/{YOUR_QUEUE_NAME} |     |
| Message                   | Provide a string containing the message you would like to send.                                                                                                                                                                                                                                                                 |            |
| Message Group Id          | The message group ID is the tag that specifies that a message belongs to a specific message group. Messages that belong to the same message group are always processed one by one, in a strict order relative to the message group (however, messages that belong to different message groups might be processed out of order). |            |
| Message deduplication ID  | The message deduplication ID is the token used for deduplication of sent messages. If a message with a particular message deduplication ID is sent successfully, any messages sent with the same message deduplication ID are accepted successfully but aren't delivered during the 5-minute deduplication interval.            |            |
| Attributes                | Amazon SQS lets you include structured metadata (such as timestamps, geospatial data, signatures, and identifiers) with messages using message attributes. Each message can have up to 10 attributes.                                                                                                                           |            |
| Delay Seconds             | Provide a number of optional seconds to delay sending a message.                                                                                                                                                                                                                                                                |            |

## Data Sources

### Select AWS Region

Select an AWS region

### Select Queues

Select an SQS queue from a list

| Input                     | Comments                                                                                                                                                               | Default |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection                |                                                                                                                                                                        |         |
| AWS Region                | AWS provides services in multiple regions, like us-west-2 or eu-west-1.                                                                                                |         |
| Dynamic Access Key ID     | Use this input to authenticate with AWS if you are using a dynamically-generated access key. Otherwise, use the connection to enter a static access key ID.            |         |
| Dynamic Secret Access Key | Use this input to authenticate with AWS if you are using a dynamically-generated secret access key. Otherwise, use the connection to enter a static secret access key. |         |
| Dynamic Session Token     | Use this input to authenticate with AWS if you are using a OPTIONAL dynamically-generated session token.                                                               |         |
