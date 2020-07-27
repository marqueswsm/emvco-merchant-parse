function buildTLV() {

};

const Parse = (qrcode) => {
  const qrcodeLength = qrcode.length;
  let index = 0;
  let response;

  while (index < qrcodeLength) {
    const tag = qrcode.slice(index, index + 2);
    const length = qrcode.slice(index + 2, index + 4);
    const value = qrcode.slice(index + 4, index + 4 + parseInt(length));
    
    response = Object.assign({
      [tag]: value,
    }, response);
    index += parseInt(length) + 4;
  }

  console.log(response);
};

module.exports = {
  Parse,
}

Parse('0002010102122603666500512345');