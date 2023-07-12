//  function criaPokemon (pokemon) {
//    const container = document.getElementById('container');

//    const nome = document.createElement('h1');
//    const url = document.createElement('p');

//    nome.textContent = pokemon.name;
//    url.textContent = pokemon.url;

//    container.appendChild(nome);
//    container.appendChild(url);


//  }

// fetch ('https://pokeapi.co/api/v2/pokemon')
// .then(respose => {
//    return respose.json();

// })
// .then(data => {
//     console.log(data.results);
//   const pokemons= data.results;
//   pokemons.forEach(pokemon => {
//     criaPokemon(pokemon);

//   });

// })
// .catch(err => {
//   console.log('Erro:', err)

// });
async function addPokemons(pokemon) {
    const results = document.getElementById('container');
  
    const name = document.createElement('h1');
    const url = document.createElement('p');
    const image = document.createElement('img');
    
    name.textContent = pokemon.name;
    url.textContent = pokemon.url;
    image.src = pokemon.image;
  
    results.appendChild(name);
    results.appendChild(url);
    results.appendChild(image);
  }
  
  async function fetchPokemons() {
    try {
       const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
       const pokemonList = await response.json();
       const pokemons = pokemonList.results;
  
       for (const pokemon of pokemons) {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonData = await pokemonResponse.json();
  
          const pokemonObj = {
             name: pokemonData.name,
             url: pokemon.url,
             image: pokemonData.sprites.front_default
          };
  
          addPokemons(pokemonObj);
       }
    } catch (error) {
       console.log('Error', error);
    }
  }
  
  fetchPokemons();