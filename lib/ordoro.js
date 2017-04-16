'use strict';

var resources = {
  Activity: require('./resources/Activity'),
  Authenticated: require('./resources/Authenticated'),
  Orders: require('./resources/Orders'),
  Carts: require('./resources/Carts'),
  Products: require('./resources/Products'),
  Warehouses: require('./resources/Warehouses'),
  Suppliers: require('./resources/Suppliers'),
};

Ordoro.OrdoroResource = require('./OrdoroResource');
Ordoro.resources = resources;

function Ordoro(email, password) {
  if (!(this instanceof Ordoro)) {
    return new Ordoro(email, password);
  }

  this.auth = {email: email, password: password};

  this._prepResources();
}

Ordoro.prototype = {
  _prepResources: function () {
    for (var name in resources) {
      this[name.toLowerCase()] = new resources[name](this);
    }
  }
};

module.exports = Ordoro;
