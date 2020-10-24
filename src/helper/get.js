const { stringToInt } = require('./parseInt');

function getTag(positition, emv) {
  const start = positition;
  const end = positition + 2;

  return emv.slice(start, end);
}

function getLengh(position, emv) {
  const start = position + 2;
  const end = position + 4;

  return emv.slice(start, end);
}

function getValue(position, lenght, emv) {
  const start = position + 4;
  const end = stringToInt(lenght) + (position + 4)

  return emv.slice(start, end);
}

module.exports = {
  getTag,
  getLengh,
  getValue,
};
