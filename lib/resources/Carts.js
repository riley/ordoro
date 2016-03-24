'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

  list: function (options) {
    return this._request('GET', 'cart/', {});
  },

  create: function (options) {
    return this._request('POST', 'cart/', options);
  }
});
