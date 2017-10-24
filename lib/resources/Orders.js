'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

  list: function (options) {
    return this._request('GET', 'order/', options);
  },

  create: function (options) {
    return this._request('POST', 'order/', options);
  },

  find: function (id) {
    return this._request('GET', 'order/' + id + '/', {});
  },

  counts: function () {
    return this._request('GET', 'order/counts/');
  }
});
