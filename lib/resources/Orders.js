'use strict';

var OrdoroResource = require('../OrdoroResource');

module.exports = OrdoroResource.extend({

    list: function (options, cb) {
        this._request('GET', '/order/', options, cb);
    },

    create: function (options, cb) {
        this._request('POST', '/order/', options, cb);
    },

    find: function (id, cb) {
        this._request('GET', '/order/' + id + '/', {}, cb);
    }
});
