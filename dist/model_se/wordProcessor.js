'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.formatTorN = undefined;

var _se = require('../words/se');

var dict = _interopRequireWildcard(_se);

var _util = require('../util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (type, isSerious, isMean, tOrN) {
    var words = dict[type].serious;

    if (!isSerious) {
        words = words.concat(dict[type].weird);
    }

    if (isMean) {
        words = words.concat(dict[type].mean);
    }

    return formatTorN(words[(0, _util.getRandomInt)(words.length - 1)], tOrN);
};

var formatTorN = exports.formatTorN = function formatTorN(string, tOrN) {
    string = string.replace(/%tn%/g, tOrN);

    if (tOrN === 't') {
        return string.replace(/%t%/g, 't').replace(/%tt%/g, 'tt').replace(/%ttn%/g, 'tt');;
    } else {
        return string.replace(/%t%/g, '').replace(/%tt%/g, '').replace(/%ttn%/g, 'n');
    }
};