import generate from './model';

export default () => {
    return generate();
}

setInterval(() => {
    generate().then(line => {    
        console.log(line);
    });    
}, 5000);

// generate().then(line => {    
//     console.log('*********PICK UP LINE************\n');
//     console.log(line);
//     console.log('\n*********************************');
// });