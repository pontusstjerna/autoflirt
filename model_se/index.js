import * as types from '../words/types.js';
import word from './wordProcessor.js';

import { upperCaseFirst } from '../util/stringUtils';

let adjectives = [];

// generate
export default () => {
    let flirt = genGreeting();

    return flirt;
}

const genGreeting = () => {
    return upperCaseFirst(word(types.GREETINGS));
}