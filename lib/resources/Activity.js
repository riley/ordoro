'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

  list: function (options) {
    return this._request('GET', 'activity/', options);
  },

  counts: function () {
    return this._request('GET', 'activity/counts/');
  },

  markAllRead: function (options) {
    return this._request('PUT', 'activity/mark_all_read/');
  }
})
