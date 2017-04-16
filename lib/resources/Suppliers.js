var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

  list: function (options) {
    return this._request('GET', 'supplier/', options);
  },

  create: function (options) {
    return this._request('POST', 'supplier/', options);
  },

  find: function (id) {
    return this._request('GET', 'supplier/' + id + '/', {});
  },

  update: function (id, options) {
    return this._request('PUT', 'supplier/' + id + '/', options);
  }
})
