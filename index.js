import _generateEN from './model_en';
import _generateSE from './model_se';

export const generateEN = () => {
    return _generateEN();
}

export const generateSE = () => {
    return _generateSE();
}

setInterval(() => { 
    console.log(generateSE());   
}, 5000);

// generate().then(line => {    
//     console.log('*********PICK UP LINE************\n');
//     console.log(line);
//     console.log('\n*********************************');
// });