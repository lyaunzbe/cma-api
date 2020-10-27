const standard = require('@neutrinojs/standardjs');
const node = require('@neutrinojs/node');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard(),
    node(),
    jest(),
  ],
};
