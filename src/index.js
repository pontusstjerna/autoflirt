import generate from './model';

module.exports = function() {
    return generate();
}

setInterval(() => { 
    console.log(generate());   
}, 5000);