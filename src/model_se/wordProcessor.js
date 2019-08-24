import { getWordSE } from '../words';

export default (type, isSerious, isMean, tOrN) =>
    getWordSE({ type, serious: isSerious, mean: isMean })
        .then(word => formatTorN(!word ? '<insert word here>' : word.value ? word.value : '', tOrN));

export const formatTorN = (string, tOrN) => {
    string = string.replace(/%tn%/g, tOrN);

    if (tOrN === 't') {
        return string.replace(/%t%/g, 't').replace(/%tt%/g, 'tt').replace(/%ttn%/g, 'tt');;
    } else {
        return string.replace(/%t%/g, '').replace(/%tt%/g, '').replace(/%ttn%/g, 'n');
    }
};
