import generate from './model';

export default () => {
    return generate();
}

generate().then(line => {    
    console.log('*********PICK UP LINE************\n');
    console.log(line);
    console.log('\n*********************************');
});