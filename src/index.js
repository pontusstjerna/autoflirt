import generate from './model';

export default () => {
    return generate();
}

setInterval(() => { 
    console.log(generate());   
}, 5000);