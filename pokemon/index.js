'use strict';
const divElement = document.querySelector('.container');

function getPokemons (number, lang) {
    const pokemons = [];
    const url = `https://pokeapi.co/api/v2/generation/${number}/`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
       console.log(data.names)
        data.pokemon_species.forEach(pokemon => {
            pokemons.push({
                id: pokemon.url.split('/')[6],
                name: pokemon.name,
            });
        });
        pokemons.sort((a, b) => a.id - b.id);
        const ul = document.createElement('ul');
        document.body.append(ul);
        const li = document.createElement('li');
        ul.append(li);
        li.innerHTML = `Génération ${number}`;
        pokemons.forEach(pokemon => {
            const li = document.createElement('li');
            li.textContent = `${pokemon.id} - ${pokemon.name}`;
            ul.append(li);
            const img = document.createElement('img');
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
            li.append(img);
        });
    });
}
getPokemons(2, 'fr');

const researchPokemon = () => {
    const title = document.createElement('h1');
    title.textContent = 'POKEDEX';
    divElement.append(title);
    const input = document.createElement('input');
    divElement.append(input);
    const placeholder = document.createAttribute('placeholder');
    placeholder.value = 'Research a pokemon';
    input.setAttributeNode(placeholder);
    input.addEventListener('keyup', (e) => {
        const pokemons = document.querySelectorAll('li');
        pokemons.forEach(pokemon => {
            if (pokemon.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                pokemon.style.display = '';
            } else {
                pokemon.style.display = 'none';
            }
        });
    });
}
researchPokemon();

const selectGeneration = () => {
    const button = document.createElement('button');
    button.textContent = 'Choose the generation of pokemons';
    divElement.append(button);
    button.addEventListener('click', () => {
        const generation = prompt('Which generation do you want to discover ?');
        if(generation <= 0 || generation >= 9) {
            alert('Please choose a generation between 1 and 8');
        }else{
            getPokemons(generation) - document.querySelector('ul').remove();
        }
    });
}
selectGeneration();

