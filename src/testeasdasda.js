const { Parse } = require('./index');

const qrcode = '010210520220';

const response = Parse(qrcode);

console.log(response);
