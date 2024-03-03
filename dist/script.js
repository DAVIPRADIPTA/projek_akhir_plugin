const darkActive = document.getElementById ('darkActive');
const darkButton = document.getElementById ('darkButton');

const poke = document.getElementById('listPokemon')
const template = document.getElementById('data')

function darkMode (){
    darkActive.classList.toggle ('dark')
}

const navMobile = document.getElementById('navMobile');
const humbergerButton =document.getElementById('humbergerButton');

function menu () {
    navMobile.classList.toggle ('hidden')
}

const titleNavbar = document.getElementById('titleNavbar')

titleNavbar.addEventListener("click", function(){
    navMobile.classList.add('hidden')
})



document.addEventListener('click', function(event) {
    const navbar = document.querySelector('#headerNavbar');
    const targetElement = event.target; 
    // console.log(targetElement)// Element yang diklik

    // Periksa apakah element yang diklik adalah navbar atau bagian dari navbar
    const isClickInsideNavbar = navbar.contains(targetElement);

    // Jika tidak, sembunyikan navbar
    if (!isClickInsideNavbar) {
        navMobile.classList.add ('hidden')
    }
});

const search = document.getElementById('search');
const form = document.getElementById('form');
const hasilSearch = document.getElementById('pokemonSearch')
const pokemonSearch = document.getElementById('pokemonSearch')


function getNamePokemon (namaPokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/` + namaPokemon) 
    .then(response => {
        if(!response.ok){
            throw new Error ('error fetch api pertama')
        }
        return response.json()
        })
    .then(data => {

        
        const imgElement = document.createElement('img')
        imgElement.src =data.sprites.front_shiny;
        // styling gambar pokemon
        imgElement.classList.add('h-34')

        // buat elemen untuk menampung nama pokemon
        const nameElement = document.createElement('p')
        nameElement.textContent = data.name;
        // styling nama pokemon
       
        const typeElement = document.createElement('p')
        typeElement.textContent = 'tipe = ' + data.types.map(type => type.type.name).join('; ')
        

        const abilityElement = document.createElement('p')
        abilityElement.textContent = 'kemampuan = ' + data.abilities.map(ability => ability.ability.name).join('; ');
        abilityElement.classList.add('mb-3');


        // buat elemen card untuk menampung img dan nama
        const cardElement = document.createElement('div');

        // styling card
        cardElement.classList.add('flex', 'justify-center', 'items-center', 'flex-col', 'border', 'rounded-md', 'shadow-xl', 'dark:bg-gray-900', 'bg-[#EFEFEF]', 'p-4', 'text-center', 'w-80', 'h-[310px]');
       
        // menampung img dan nama kedalam card 
        cardElement.appendChild(imgElement);
        cardElement.appendChild(nameElement);
        cardElement.appendChild(typeElement);
        cardElement.appendChild(abilityElement);

        pokemonSearch.appendChild(cardElement);
       
    })
    .catch(error =>{
        console.log(error)
        alert('pokemon dengan nama tersebut tidak ditemukan silahkan masukan nama pokemon dengan benar')
    })
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(search.value === ""){
         alert('masukan nama pokemon')
    }
    else{
         pokemonSearch.innerHTML="";     
         getNamePokemon(search.value)
         search.value=null
    }
});




fetch('https://pokeapi.co/api/v2/pokemon/?limit=40')
.then(response => {
    if(!response.ok){
        throw new Error ('error fetch api pertama')
    }
    return response.json()
})
.then(data =>{

    const daftarPokemon = data.results;

    for(let i = 0 ; i < 40 ; i++){
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
            const pokemonTypes = pokemon.types.map(type => type.type.name);
           
            
            getData.querySelector('img').src = pokemon.sprites.front_shiny;
            getData.querySelector('img').alt = pokemon.name;
            getData.querySelector('h3').textContent = pokemon.name;
            
            getData.getElementById('tipePokemon').textContent = pokemonTypes.join(', ')
            getData.getElementById('kemampuanPokemon').textContent = pokemon.abilities.map(ability => ability.ability.name).join(', ');
            poke.appendChild(getData);

            
            function cardPokemon (element) {
                if(pokemonTypes.includes(element)){

                    // buat elemen untuk menampung img
                    const imgElement = document.createElement('img')
                    imgElement.src =pokemon.sprites.front_shiny;
                    // styling gambar pokemon
                    imgElement.classList.add('h-40')

                    // buat elemen untuk menampung nama pokemon
                    const nameElement = document.createElement('p')
                    nameElement.textContent = pokemon.name;
                    // styling nama pokemon
                   
                    const typeElement = document.createElement('p')
                    typeElement.textContent = 'tipe = ' + pokemon.types.map(type => type.type.name).join('; ')
                    

                    const abilityElement = document.createElement('p')
                    abilityElement.textContent = 'kemampuan = ' + pokemon.abilities.map(ability => ability.ability.name).join('; ');
                    abilityElement.classList.add('mb-3');


                    // buat elemen card untuk menampung img dan nama
                    const cardElement = document.createElement('div');

                    // styling card
                    cardElement.classList.add('flex', 'justify-center', 'items-center', 'flex-col', 'border', 'rounded-md', 'shadow-xl', 'dark:bg-gray-900', 'bg-[#EFEFEF]', 'p-4', 'text-center');
                   
                    // menampung img dan nama kedalam card 
                    cardElement.appendChild(imgElement);
                    cardElement.appendChild(nameElement);
                    cardElement.appendChild(typeElement);
                    cardElement.appendChild(abilityElement);
                    
                    return cardElement;
                }
            }
            if(cardPokemon('fire')){
                const firePokemonContainer = document.getElementById('firePokemonContainer')
                firePokemonContainer.appendChild(cardPokemon('fire'))

            }if(cardPokemon('poison')){
                const poisonPokemonContainer = document.getElementById('poisonPokemonContainer')
                poisonPokemonContainer.appendChild(cardPokemon('poison'))

            }if(cardPokemon('water')){
                const waterPokemonContainer = document.getElementById('waterPokemonContainer')
                waterPokemonContainer.appendChild(cardPokemon('water'))

            }if(cardPokemon('flying')){
                const flyingPokemonContainer = document.getElementById('flyingPokemonContainer')
                flyingPokemonContainer.appendChild(cardPokemon('flying'))

            }if(cardPokemon('bug')){
                const bugPokemonContainer = document.getElementById('bugPokemonContainer')
                bugPokemonContainer.appendChild(cardPokemon('bug'))

            }if(cardPokemon('fairy')){
                const fairyPokemonContainer = document.getElementById('fairyPokemonContainer')
                fairyPokemonContainer.appendChild(cardPokemon('fairy'))

            }if(cardPokemon('ground')){
                const groundPokemonContainer = document.getElementById('groundPokemonContainer')
                groundPokemonContainer.appendChild(cardPokemon('ground'))

            }if(cardPokemon('normal')){
                const normalPokemonContainer = document.getElementById('normalPokemonContainer')
                normalPokemonContainer.appendChild(cardPokemon('normal'))
            }
   
        })
        .catch(error => {
            console.error('Ada kesalahan saat mengambil data Pokemon:', error);
        });
    };
})
.catch(error => {
    console.error('Ada kesalahan saat mengambil daftar Pokemon:', error);
    
})




// poison, fire, water, bug, flying, normal, ground, fairy