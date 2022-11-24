'use strict';

// [Romain] Tu as modifié le HTML, j'aurais préféré pour cet exo que tu fasses tout en JS

// [Romain] tu peux générer ça avec un .map()
const classes = ['alea1', 'alea2', 'alea3', 'alea4'];
const container = document.querySelector('.message');
const resetButton = document.createElement('button');
// [Romain] Ce nom de variable n'est pas foufou
let value = document.querySelector('input');
// [Romain] Tu as une variable pour document.querySelector('input')
document.querySelector('input').placeholder = 'Tape letters here';

// [Romain] Tu n'as pas vraiment besoin d'une fonction ici, le addEventListener suffit
const randomLetter = () => {

    // [Romain] Tu as une variable pour document.querySelector('input')
    document.querySelector('input').addEventListener('input', function (event) {
        let blackmailInput = event.target.value;
        document.querySelectorAll('div').forEach(div => div.remove());
        // [Romain] j'aime bien le .split().forEach()
        blackmailInput.split('').forEach(letter => {
            const div = document.createElement('div');
            div.innerText = letter;
            div.id = 'letter';
            const randomClass = classes[Math.floor(Math.random() * classes.length)];
            div.classList.add(randomClass);
            container.append(div);
            // [Romain] Intéressant !
            localStorage.setItem('divs', container.innerHTML);
        });
        localStorage.setItem('text', blackmailInput);
    });
}
randomLetter();

// [Romain] Tu n'as pas vraiment besoin d'une fonction ici, le addEventListener suffit
const resetAll = () => {
    resetButton.textContent = 'RESET';
    resetButton.id = 'reset';
    document.body.append(resetButton);

    resetButton.addEventListener('click', () => {
        localStorage.removeItem('text');
        localStorage.removeItem('divs');
        container.textContent = '';
        value.value = '';
    })
}
resetAll();

// [Romain] Tu n'as pas vraiment besoin d'une fonction ici, le addEventListener suffit
const storageMemory = () => {
    const text = localStorage.getItem('text');
    // [Romain] Tu as une variable pour document.querySelector('input')
    document.querySelector('input').value = text;
    // [Romain] Utilise plutot l'event DOMContentLoaded, il arrive plus tot
    window.addEventListener('load', () => {
        localStorage.getItem('text', value);
        container.innerHTML = localStorage.getItem('divs');
    });
}
storageMemory();




