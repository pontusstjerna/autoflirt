import * as words from '../words/se';
import test from '../words/se/greetings.json';

import { getRandomInt, getRandomBoolean } from '../util';

export default (type, isSerious, isMean) => {
    let words = test.serious;

    if (!isSerious) {
        words.concat(test.weird);
    }

    if (isMean) {
        words.concat(test.mean);
    }

    return words[getRandomInt(words.length - 1)];
}