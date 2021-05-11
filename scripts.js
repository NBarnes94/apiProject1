const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let url;

const searchNum = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const submitSearch = document.querySelector('form');
const img = document.querySelector('img')
submitSearch.addEventListener('submit', fetchPokemon)





function fetchPokemon(e){
    e.preventDefault();
    url = baseURL + searchNum.value;
    fetch(baseURL)
    .then((results) =>{
        return results.json();
    })
    .then((submission) =>{
        console.log(submission);
        console.log(searchNum.value);
        console.log(url);
        fetchPicture();
    })
    .catch(err => console.log(err))
}


function fetchPicture(){
fetch(`${url}`)
    .then(results=>{
        return results.json();
    })
        .then(submission =>{
            console.log(submission)
            displayPoke(submission);
            console.log(url);
        })
}

function displayPoke(){
    let pokeFriend = `${url}.sprites.other.official-artwork.front_default.url`;
    console.log(pokeFriend);
    // let tinyPokeFried = url.response.sprites.front_default;
    // let img = document.querySelector('image');
    img.src = pokeFriend;
    // if(pokeFriend.length === 1){
        // nav.style.display = 'block';
        
    // } else {
        // nav.style.display = 'block;'
        // img.src = tinyPokeFried;

    }
// }