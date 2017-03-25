'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var stubbable = function stubbable(target, property, descriptor) {
  function facade() {
    if (typeof target !== 'function') {
      throw new Error('Can only stub functions or classes');
    }

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (this instanceof facade) {
      if (facade.stub) {
        // eslint-disable-next-line new-cap
        return new (Function.prototype.bind.apply(facade.stub, [null].concat(args)))();
      } else {
        // eslint-disable-next-line new-cap
        return new (Function.prototype.bind.apply(target, [null].concat(args)))();
      }
    } else {
      if (facade.stub) {
        return facade.stub.apply(facade, args);
      } else {
        return target.apply(undefined, args);
      }
    }
  }

  facade.stub = target;
  facade.original = target;

  return facade;
};

exports.default = stubbable;