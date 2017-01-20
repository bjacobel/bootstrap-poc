const autoprefixer = require('autoprefixer');
const rtl = require('postcss-rtl');

module.exports = {
  plugins: [
    rtl,
    autoprefixer,
  ],
};
