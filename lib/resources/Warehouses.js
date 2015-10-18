'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

    list: function (cb) {
        this._request('GET', 'warehouse/', {}, cb);
    },

    create: function (options, cb) {
        this._request('POST', 'warehouse/', options, cb);
    }
});
