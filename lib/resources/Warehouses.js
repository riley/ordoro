'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

  list: function (cb) {
    return this._request('GET', 'warehouse/', {});
  },

  create: function (options, cb) {
    return this._request('POST', 'warehouse/', options);
  }
});
