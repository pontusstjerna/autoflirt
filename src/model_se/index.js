import * as types from '../words/types.js';
import word from './wordProcessor.js';

import { getRandomInt, getRandomBoolean } from '../util';
import { upperCaseFirst } from '../util/stringUtils';

let adjectives = [];

// generate
export default (serious, mean) => {
    
    let commaDotOrExclamationMark = Math.random() < 0.3 ? ',' : (getRandomBoolean() ? '!' : '.');
    
    let substantive = word(types.COMPLIMENT_SUBSTANTIVES, serious, mean);
    let tOrN = substantive.startsWith('<en>') ? 'n' : 't';
    substantive = substantive.replace(/<.*>/g, '');

    let relativePronoun = word(types.RELATIVE_PRONOUNS, serious, mean, tOrN);
    let adjective = word(types.ADJECTIVES, serious, mean, tOrN);

    let flirt = 
        `${upperCaseFirst(word(types.GREETINGS, serious, mean))} ${word(types.COMPLIMENTS, serious, mean)}${commaDotOrExclamationMark}` + 
        ` ${commaDotOrExclamationMark === ',' ? relativePronoun : upperCaseFirst(relativePronoun)} ${adjective}` + 
        ` ${substantive} du har ${getRandomBoolean() ? 'där' : ''}. `;

    return flirt;
}
