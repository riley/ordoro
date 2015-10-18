var request = require('request');
var path = require('path');
var _ = require('lodash');
var Promise = require('bluebird');
var Qs = require('qs');

var utils = require('./utils');

var hasOwn = {}.hasOwnProperty;

function OrdoroResource(ordoro, urlData) {
    this._ordoro = ordoro;
}

OrdoroResource.extend = utils.protoExtend;

OrdoroResource.prototype = {

    _request: function (method, path, options, cb) {

        // optional options param
        if (_.isFunction(options)) {
            cb = options;
        }

        var buffer = new Buffer(this._ordoro.auth.email + ':' + this._ordoro.auth.password).toString('base64');
        console.log(buffer);
        var headers = {
            'Authorization': 'Basic ' + buffer
        };

        var config = {
            uri: 'https://api.ordoro.com/' + path,
            method: method,
            headers: headers,
            json: true
        };

        if (method.toUpperCase() !== 'GET' && !_.isEmpty(options)) {
            config.body = options;
        }

        if (method.toUpperCase() === 'GET' && !_.isEmpty(options)) {
            config.uri += '?' + Qs.stringify(options);
        }

        console.log(config.uri);

        request(config, function (err, response, body) {
            if (err) return cb(err);

            cb(null, body);
        });
    }
};

_.bindAll(OrdoroResource);

module.exports = OrdoroResource;
