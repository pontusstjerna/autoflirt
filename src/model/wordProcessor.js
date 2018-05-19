import parse from '../util/parser.js';
import * as types from '../words/types.js';

import { getRandomInt, getRandomBoolean } from '../util';

let words = {};

export default (type, isSerious) => {
    return words[type][getRandomInt(words[type].length - 1)];
}

export const setup = (isSerious) => {
    return Promise.all(Object.keys(types).map(type => 
        parse(types[type], isSerious).then(parsed =>
            words[types[type]] = parsed
        )));
}