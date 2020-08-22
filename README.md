# EMVCo-parser

It is an npm package developed to allow you to parse EMVCo Merchant Presented QRCodes. If you want to learn more about EMVCo, take a look at [here](https://www.emvco.com/emv-technologies/qrcodes/). The package was developed based on version 1.6 of the EMVCo documentation.

## How to install
It is provided as an npm package:

```bash
npm install emvco-merchant-parser
```

## How to import
You can import this package using CommonJs:
```js
const Emvco = require('emvco-merchant-parser');
```

Or using ES6:
```js
import * as Emvco from 'emvco-merchant-parser';
```

## How to use
You can call the function parse with a qrcode as a parameter:

```js
const emvco = require('emvco-merchant-parser');

const qrcode = ''
const parsedQrcode = Emvco.parse(qrcode);
```
