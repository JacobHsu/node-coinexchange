const axios = require('axios');

const api = 'http://49.234.13.106:8801/market/symbol-thumb';

function symbolThumb(module_callback) {
  axios
    .post(api, {})
    .then(function (response) {
      module_callback(response.data);
    })
    .catch(function (error) {
      module_callback(error);
    });
}

module.exports = symbolThumb;
