import * as dict from '../words/se';

import { getRandomInt, getRandomBoolean } from '../util';

export default (type, isSerious, isMean) => {
    let words = dict[type].serious;

    if (!isSerious) {
        words.concat(dict[type].weird);
    }

    if (isMean) {
        words.concat(dict[type].mean);
    }

    return words[getRandomInt(words.length - 1)];
}