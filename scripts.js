const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=898/";
const picUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' 
let url;
let pokeUrl;

const searchNum = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const submitSearch = document.querySelector('form');
const img = document.querySelector('img')
const pokemonName = document.querySelector('.name');
submitSearch.addEventListener('submit', fetchPokemon)



img.style.display = 'none';

function fetchPokemon(e){
    e.preventDefault();
    url = baseURL + searchNum.value;
    pokeUrl = picUrl +searchNum.value;
    fetch(url)
    .then((results) =>{
        return results.json();
    })
    .then((submission) =>{
        console.log(submission);
        console.log(searchNum.value);
        console.log(url);
        console.log(pokeUrl);
        pokeName = submission.results[searchNum.value - 1].name;
        console.log(pokeName);
        displayPoke();
        displayName();
        // fetchPicture();
    })
    .catch(err => console.log(err))
}

// function fetchPicture(){
// fetch(`${url}`)
//     .then(results=>{
//         return results.json();
//     })
//         .then(submissionTwo =>{
//             console.log(submissionTwo)
//             displayName();
//             console.log(url);
//             pokemon = submissionTwo.results
//             console.log(pokemon);
//             console.log(submissionTwo.sprites.other.official-artwork.front_default);
//         })
// }

function displayPoke(){
    img.style.display = 'block';   
    let pokeFriend = `${pokeUrl}.png`;
    console.log(pokeFriend);
    img.src = pokeFriend;
   }

   function displayName(){
    pokemonName.innerText = pokeName;
   }