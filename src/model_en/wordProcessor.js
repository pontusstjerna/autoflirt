import * as words from '../words/en/index';

import { getRandomInt } from '../util';

export default (type, isSerious) => words[type][getRandomInt(words[type].length - 1)]
