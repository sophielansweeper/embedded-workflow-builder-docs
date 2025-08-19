# First Resonance ION Connector

![First Resonance ION](./assets/first-resonance.png#connector-icon)
Interact with ION&#x27;s data and services through ION&#x27;s GraphQL API.

## Connections

### OAuth Client Credentials

Get an access token for the ION API

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input         | Comments                            | Default |
| ------------- | ----------------------------------- | ------- |
| Auth Endpoint | The ION **Auth Endpoint**           |         |
| Client ID     | The OAuth 2.0 Client ID for ION     |         |
| Client Secret | The OAuth 2.0 Client Secret for ION |         |

## Triggers

### Trigger

Receive a webhook from ION

## Actions

### Run GraphQL Query

Performs a generic GraphQL query against the API

| Input             | Comments                     | Default |
| ----------------- | ---------------------------- | ------- |
| Connection        |                              |         |
| GraphQL Query     | The GraphQL query to run     |         |
| GraphQL Variables | The GraphQL variables to run |         |
