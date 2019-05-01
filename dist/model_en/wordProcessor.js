'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _words = require('../words');

var words = _interopRequireWildcard(_words);

var _util = require('../util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (type, isSerious) {
    return words[type][(0, _util.getRandomInt)(words[type].length - 1)];
};