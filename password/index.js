'use strict';
const random = (nb) => {
    return Math.floor(Math.random() * nb);
}
const getLetter = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[random(letters.length)];
}
const makePassword = (options) => {
    let size = 10;
    let withNumbers = true;
    if (options) {
        if (options.size) {
            size = options.size;
        }
        if (options.withNumbers) {
            withNumbers = options.withNumbers;
        }
    }
    if (size < 8) {
        console.log('Attention, votre mot de passe est trop court !');
    }
    let password = '';
    for (let index = 0; index < size; index++) {
        if (withNumbers && index % 2 === 0) {
            password += random(10);
        } else {
            password += getLetter();
        }
    }
    return password;
}

console.log(makePassword({
    size: 10,
    withNumbers: false
}));

console.log(makePassword({
    size: 5,
    withNumbers: true
}));


