'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wordsSE = exports.generateSE = exports.generateEN = undefined;

var _model_en = require('./model_en');

var _model_en2 = _interopRequireDefault(_model_en);

var _model_se = require('./model_se');

var _model_se2 = _interopRequireDefault(_model_se);

var _se = require('./words/se');

var allWordsSE = _interopRequireWildcard(_se);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateEN = exports.generateEN = function generateEN() {
    return (0, _model_en2.default)();
};

var generateSE = exports.generateSE = function generateSE(isSerious, isMean) {
    return (0, _model_se2.default)(isSerious, isMean);
};

var wordsSE = exports.wordsSE = function wordsSE() {
    return Object.keys(allWordsSE).map(function (wordType) {
        return allWordsSE[wordType];
    }).map(function (words) {
        return words.serious.length + words.mean.length + words.weird.length;
    }).reduce(function (prev, curr) {
        return prev * curr;
    });
};

/*setInterval(() => { 
    console.log(generateSE(false, true));   
}, 20);*/

// generate().then(line => {    
//     console.log('*********PICK UP LINE************\n');
//     console.log(line);
//     console.log('\n*********************************');
// });