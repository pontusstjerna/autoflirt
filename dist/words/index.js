'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _adjectives = require('./adjectives.json');

Object.defineProperty(exports, 'adjectives', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_adjectives).default;
  }
});

var _compliment_substantives = require('./compliment_substantives.json');

Object.defineProperty(exports, 'compliment_substantives', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_compliment_substantives).default;
  }
});

var _greetings = require('./greetings.json');

Object.defineProperty(exports, 'greetings', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_greetings).default;
  }
});

var _requests = require('./requests.json');

Object.defineProperty(exports, 'requests', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_requests).default;
  }
});

var _substantives = require('./substantives.json');

Object.defineProperty(exports, 'substantives', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_substantives).default;
  }
});

var _temporals = require('./temporals.json');

Object.defineProperty(exports, 'temporals', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_temporals).default;
  }
});

var _verbs = require('./verbs.json');

Object.defineProperty(exports, 'verbs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_verbs).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }