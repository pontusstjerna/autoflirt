import * as types from '../words/types.js';
import word, { formatTorN } from './wordProcessor.js';

import { getRandomInt, getRandomBoolean } from '../util';
import { upperCaseFirst } from '../util/stringUtils';

let adjectives = [];

// generate
export default async (serious, mean) => {

    let greeting = await word(types.GREETINGS, serious, mean);
    let compliment = await word(types.COMPLIMENTS, serious, mean);
    let doYouMind = await word(types.DO_YOU_MIND, serious, mean);
    let verb = await word(types.VERBS, serious, mean);
    let preposition = await word(types.PREPOSITIONS, serious, mean);
    let commaDotOrExclamationMark = Math.random() < 0.3 ? ',' : (getRandomBoolean() ? '!' : '.');
    let complimentSubstantive = await word(types.COMPLIMENT_SUBSTANTIVES, serious, mean);

    let substantive = await word(types.COMPLIMENT_SUBSTANTIVES, serious, mean);
    let tOrN = substantive.startsWith('<en>') ? 'n' : 't';
    substantive = substantive.replace(/<.*>/g, '');

    let relativePronoun = await word(types.RELATIVE_PRONOUNS, serious, mean, tOrN);
    let adjective = await word(types.ADJECTIVES, serious, mean, tOrN);

    let flirt =
        `${upperCaseFirst(greeting)} ${compliment}${commaDotOrExclamationMark}` +
        ` ${commaDotOrExclamationMark === ',' ? relativePronoun : upperCaseFirst(relativePronoun)} ${adjective}` +
        ` ${substantive} du har${getRandomBoolean() ? ' där' : ''}. ${upperCaseFirst(doYouMind)}` +
        ` ${mineOrI(complimentSubstantive)} ${verb}` +
        ` ${preposition} de${tOrN}?`;

    return flirt;
}

const mineOrI = (substantive) => {
    if (Math.random() < 0.2) {
        substantive = substantive.replace(/<.*>/g, '');
        return formatTorN('mi%ttn%') + ' ' + substantive;
    } else {
        return getRandomBoolean() ? 'jag' : 'vi';
    }
};
