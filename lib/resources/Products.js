'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

  list: function (options) {
    return this._request('GET', 'product/', options);
  },

  counts: function (options) {
    return this._request('GET', 'product/counts/', options);
  },

  create: function (options) {
    return this._request('POST', 'product/', options);
  },

  /* lookup by sku */
  find: function (sku) {
    return this._request('GET', 'product/' + sku + '/', {});
  },

  // there's probably a way to pass the # of days to check,
  // but the ordoro docs don't specify that
  nDaySales: function (sku) {
    if (sku) {
      return this._request('GET', 'product/' + sku + '/n_day_sales');
    } else {
      return this._request('GET', 'product/n_day_sales/');
    }
  },

  inventoryGraph: function (sku) {
    if (sku) {
      return this._request('GET', 'product/' + sku + '/inventory_graph');
    } else {
      return this._request('GET', 'product/inventory_graph');
    }
  }

});
