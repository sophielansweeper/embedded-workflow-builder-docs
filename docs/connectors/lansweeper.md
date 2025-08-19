## Lansweeper Connector

The Lansweeper connector allows you to interact with the Lansweeper API through Flow Builder.  
You can retrieve, update, or delete data related to assets, software, vulnerabilities, and reports across multiple sites using configurable inputs and filters.

Use the component key **lansweeperConnector** to connect your Workflows to Lansweeper.

## API Documentation

This component was built using the [Lansweeper API documentation](https://developer.lansweeper.com/docs/data-api/get-started/welcome/).

---

## Connections

### Personal Access Token

| **Input**      | **Key**        | **Type** | **Required** | **Comments**                                                                                                                                  | **Example**                     |
|----------------|----------------|----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Access Token   | accessToken    | string   | true          | You can generate this access token using [this article](https://developer.lansweeper.com/docs/data-api/get-started/quickstart).              | echl.4rf3dss                    |
| Site ID        | *(blank)*      | string   | true          | The Site ID value for actions.                                                                                                                | 6ee1dd2d-45c7-46c0-a019-bc69de36g645 |

---

### OAuth2 Authentication

To create an OAuth 2.0 app in Lansweeper:

1. Log in to Lansweeper and [create an OAuth access token](https://developer.lansweeper.com/docs/data-api/get-started/quickstart#oauth).
2. Register a new OAuth Workflow, and enter this as the redirect URL:  
   `https://oauth2.flowbuilder.eu.lansweeper.com/callback`

| **Input**           | **Type**  | **Required** | **Comments**                                                                                       | **Example**                                                                 |
|---------------------|-----------|---------------|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| Authorize URL       | string    | true          | The OAuth 2.0 Authorization URL for Lansweeper.                                                    | https://app.lansweeper.com/authorize-app/420996b1f1c606ec878a77814658dbdd |
| Token URL           | string    | true          | The token URL is used to generate the authorization code.                                          | https://api.lansweeper.com/api/Workflows/oauth/token                       |
| Client ID           | string    | true          | Provide the Client ID you received while creating the Lansweeper app.                              | 420996b1f1c606ec878a77814658dbdd                                           |
| Client Secret       | password  | true          | Provide the Client Secret you received while creating the Lansweeper app.                          | 9ifrZ-I01oK7bYXih9jvTc-sTshbsgbgAQ8RBejzdZpxcjaZ0YuWz-iJJgiWedme           |
| Grant Type          | string    | *(blank)*     | *(blank)*                                                                                           | refresh_token                                                               |

---

## Data Sources

### Filter Assets

This data source provides a JSON form to filter a list of assets. It can be referenced using a config variable in Flow Builder.

#### Main Filter Inputs

| **Input**    | **Type** | **Comments**                                                                                                     | **Example**   |
|--------------|----------|------------------------------------------------------------------------------------------------------------------|---------------|
| Conjunction  | string   | Determines how multiple conditions are combined—either using `AND` or `OR`.                                     | AND, OR       |
| Condition    | array    | Accepts one or more conditions to apply when filtering assets—see "Conditions" below for detailed structure.     | *(see below)* |

#### Conditions

| **Input** | **Type** | **Required** | **Comments**                                                                                  | **Example**        |
|----------|----------|--------------|-----------------------------------------------------------------------------------------------|--------------------|
| Path     | string   | true         | The field in the asset data to filter on.                                                     | Name, IP Address   |
| Operator | string   | true         | The operator to apply — such as equal, not equal, greater than, like, etc.                    | Equal, Like        |
| Value    | string   | true         | The value to evaluate the condition against.                                                  | asset123           |

Valid **Path** values include (but are not limited to):

- Key
- Install Key
- Name
- Domain
- First Seen
- IP Address
- Mac
- Description
- DNS Name
- Scanner Type
- Type Group
- Manufacturer
- Serial Number
- Warranty Date

Valid **Operator** values include:

- Equal  
- Not equal  
- Greater than  
- Greater than or equal  
- Smaller than  
- Smaller than or equal  
- Exists  
- Like  
- Regexp

---

### Filter Software

This data source provides a JSON form to filter software information. You can define fields to filter against specific software attributes.

#### Main Filter Inputs

| **Input**  | **Type**          | **Required** | **Comments**                                                                 | **Example**        |
|-----------|-------------------|--------------|------------------------------------------------------------------------------|---------------------|
| Fields    | list of strings   | true         | The fields in the software data to filter on from the allowed fields list.  | Software, Version   |
| Type      | string            | true         | The comparison operator to use — e.g. equal, like.                          | LIKE, EQUAL         |
| Value     | string            | true         | The value to evaluate against the fields.                                  | AIX-rpm             |

Allowed **Fields** include:

- Software
- State Name
- Operating Systems
- Publisher
- Versions
- Languages
- Editions
- Market Versions
- Short Versions
- Architectures
- Category
- Unspsc
- Type
- Install Type

## Actions

### List Authorized Sites

Retrieve details of the sites available to the user.

**Key:** `getSiteDetailsAction`

| **Input**    | **Type**    | **Required** | **Comments**                                 | **Example** |
|--------------|-------------|--------------|----------------------------------------------|-------------|
| Connection   | connection  | true         | Connection to authenticate with Lansweeper.  | —           |

---

### List of Assets

Fetches a list of assets from Lansweeper.

**Key:** `listAssetsAction`

| **Input**                | **Type**      | **Required** | **Comments**                                                                                                       | **Example**                                    |
|--------------------------|---------------|--------------|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| Connection               | connection    | true         | Authentication connection                                                                                          | —                                              |
| Max Records              | number        | true         | Maximum number of assets to fetch in the request.                                                                  | 10                                             |
| Filter                   | GraphQL       | optional     | JSON object used to filter specific assets using conjunction and conditions (see below).                           | See example below                              |
| Additional Asset Details | value list    | optional     | List of optional asset fields to include in response.                                                              | Architectures, Editions, Languages, Install Type |

#### Example Filter JSON

```json
{
  "conjunction": "OR",
  "conditions": [
    {
      "operator": "EQUAL",
      "path": "key",
      "value": "asset-key-1"
    },
    {
      "operator": "EQUAL",
      "path": "key",
      "value": "asset-key-2"
    }
  ]
}
```

#### **Allowed Path values for filters**

- `key`  
- `installKey`  
- `assetBasicInfo.description`  
- `assetBasicInfo.domain`  
- `assetBasicInfo.firstSeen`  
- `assetBasicInfo.ipAddress`  
- `assetBasicInfo.lastSeen`  
- `assetBasicInfo.mac`  
- `assetBasicInfo.name`  
- `assetBasicInfo.scannerType`  
- `assetBasicInfo.subType`  
- `assetBasicInfo.type`  
- `assetBasicInfo.typeGroup`  
- `assetBasicInfo.userName`  
- `dnsName`  
- `manufacturer`  
- `model`  
- `purchaseDate`  
- `serialNumber`  
- `stateName`  
- `warrantyDate`  
- `installationId`

#### **Allowed Operators**

- `EQUAL`  
- `NOT_EQUAL`  
- `GREATER_THAN`  
- `GREATER_THAN_OR_EQUAL`  
- `SMALLER_THAN`  
- `SMALLER_THAN_OR_EQUAL`  
- `EXISTS`  
- `LIKE`  
- `REGEXP`

### **Get Asset by Key**

Fetches an asset using its unique key.  
**Key:** `getAssetByKeyAction`

| **Input**    | **Type**    | **Required** | **Comments**                              | **Example**                              |
|--------------|-------------|--------------|-------------------------------------------|------------------------------------------|
| Connection   | connection  | true         | Connection used for authentication.       | —                                        |
| Asset Key    | string      | true         | The unique key of the asset to retrieve.  | 00031243-7800-3b08-a345-a79ce8cbb96e     |

### **Edit Asset by Key**

Update details for a specific asset using its unique key.  
**Key:** `editAssetAction`

| **Input**                    | **Type**            | **Required** | **Comments**                                                                                                     | **Example**                          |
|-----------------------------|---------------------|--------------|------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| Connection                  | connection          | true         | Authentication for accessing the asset.                                                                         | —                                    |
| Asset Key                   | string              | true         | The unique key of the asset to update.                                                                           | 00031243-7800-3b08-a345-a79ce8cbb96e |
| Asset Description           | string              | true         | Value to update for the asset's description.                                                                     | This is a test description.          |
| Asset Domain                | string              | false        | New domain name for the asset.                                                                                   | lansweeper.com                       |
| Asset IP Address            | string              | false        | IP address to assign to the asset.                                                                               | 0.0.0.0                              |
| Asset Name                  | string              | false        | Name of the asset to update.                                                                                     | Test_asset                           |
| Acquisition Type            | string              | false        | How the asset was acquired (e.g., Lease, Purchase).                                                              | Lease                                |
| Cost Center                 | string              | false        | Cost center identifier or name.                                                                                  | Dummy                                |
| Industry                    | string              | false        | Industry classification or label related to the asset.                                                           | Dummy                                |
| Invoice Number              | string              | false        | Invoice tracking or reference number related to the asset.                                                       | INC0001                              |
| Owner                       | string              | false        | Name of the person or department that owns the asset.                                                            | Dummy                                |
| PO Date                     | string              | false        | Purchase order date.                                                                                             | 12-31-2024                           |
| Vendor Name                 | string              | false        | Vendor associated with the asset.                                                                                | Dummy                                |
| Asset Additional Fields to Edit | key-value list   | optional     | Additional built-in asset fields. Refer to the [Lansweeper documentation](https://developer.lansweeper.com/docs/data-api/reference/types#assetcustominput) for field names. | barCode, manufacturer, warrantyDate |
| Asset Custom Fields to Edit     | key-value list   | optional     | Use to update custom fields tied to this asset. Provide the custom field name and the new value.                 | My Custom Field                      |

### **Delete Assets by Key**

Delete one or more assets from Lansweeper using their unique keys.  
**Key:** `deleteAssetsAction`

| **Input**    | **Type**    | **Required** | **Comments**                              | **Example**                              |
|--------------|-------------|--------------|-------------------------------------------|------------------------------------------|
| Connection   | connection  | true         | Used to authenticate with Lansweeper.     | —                                        |
| Asset Key    | string      | true         | The unique key of the asset to delete.    | 00031243-7800-3b08-a345-a79ce8cbb96e     |

---

### **List of Assets with Specific Software Installed**

Fetch assets where a specific software product is installed, optionally filtered by publisher.  
**Key:** `listAssetsBySoftwareAction`

| **Input**      | **Type**    | **Required** | **Comments**                                                                 | **Example**      |
|----------------|-------------|--------------|------------------------------------------------------------------------------|------------------|
| Connection     | connection  | true         | Lansweeper authentication                                                    | —                |
| Max Records    | number      | true         | Maximum number of asset records to return                                   | 10               |
| Software Name  | string      | true         | Name of the software to search for                                          | AIX-rpm          |
| Publisher      | string      | optional     | Publisher of the software                                                   | Microsoft        |
| Filter         | GraphQL     | optional     | Optional JSON-based filter using `conjunction` and `conditions`             | See example below |

#### Example Filter JSON

```json
{
  "conjunction": "OR",
  "conditions": [
    {
      "operator": "EQUAL",
      "path": "key",
      "value": "asset-key-1"
    },
    {
      "operator": "EQUAL",
      "path": "key",
      "value": "asset-key-2"
    }
  ]
}
```

### **List of Assets with Vulnerabilities**

Fetch assets impacted by specific vulnerabilities (CVE IDs).  
**Key:** `listAssetsByVulnerabilityAction`

| **Input**                | **Type**    | **Required** | **Comments**                                      | **Example**                                     |
|--------------------------|-------------|--------------|--------------------------------------------------|-------------------------------------------------|
| Connection               | connection  | true         | Lansweeper authentication                         | —                                               |
| Max Records              | number      | true         | Max number of assets to return                    | 10                                              |
| Vulnerabilities CVE List | string      | true         | One or more CVE identifiers to search for         | CVE-2020-32969, CVE-2022-22919                  |
| Filter                   | GraphQL     | optional     | Optional filter using conjunction and conditions  | See example below                               |

#### **Example Filter JSON**

```json
{
  "conjunction": "OR",
  "conditions": [
    {
      "operator": "EQUAL",
      "path": "key",
      "value": "asset-key-1"
    },
    {
      "operator": "EQUAL",
      "path": "key",
      "value": "asset-key-2"
    }
  ]
}
```

### **Get Vulnerability by CVE**

Fetch detailed information about a specific CVE vulnerability.  
**Key:** `getVulnerabilityByCVEAction`

| **Input**                 | **Type**                    | **Required** | **Comments**                                                            | **Example**                          |
|---------------------------|-----------------------------|--------------|-------------------------------------------------------------------------|--------------------------------------|
| Connection                | connection                  | true         | Lansweeper connection for authentication                                | —                                    |
| Vulnerabilities CVE       | string                      | true         | The CVE identifier to look up                                           | CVE-2020-32969                       |
| Additional Vulnerability  | details string value list   | optional     | Additional related fields to include in the response                    | Availability Impact, Integrity, References |


### **List Vulnerabilities in Assets**

Return all vulnerabilities affecting a specific asset.  
**Key:** `listVulnerabilitiesInAssetsAction`

| **Input**     | **Type**    | **Required** | **Comments**                                                                 | **Example**                              |
|---------------|-------------|--------------|------------------------------------------------------------------------------|------------------------------------------|
| Connection    | connection  | true         | Authentication for accessing Lansweeper                                     | —                                        |
| Max Records   | number      | true         | Maximum number of vulnerabilities to retrieve                               | 10                                       |
| Asset Key     | string      | true         | The unique key of the asset to scan for vulnerabilities                     | 00031243-7800-3b08-a345-a79ce8cbb96e     |
| Filter        | GraphQL     | optional     | Apply optional filters on vulnerabilities for further refinement            | See example below                        |

#### **Example Filter JSON**

```json
{
  "conjunction": "OR",
  "conditions": [
    {
      "operator": "EQUAL",
      "path": "baseScore",
      "value": "9"
    },
    {
      "operator": "GREATER_THAN",
      "path": "updatedOn",
      "value": "2022-12-22 20:15:00"
    }
  ]
}
```

### **List of Vulnerabilities**

Fetch a list of known vulnerabilities matching certain filters or attributes.  
**Key:** `listVulnerabilitiesAction`

| **Input**                 | **Type**                    | **Required** | **Comments**                                  | **Example**                    |
|---------------------------|-----------------------------|--------------|-----------------------------------------------|--------------------------------|
| Connection                | connection                  | true         | Lansweeper authentication                      | —                              |
| Max Records               | number                      | true         | Max number of vulnerabilities to retrieve      | 10                             |
| Filter                    | GraphQL                     | optional     | Optional filter using conjunction and conditions| See example below              |
| Additional Vulnerability  | details string value list   | optional     | Additional CVE data fields to return           | Confidentiality, References    |

#### **Example Filter JSON**

```json
{
  "conjunction": "OR",
  "conditions": [
    {
      "operator": "EQUAL",
      "path": "baseScore",
      "value": "9"
    },
    {
      "operator": "GREATER_THAN",
      "path": "updatedOn",
      "value": "2022-12-22 20:15:00"
    }
  ]
}
```

#### **Allowed Vulnerability Path values**

- `cve`  
- `baseScore`  
- `severity`  
- `attackComplexity`  
- `attackVector`  
- `privilegeRequired`  
- `userInteraction`  
- `scope`  
- `integrity`  
- `confidentiality`  
- `availabilityImpact`  
- `riskScore`  
- `source`  
- `publishedOn`  
- `updatedOn`

#### **Allowed Operators**

- `EQUAL`  
- `NOT_EQUAL`  
- `GREATER_THAN`  
- `GREATER_THAN_OR_EQUAL`  
- `SMALLER_THAN`  
- `SMALLER_THAN_OR_EQUAL`  
- `EXISTS`  
- `LIKE`  
- `REGEXP`

### **Report Details**

Retrieve details from a specific Lansweeper report by ID in CSV format.  
**Key:** `getReportByIdAction`

| **Input**   | **Type**    | **Required** | **Comments**                                        | **Example**               |
|-------------|-------------|--------------|-----------------------------------------------------|---------------------------|
| Connection  | connection  | true         | Lansweeper connection                               | —                         |
| Report ID   | string      | true         | Report identifier (visible in report URL or API)    | 66t1b73399bdd7d9a1835dob  |

### **List of Authorized Reports**

Get all reports authorized for the connected Lansweeper site.  
**Key:** `listReportsAction`

| **Input**   | **Type**    | **Required** | **Comments**               | **Example** |
|-------------|-------------|--------------|----------------------------|-------------|
| Connection  | connection  | true         | Lansweeper authentication  | —           |

### **Get Software Details**

Retrieve metadata about a software product by name and (optionally) publisher.  
**Key:** `getSoftwareDetailsByNameAction`

| **Input**                 | **Type**                | **Required** | **Comments**                                                    | **Example**      |
|---------------------------|-------------------------|--------------|-----------------------------------------------------------------|------------------|
| Connection                | connection              | true         | Lansweeper authentication                                        | —                |
| Software Name             | string                  | true         | Name of the software to retrieve                                | AIX-rpm          |
| Publisher                 | string                  | optional     | Publisher of the software                                       | Microsoft        |
| Additional Software Details | string value list     | optional     | List of additional software-related fields to include            | Architectures, Editions, Languages, Install Type |

---

### **List of Software**

Retrieve a paginated list of software entries found in Lansweeper.  
**Key:** `listSoftwareAction`

| **Input**                | **Type**    | **Required** | **Comments**                                                                 | **Example** |
|--------------------------|-------------|--------------|------------------------------------------------------------------------------|-------------|
| Connection               | connection  | true         | Lansweeper authentication                                                    | —           |
| Max Records              | number      | true         | Maximum number of software records to return                                | 10          |
| Filter                   | GraphQL     | optional     | JSON-based filter on software attributes                                    | See below   |

#### **Example Filter JSON**

```json
{
  "fields": ["software"],
  "value": "win",
  "type": "LIKE"
}
```

#### **Allowed Software Filter Fields**

- `software`  
- `stateName`  
- `operatingSystems`  
- `publisher`  
- `versions`  
- `languages`  
- `editions`  
- `marketVersions`  
- `shortVersions`  
- `architectures`  
- `category`  
- `unspsc`  
- `type`  
- `installType`

#### **Allowed Operators**

- `LIKE`  
- `EQUAL`

### **List Software Present in Asset**

Get a list of software items installed on a specific asset.  
**Key:** `listSoftwaresPresentInAsset`

| **Input**   | **Type**    | **Required** | **Comments**                                              | **Example**                              |
|-------------|-------------|--------------|-----------------------------------------------------------|------------------------------------------|
| Connection  | connection  | true         | Lansweeper authentication                                 | —                                        |
| Asset Key   | string      | true         | Unique key of the asset to list its installed software    | 00031243-7800-3b08-a345-a79ce8cbb96e     |

## Known Behaviours

- If Lansweeper contains multiple custom fields with the same name, the **Edit Asset** action will update only the **first matching field**.  
  For example, if there are two custom fields named `test` — one of type `date` and another of type `currency` — only the first occurrence (usually the `date` field) will be updated.
- The **List Assets** action returns all assets that match your input. However, **Flow Builder can display a maximum of 250 entries** in the visual UI, even if more are retrieved.
- When attempting to fetch a large amount of data through Flow Builder actions, the underlying data will be retrieved correctly, but the UI may show a placeholder like  
  `&lt;data 123456 bytes&gt;` instead of raw content.
