'use strict';

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
    return (0, _model2.default)();
};

setInterval(function () {
    console.log((0, _model2.default)());
}, 5000);