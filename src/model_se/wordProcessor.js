import * as dict from '../words/se';

import { getRandomInt, getRandomBoolean } from '../util';

export default (type, isSerious, isMean, tOrN) => {
    let words = dict[type].serious;

    if (!isSerious) {
        words = words.concat(dict[type].weird);
    }

    if (isMean) {
        words = words.concat(dict[type].mean);
    }

    return formatTorN(words[getRandomInt(words.length - 1)], tOrN);
}

export const formatTorN = (string, tOrN) => {
    string = string.replace(/%tn%/g, tOrN);

    if (tOrN === 't') {
        return string.replace(/%t%/g, 't').replace(/%tt%/g, 'tt').replace(/%ttn%/g, 'tt');;
    } else {
        return string.replace(/%t%/g, '').replace(/%tt%/g, '').replace(/%ttn%/g, 'n');
    }
}