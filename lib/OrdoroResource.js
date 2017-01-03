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

        var uri = 'https://api.ordoro.com/' + path;
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
            config.body = JSON.stringify(options);
            config.headers['Content-Type'] = 'application/json';
        }

        if (method.toUpperCase() === 'GET' && !_.isEmpty(options)) {
            uri += '?' + Qs.stringify(options);
        }

        // console.log('uri', uri);

        return fetch(uri, config)
          .then(res => res.json())
          .then(json => {
            if (_.has(json, 'error_message')) {
              var message = json.error_message;
              if (json.param) message += ' ' + json.parem;
              throw new Error(message);
            }

            return json;
          });
    }
};

_.bindAll(OrdoroResource);

module.exports = OrdoroResource;
