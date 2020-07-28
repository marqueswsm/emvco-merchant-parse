function buildSubTLV(tagValue) {
  let index = 0;
  let response;

  while (index < tagValue.length) {
    const tag = tagValue.slice(index, index + 2);
    const length = tagValue.slice(index + 2, index + 4);
    const value = tagValue.slice(index + 4, parseInt(length, 10) + (index + 4));

    response = { [tag]: value, ...response };
    index += parseInt(length, 10) + 4;
  }

  return response;
}

function valueIsObject(tag) {
  if ((tag >= 2 && tag <= 51) || (tag >= 80 && tag <= 99) || tag === 62) return true;
  return false;
}

function buildTLV(qrcode) {
  const qrcodeLength = qrcode.length;
  let response;

  let index = 0;
  while (index < qrcodeLength) {
    const tag = qrcode.slice(index, index + 2);
    const length = qrcode.slice(index + 2, index + 4);
    let value = qrcode.slice(index + 4, parseInt(length, 10) + (index + 4));

    if (valueIsObject(parseInt(tag, 10))) {
      value = buildSubTLV(value);
    }

    response = { [tag]: value, ...response };
    index += parseInt(length, 10) + 4;
  }

  return response;
}

function Parse(qrcode) {
  return buildTLV(qrcode);
}

module.exports = {
  Parse,
};
