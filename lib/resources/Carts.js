'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

    list: function (options, cb) {
        this._request('GET', '/cart/', {}, cb);
    },

    create: function (options, cb) {
        this._request('POST', '/cart/', options, cb);
    }
});
