# EMVCo-parser

It is an npm package developed to allow you to parse EMVCo Merchant Presented QRCodes. If you want to learn more about EMVCo, take a look at [here](https://www.emvco.com/emv-technologies/qrcodes/). The package was developed based on version 1.0 of the EMVCo documentation.

## How to install
It is provided as an npm package:

```bash
npm install emvco-merchant-parse
```

## How to import
You can import this package using CommonJs:

```js
const { EMVCO } = require('emvco-merchant-parse');
```

Or using ES6:

```js
import { EMVCO } from 'emvco-merchant-parse';
```

## How to use
You can call the function parse with a qrcode as a parameter:

```js
const { Parse } = require('emvco-merchant-parse');

const qrcode = '00020101021226160012com.merchant52040123540518.765802BR5909Pet Store6012Porto Alegre610991530-0208008000212';

const parsedQrcode = Parse(qrcode);
```

The response will be provided as an object:

```
{
  '26': { 
    '00': 'com.merchant',
  },
  '52': '0123',
  '54': '18.76',
  '58': 'BR',
  '59': 'Pet Store',
  '60': 'Porto Alegre',
  '61': '91530-020',
  '80': {
    '00': '12',
  },
  '01': '12',
  '00': '01'
}
```