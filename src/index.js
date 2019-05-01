import _generateEN from './model_en';
import _generateSE from './model_se';
import * as allWordsSE from './words/se';

export const generateEN = () => {
    return _generateEN();
}

export const generateSE = (isSerious, isMean) => {
    return _generateSE(isSerious, isMean);
}

export const wordsSE = () => {
    return Object.keys(allWordsSE)
        .map(wordType => allWordsSE[wordType])
        .map(words => words.serious.length + words.mean.length + words.weird.length)
        .reduce((prev, curr) => prev * curr);
}

/*setInterval(() => { 
    console.log(generateSE(false, true));   
}, 20);*/

// generate().then(line => {    
//     console.log('*********PICK UP LINE************\n');
//     console.log(line);
//     console.log('\n*********************************');
// });