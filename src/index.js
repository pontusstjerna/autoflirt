import _generateEN from './model_en';
import _generateSE from './model_se';

export const generateEN = () => {
    return _generateEN();
}

export const generateSE = (isSerious, isMean) => {
    return _generateSE(isSerious, isMean);
}

setInterval(() => { 
    console.log(generateSE(false, true));   
}, 2000);

// generate().then(line => {    
//     console.log('*********PICK UP LINE************\n');
//     console.log(line);
//     console.log('\n*********************************');
// });