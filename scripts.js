const baseURL = "https://pokeapi.co/api/v2/pokemon/";

const searchNum = document.querySelector('search');
const submitBtn = document.querySelector('submit');

// submitBtn.addEventListener('submit', fetchResults)

function fetchPokemon(){
    
    fetch(baseURL)
        .then(results => {
            return results.json();
        })
        .then(json => {
            // displayPoke(json);
            console.log(json);
        })
    .catch(err => console.log(err))
}
fetchPokemon();