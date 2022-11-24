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
    // [Romain] ya aussi moyen de faire ça avec les arguments par défaut des fonctions
    if (options) {
        if (options.size) {
            size = options.size;
        }
        console.log('option', options.withNumbers)
        /**
         * [Romain] ici le test écarte le cas 'false' et donc tu ne rentres pas dans le if.
         * Il faudrait plutot tester options.withNumbers !== undefined
         */
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

// [Romain] Du coup ce cas donne qd même des nombres
console.log(makePassword({
    size: 10,
    withNumbers: false
}));

console.log(makePassword({
    size: 5,
    withNumbers: true
}));


