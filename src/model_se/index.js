import * as types from '../words/types.js';
import word from './wordProcessor.js';

import { getRandomInt, getRandomBoolean } from '../util';
import { upperCaseFirst } from '../util/stringUtils';

let adjectives = [];

// generate
export default () => {
    
    let commaDotOrExclamationMark = Math.random() < 0.3 ? ',' : (getRandomBoolean() ? '!' : '.');

    let flirt = `${upperCaseFirst(word(types.GREETINGS))} ${word(types.COMPLIMENTS)}${commaDotOrExclamationMark}`

    return flirt;
}