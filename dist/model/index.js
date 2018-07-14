'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wordProcessor = require('./wordProcessor.js');

var _wordProcessor2 = _interopRequireDefault(_wordProcessor);

var _types = require('../words/types.js');

var types = _interopRequireWildcard(_types);

var _stringUtils = require('../util/stringUtils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adjectives = [];

// generate

exports.default = function () {
    var flirt = (0, _stringUtils.upperCaseFirst)(genGreeting());
    var compliment = genCompliment();
    var question = genQuestion();

    if (Math.random() > 0.5) {
        flirt += ', ';
        flirt = flirt.replace('<?,>', '');
    } else {
        flirt += endSentence(0.2);
        flirt = flirt.replace('<?,>', ',');
        compliment = (0, _stringUtils.upperCaseFirst)(compliment);
    }

    flirt += compliment;
    flirt += endSentence(0.5);
    flirt += (0, _stringUtils.upperCaseFirst)(question);

    return flirt;
};

var genGreeting = function genGreeting() {
    var greeting = (0, _wordProcessor2.default)(types.GREETINGS);

    // Add description
    if (Math.random() > 0.5) {
        greeting += '<?,> you';

        if (Math.random() > 0.5) {
            greeting += ' ' + (0, _wordProcessor2.default)(types.ADJECTIVES);
        }

        greeting += ' ' + (0, _wordProcessor2.default)(types.SUBSTANTIVES);
    }

    return greeting;
};

var genCompliment = function genCompliment() {
    var compliment = 'what a ' + (0, _wordProcessor2.default)(types.ADJECTIVES) + ' ' + (0, _wordProcessor2.default)(types.COMPLIMENT_SUBSTANTIVES);

    if (Math.random() > 0.5) {
        compliment += ' you got there';
    } else {
        compliment += ' you have';
    }

    return compliment;
};

var genQuestion = function genQuestion() {
    var question = (0, _wordProcessor2.default)(types.REQUESTS) + ' ' + (0, _wordProcessor2.default)(types.VERBS) + ' ' + (0, _wordProcessor2.default)(types.TEMPORALS) + '?';

    return question;
};

var endSentence = function endSentence(dotProbability) {
    if (Math.random() >= dotProbability) {
        return '. ';
    }

    return '! ';
};