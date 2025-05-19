---
title: JSON Forms Connector
sidebar_label: JSON Forms
description: Create powerful custom forms for the configuration wizard
---

![JSON Forms](./assets/jsonforms.png#connector-icon)
Create powerful custom forms for the configuration wizard

## Data Sources

### Generic JSON Form

Generate a form for the configuration wizard using JSON schema

| Input        | Comments                                                                                                                                                         | Default                                                                                                                                                                                                                                                                                                                                 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JSON Schema  | The data/JSON schema defines the underlying data to be shown in the UI (objects, properties, and their types). See https://jsonforms.io/docs                     | <code>{<br /> "type": "object",<br /> "properties": {<br /> "name": {<br /> "type": "string",<br /> "minLength": 3,<br /> "description": "Please enter your name"<br /> },<br /> "age": {<br /> "type": "integer",<br /> "description": "Please enter your age",<br /> "minimum": 0,<br /> "maximum": 150<br /> }<br /> }<br />}</code> |
| UI Schema    | The UI schema defines how this data is rendered as a form, e.g. the order of controls, their visibility, and the layout. See https://jsonforms.io/docs/uischema/ | <code>{<br /> "type": "VerticalLayout",<br /> "elements": [<br /> {<br /> "type": "Control",<br /> "scope": "#/properties/name"<br /> },<br /> {<br /> "type": "Control",<br /> "scope": "#/properties/age"<br /> }<br /> ]<br />}</code>                                                                                               |
| Default Data | The default data for the form                                                                                                                                    | <code>{<br /> "name": "Bob",<br /> "age": 10<br />}</code>                                                                                                                                                                                                                                                                              |
