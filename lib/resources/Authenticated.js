'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({
  isAuthenticated: function () {
    return this._request('GET', 'authenticated/');
  }
});
