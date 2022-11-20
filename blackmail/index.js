'use strict';

const classes = ['alea1', 'alea2', 'alea3', 'alea4'];
const container = document.querySelector('.message');
const resetButton = document.createElement('button');
let value = document.querySelector('input');
document.querySelector('input').placeholder = 'Tape letters here';

const randomLetter = () => {
    document.querySelector('input').addEventListener('input', function (event) {
        let blackmailInput = event.target.value;
        document.querySelectorAll('div').forEach(div => div.remove());
        blackmailInput.split('').forEach(letter => {
            const div = document.createElement('div');
            div.innerText = letter;
            div.id = 'letter';
            const randomClass = classes[Math.floor(Math.random() * classes.length)];
            div.classList.add(randomClass);
            container.append(div);
            localStorage.setItem('divs', container.innerHTML);
        });
        localStorage.setItem('text', blackmailInput);
    });
}
randomLetter();

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

const storageMemory = () => {
    const text = localStorage.getItem('text');
    document.querySelector('input').value = text;
    window.addEventListener('load', () => {
        localStorage.getItem('text', value);
        container.innerHTML = localStorage.getItem('divs');
    });
}
storageMemory();




