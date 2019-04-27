'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateSE = exports.generateEN = undefined;

var _model_en = require('./model_en');

var _model_en2 = _interopRequireDefault(_model_en);

var _model_se = require('./model_se');

var _model_se2 = _interopRequireDefault(_model_se);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateEN = exports.generateEN = function generateEN() {
    return (0, _model_en2.default)();
};

var generateSE = exports.generateSE = function generateSE(isSerious, isMean) {
    return (0, _model_se2.default)(isSerious, isMean);
};

setInterval(function () {
    console.log(generateSE(false, true));
}, 2000);

// generate().then(line => {    
//     console.log('*********PICK UP LINE************\n');
//     console.log(line);
//     console.log('\n*********************************');
// });