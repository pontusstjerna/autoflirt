import fetch from 'node-fetch';
import * as types from '../words/types.js';
import word, { formatTorN } from './wordProcessor.js';

import { getRandomInt, getRandomBoolean } from '../util';
import { upperCaseFirst } from '../util/stringUtils';

const foretagsnamngeneratorAPI = "https://www.foretagsnamngenerator.se/api/v1/";

// generate
export default async (serious, mean, useBusiness) => {

    let options = {
        greeting: await word(types.GREETINGS, serious, mean),
        compliment: await word(types.COMPLIMENTS, serious, mean),
        doYouMind: await word(types.DO_YOU_MIND, serious, mean),
        verb: await word(types.VERBS, serious, mean),
        preposition: await word(types.PREPOSITIONS, serious, mean),
        commaDotOrExclamationMark: Math.random() < 0.3 ? ',' : (getRandomBoolean() ? '!' : '.'),
        complimentSubstantive: await word(types.COMPLIMENT_SUBSTANTIVES, serious, mean),
        substantive: await word(types.COMPLIMENT_SUBSTANTIVES, serious, mean),
        businessName: useBusiness ? await getBusiness() : null,
    };


    options.tOrN = options.substantive.startsWith('<en>') ? 'n' : 't';
    options.substantive = options.substantive.replace(/<.*>/g, '');

    options.relativePronoun = await word(types.RELATIVE_PRONOUNS, serious, mean, options.tOrN);
    options.adjective = await word(types.ADJECTIVES, serious, mean, options.tOrN);

    if (useBusiness) {
        options.iWorkAtPartLocation = ['start', 'statement', 'place'][Math.floor(Math.random() * 3)];
    }

    //const iWorkAt = useBusiness ? `jag ${getRandomBoolean() ? 'kommer från' : 'jobbar på'} ${businessName}` : '';
    //const firstIWorkAt = !!iWorkAt && `, ${iWorkAt}`;
    //const skipCompliment = iWorkAt && getRandomBoolean();
    options.place = options.iWorkAtPartLocation === 'place' ? options.businessName : `de${options.tOrN}`;

    return generate(options);
}

const generate = options => {
    const {
        greeting,
        compliment,
        commaDotOrExclamationMark,
        relativePronoun,
        adjective,
        substantive,
        doYouMind,
        complimentSubstantive,
        verb,
        preposition,
        place
    } = options;

    return createFirstPart(options) +
    ` ${createStatementPart(options)} ${upperCaseFirst(doYouMind)}` +
    ` ${mineOrI(complimentSubstantive)} ${verb}` +
    `${createPlacePart(options)}?`;
};

const mineOrI = (substantive) => {
    if (Math.random() < 0.2) {
        substantive = substantive.replace(/<.*>/g, '');
        return formatTorN('mi%ttn%') + ' ' + substantive;
    } else {
        return getRandomBoolean() ? 'jag' : 'vi';
    }
};

const createStatementPart = options => {
    const upperCase = options.commaDotOrExclamationMark !== ',';
    if (options.iWorkAtPartLocation === 'statement') {
        const iWorkAt = createIWorkAt(options);
        return `${upperCase ? upperCaseFirst(iWorkAt) : iWorkAt}.`
    } else {
        return createComplimentPart(options);
    }
};

const createPlacePart = ({ preposition, place, iWorkAtPartLocation }) =>
    iWorkAtPartLocation === 'statement' ? '' : ` ${preposition} ${place}`;

const createFirstPart = options => {
    const { greeting, compliment, commaDotOrExclamationMark, iWorkAtPartLocation } = options;
    return `${upperCaseFirst(greeting)}${getRandomBoolean() ? ' ' + compliment : ''}` +
        (iWorkAtPartLocation === 'start' ? ', ' + createIWorkAt(options) : '') +
        `${commaDotOrExclamationMark}`;
};

const createIWorkAt = ({ businessName }) =>
    `${getRandomBoolean() ? 'jag jobbar på' : 'jag kommer från'} ${businessName}`;

const createComplimentPart = ({ commaDotOrExclamationMark, relativePronoun, adjective, substantive }) =>
    `${commaDotOrExclamationMark === ',' ? relativePronoun : upperCaseFirst(relativePronoun)} ${adjective}` +
    ` ${substantive} du har${getRandomBoolean() ? ' där' : ''}.`;

const getBusiness = async () => fetch(foretagsnamngeneratorAPI)
        .then(result => {
            if (result.ok) {
                return result.text();
            }
        });