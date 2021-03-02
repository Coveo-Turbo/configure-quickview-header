# ConfigureQuickviewHeader

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/configure-quickview-header
```

2. Use the Component or extend it

Typescript:

```javascript
import * as ConfigureQuickviewHeader from '@coveops/configure-quickview-header';
```

Javascript

```javascript
const ConfigureQuickviewHeader = require('@coveops/configure-quickview-header');
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * as ConfigureQuickviewHeader from '@coveops/configure-quickview-header'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/configure-quickview-header@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Add the following execution to your code once the page has initialized:

```javascript
<script>
    Coveo.ConfigureQuickviewHeader({})        
</script>
```

## Options

| Argument              | Type     | Default                                      | Purpose                                                                                                                                       |   |
|-----------------------|----------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|---|
| className             | String   | undefined                                    | Inject a css class at the top level of the modal                                                                                              |   |
| generateCustomContent | function | (result, options, headerOptions => undefined | Passes all the information the QuickviewHeader receives, including the options specified here to a custom function to handle custom rendering |   |
| icon                  | String   | undefined                                    | Specify an icon css class to pass to the Icon                                                                                                 |   |
| iconClass             | String   | Icon                                         | Override the component used to handle the Icon used as the title                                                                              |   |
| iconOption            | Object   | {}                                           | A configuration object that follows the specifications of the component specified in iconClass                                                |   |
| resultLinkClass       | String   | ResultLink\|SalesforceResultLink             | Override the component used to handle the ResultLink used as the title                                                                        |   |
| resultLinkOptions     | Object   | {alwaysOpenInNewWindow: true}                | A configuration object that follows the specifications of the component specified in resultLinkClass                                          |   |

## Extending

Extending the component can be done as follows:

```javascript
import { ConfigureQuickviewHeader, IConfigureQuickviewHeaderOptions } from "@coveops/configure-quickview-header";

export interface IExtendedConfigureQuickviewHeaderOptions extends IConfigureQuickviewHeaderOptions {}

export class ExtendedConfigureQuickviewHeader extends ConfigureQuickviewHeader {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`