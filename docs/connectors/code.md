---
title: Code Connector
sidebar_label: Code
description: Author and run your own code
---

## Description

Author and run your own code

## Connections

### API Key

API Key connection

| Input   | Comments | Default |
| ------- | -------- | ------- |
| API Key | API Key  |         |

### API Key Secret

API Key Secret connection

| Input      | Comments   | Default |
| ---------- | ---------- | ------- |
| API Key    | API Key    |         |
| API Secret | API Secret |         |

### Basic Username/Password

Basic Username and Password connection

| Input    | Comments | Default |
| -------- | -------- | ------- |
| Username | Username |         |
| Password | Password |         |

### OAuth 2.0 Authorization Code

OAuth 2.0 Authorization Code flow

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../connections/oauth2.md).

| Input         | Comments                                                | Default |
| ------------- | ------------------------------------------------------- | ------- |
| Authorize URL | The OAuth 2.0 Authorization URL for the API             |         |
| Token URL     | The OAuth 2.0 Token URL for the API                     |         |
| Scopes        | Space separated OAuth 2.0 permission scopes for the API |         |
| Client ID     | Client Identifier of your app for the API               |         |
| Client Secret | Client Secret of your app for the API                   |         |
| Headers       | Additional header to supply to authorization requests   |         |

### OAuth 2.0 Client Credentials

OAuth 2.0 Client Credentials flow

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../connections/oauth2.md).

| Input         | Comments                                                | Default |
| ------------- | ------------------------------------------------------- | ------- |
| Token URL     | The OAuth 2.0 Token URL for the API                     |         |
| Scopes        | Space separated OAuth 2.0 permission scopes for the API |         |
| Client ID     | Client Identifier of your app for the API               |         |
| Client Secret | Client Secret of your app for the API                   |         |
| Headers       | Additional header to supply to token requests           |         |

### Private Key

Private key connection

| Input       | Comments    | Default |
| ----------- | ----------- | ------- |
| Username    | Username    |         |
| Private Key | Private Key |         |

## Triggers

### Code Block Trigger

Author and run your own code as a trigger

| Input | Comments                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code  | The code to be executed | /_<br /> Access config variables by name through the configVars object. e.g.<br /> const apiEndpoint = `${configVars["App Base URL"]}/api`;<br /><br /> Access the trigger payload using the payload argument. This includes<br /> headers, the body of the request, and more information about the request.<br /><br /> You can return string, number or complex object data. e.g.<br /> return { payload: { foo: "Hello", bar: 123.45, baz: true } };<br /><br /> You are also able to return an optional response to the webhook caller.<br /> For example, you can respond with a CSV response like the following:<br /> return {<br /> payload: { foo: "Hello", bar: 123.45, baz: true },<br /> response: { statusCode: 200, contentType: "text/csv", body: "hello,world" },<br /> }<br />_/<br /><br />module.exports = async ({ logger, configVars }, payload) => {<br /> const response = {<br /> statusCode: 200,<br /> contentType: "text/plain",<br /> body: "hello",<br /> };<br /> return { payload, response };<br />}; |

## Actions

### Code Block

Author and run your own code

| Input | Comments                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Code  | The code to be executed | /_<br /> Access config variables by name through the configVars object. e.g.<br /> const apiEndpoint = `${configVars["App Base URL"]}/api`;<br /><br /> Access previous steps' results through the stepResults object. Trigger<br /> and step names are camelCased. If the step "Get Data from API" returned<br /> {"foo": "bar", "baz": 123}, you could destructure that data with:<br /> const { foo, baz } = stepResults.getDataFromApi.results;<br /><br /> You can return string, number or complex object data. e.g.<br /> return { data: { foo: "Hello", bar: 123.45, baz: true } };<br />_/<br /><br />module.exports = async ({ logger, configVars }, stepResults) => {<br /> return { data: null };<br />};<br /> |

## Data Sources

### Code Block JSON Form

Author and run your own code as a JSON Form data source

| Input         | Comments                | Default                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection    |                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Context Value |                         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Code          | The code to be executed | module.exports = async (context, { connection, contextValue }) => {<br /> const schema = {<br /> type: "object",<br /> properties: {<br /> companyName: {<br /> type: "string",<br /> },<br /> companyDescription: {<br /> type: "string",<br /> description: "You can enter multiple lines here",<br /> },<br /> numEmployees: {<br /> type: "integer",<br /> description: "Include employees in all offices",<br /> },<br /> continent: {<br /> type: "string",<br /> enum: [<br /> "North America",<br /> "South America",<br /> "Europe",<br /> "Asia",<br /> "Africa",<br /> "Australia",<br /> ],<br /> },<br /> biDirectionalSync: {<br /> type: "boolean",<br /> },<br /> },<br /> required: ["companyName"],<br /> };<br /><br /> const uiSchema = {<br /> type: "VerticalLayout",<br /> elements: [<br /> {<br /> type: "Control",<br /> scope: "#/properties/companyName",<br /> },<br /> {<br /> type: "Control",<br /> scope: "#/properties/companyDescription",<br /> options: {<br /> multi: true,<br /> },<br /> },<br /> {<br /> type: "Control",<br /> label: "Employee Count",<br /> scope: "#/properties/numEmployees",<br /> },<br /> {<br /> type: "Control",<br /> scope: "#/properties/continent",<br /> },<br /> {<br /> type: "Control",<br /> label: "Sync Data Bi-Directionally?",<br /> scope: "#/properties/biDirectionalSync",<br /> },<br /> ],<br /> };<br /><br /> const data = {<br /> companyName: "Example Company",<br /> };<br /><br /> return Promise.resolve({<br /> schema,<br /> uiSchema,<br /> data,<br /> });<br />}; |

### Code Block Object Selection

Author and run your own code as a object selection data source

| Input         | Comments                | Default                                                                                                                                                                                                                                                                              |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection    |                         |                                                                                                                                                                                                                                                                                      |
| Context Value |                         |                                                                                                                                                                                                                                                                                      |
| Code          | The code to be executed | module.exports = async (context, { connection, contextValue }) => {<br /> const options = [<br /> { object: { label: "Hello", key: "hello" } },<br /> { object: { label: "World", key: "world" } },<br /> ];<br /> return Promise.resolve({<br /> result: options,<br /> });<br />}; |

### Code Block Picklist

Author and run your own code as a picklist data source

| Input         | Comments                | Default                                                                                                                                                                                                                                                      |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection    |                         |                                                                                                                                                                                                                                                              |
| Context Value |                         |                                                                                                                                                                                                                                                              |
| Code          | The code to be executed | module.exports = async (context, { connection, contextValue }) => {<br /> const options = [<br /> { label: "Hello", key: "hello" },<br /> { label: "World", key: "world" },<br /> ];<br /> return Promise.resolve({<br /> result: options,<br /> });<br />}; |

### Code Block String

Author and run your own code as a string data source

| Input         | Comments                | Default                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Connection    |                         |                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Context Value |                         |                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Code          | The code to be executed | <br />module.exports = async (context, { connection, contextValue }) => {<br /> // Random number between 1 and 100<br /> const randomNumber = Math.floor(Math.random() \* 100 + 1)<br /><br /> // Random To-Do item<br /> const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`);<br /><br /> const { title } = await response.json();<br /><br /> return { result: title };<br />}; |
