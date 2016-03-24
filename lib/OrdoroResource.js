var fetch = require('node-fetch');
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

    _request: function (method, path, options) {

        var buffer = new Buffer(this._ordoro.auth.email + ':' + this._ordoro.auth.password).toString('base64');
        var headers = {
            'Authorization': 'Basic ' + buffer
        };

        if (!options) options = {};

        var config = {
            method: method,
            headers: headers
        };

        if (method.toUpperCase() !== 'GET' && !_.isEmpty(options)) {
            config.body = options;
        }

        if (method.toUpperCase() === 'GET' && !_.isEmpty(options)) {
            config.uri += '?' + Qs.stringify(options);
        }

        // console.log(config.uri);

        return fetch('https://api.ordoro.com/' + path, config)
          .then(res => res.json())
          .then(json => {
            if (_.has(json, 'error_message')) {
              throw new Error(json.error_message);
            }

            return json;
          });
    }
};

_.bindAll(OrdoroResource);

module.exports = OrdoroResource;
