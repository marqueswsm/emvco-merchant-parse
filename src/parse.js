const { stringToInt } = require('./helper/parseInt');
const {
  getTag,
  getLengh,
  getValue,
} = require('./helper/get');

function tagIsObject(tag) {
  if ((tag >= 2 && tag <= 51) || (tag >= 80 && tag <= 99) || tag === 62) {
    return true;
  }

  return false;
}

function ParseObject(qrcode) {
  let position = 0;
  let response;

  const qrcodeLength = qrcode.length;

  while (position < qrcodeLength) {
    const tagInfo = getTag(position, qrcode);
    const lengthInfo = getLengh(position, qrcode);
    const valueInfo = getValue(position, lengthInfo, qrcode);

    response = {
      [tagInfo]: valueInfo, ...response,
    };
    position += stringToInt(lengthInfo) + 4;
  }

  return response;
}

function Parse(qrcode) {
  let position = 0;
  let response;

  const qrcodeLength = qrcode.length;

  while (position < qrcodeLength) {
    const tagInfo = getTag(position, qrcode);
    const lengthInfo = getLengh(position, qrcode);
    let valueInfo = getValue(position, lengthInfo, qrcode);

    if (tagIsObject(tagInfo)) {
      valueInfo = ParseObject(valueInfo)
    };

    response = {
      [tagInfo]: valueInfo, ...response,
    };
    position += stringToInt(lengthInfo) + 4;
  }

  return response;
}

module.exports = {
  Parse,
};
