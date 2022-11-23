'use strict';
const divElement = document.querySelector('.container');

function getPokemons(number, lang) {

    const pokemons = [];
    const url = `https://pokeapi.co/api/v2/generation/${number}/`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.pokemon_species.forEach(pokemon => {
                pokemons.push({
                    id: pokemon.url.split('/')[6],
                    name: pokemon.name,
                    url: pokemon.url
                });
            });
            pokemons.sort((a, b) => a.id - b.id);
            const ul = document.createElement('ul');
            document.body.append(ul);
            const li = document.createElement('li');
            ul.append(li);
            li.innerHTML = `Génération ${number}`;
            pokemons.forEach(pokemon => {
                fetch(pokemon.url).then(response => response.json()).then(data => {
                    data.names.forEach(e => {
                        if (lang === e.language.name) {
                            const li = document.createElement('li');
                            li.textContent = `${pokemon.id} - ${e.name}`;
                            ul.append(li);
                            const img = document.createElement('img');
                            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
                            li.append(img);
                        }
                        // if (lang === '' || lang === undefined) {
                        //     console.log('test');
                        // }
                    
                    });
                })
            });
        });

        const select = document.createElement('select');
        const div = document.querySelector('.container');
        div.append(select);
        const option = document.createElement('option');
        option.textContent = 'Génération';
        select.append(option);
        for (let i = 1; i <= 8; i++) {
            const option = document.createElement('option');
            option.textContent = `Génération ${i}`;
            select.append(option);
        }
        select.addEventListener('change', (e) => {
            const ul = document.querySelector('ul');
            ul.remove();
            const select = document.querySelector('select');
            select.remove();
            getPokemons(e.target.value[11], lang);
        });
}
getPokemons(1, 'fr');

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