const darkActive = document.getElementById ('darkActive');
const darkButton = document.getElementById ('darkButton');

function darkMode (){
    darkActive.classList.toggle ('dark')
}

const poke = document.getElementById('listPokemon')
let template = document.getElementById('data')

fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
.then(response => {
    if(!response.ok){
        throw new Error ('error fetch api pertama')
    }
    return response.json()
})
.then(data =>{

    const daftarPokemon = data.results;

    for(let i = 1 ; i <= 40 ; i++){
        const dataPokemon = daftarPokemon[i];
  
        fetch(dataPokemon.url)
        .then(res => {
            if(!res.ok){
                throw new Error ('error fetch api ke-dua')
            }
            return res.json()
        })
        .then(pokemon =>{
            const getData = document.importNode(template.content, true);
           
            
            getData.querySelector('img').src = pokemon.sprites.front_shiny;
            getData.querySelector('img').alt = pokemon.name;
            getData.querySelector('h3').textContent = pokemon.name;
            
            getData.getElementById('tipePokemon').textContent = pokemon.types.map(type => type.type.name);
            getData.getElementById('kemampuanPokemon').textContent = pokemon.abilities.map(ability => ability.ability.name);
            


            poke.appendChild(getData);
            
        })
        .catch(error => {
            console.error('Ada kesalahan saat mengambil data Pokemon:', error);
        });
    };
})
.catch(error => {
    console.error('Ada kesalahan saat mengambil daftar Pokemon:', error);
    
})






