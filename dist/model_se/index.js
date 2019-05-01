'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _types = require('../words/types.js');

var types = _interopRequireWildcard(_types);

var _wordProcessor = require('./wordProcessor.js');

var _wordProcessor2 = _interopRequireDefault(_wordProcessor);

var _util = require('../util');

var _stringUtils = require('../util/stringUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var adjectives = [];

// generate

exports.default = function (serious, mean) {

    var commaDotOrExclamationMark = Math.random() < 0.3 ? ',' : (0, _util.getRandomBoolean)() ? '!' : '.';

    var substantive = (0, _wordProcessor2.default)(types.COMPLIMENT_SUBSTANTIVES, serious, mean);
    var tOrN = substantive.startsWith('<en>') ? 'n' : 't';
    substantive = substantive.replace(/<.*>/g, '');

    var relativePronoun = (0, _wordProcessor2.default)(types.RELATIVE_PRONOUNS, serious, mean, tOrN);
    var adjective = (0, _wordProcessor2.default)(types.ADJECTIVES, serious, mean, tOrN);

    var flirt = (0, _stringUtils.upperCaseFirst)((0, _wordProcessor2.default)(types.GREETINGS, serious, mean)) + ' ' + (0, _wordProcessor2.default)(types.COMPLIMENTS, serious, mean) + commaDotOrExclamationMark + (' ' + (commaDotOrExclamationMark === ',' ? relativePronoun : (0, _stringUtils.upperCaseFirst)(relativePronoun)) + ' ' + adjective) + (' ' + substantive + ' du har' + ((0, _util.getRandomBoolean)() ? ' där' : '') + '. ' + (0, _stringUtils.upperCaseFirst)((0, _wordProcessor2.default)(types.DO_YOU_MIND, serious, mean))) + (' ' + mineOrI((0, _wordProcessor2.default)(types.COMPLIMENT_SUBSTANTIVES, serious, mean)) + ' ' + (0, _wordProcessor2.default)(types.VERBS, serious, mean)) + (' ' + (0, _wordProcessor2.default)(types.PREPOSITIONS, serious, mean) + ' de' + tOrN + '?');

    return flirt;
};

var mineOrI = function mineOrI(substantive) {
    if (Math.random() < 0.2) {
        var tOrN = substantive.startsWith('<en>') ? 'n' : 't';
        substantive = substantive.replace(/<.*>/g, '');

        return (0, _wordProcessor.formatTorN)('mi%ttn%') + ' ' + substantive;
    } else {
        return (0, _util.getRandomBoolean)() ? 'jag' : 'vi';
    }
};