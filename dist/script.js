const darkActive = document.getElementById ('darkActive');
const darkButton = document.getElementById ('darkButton');

const poke = document.getElementById('listPokemon')
let template = document.getElementById('data')

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
            pokemonTypes = pokemon.types.map(type => type.type.name);
           
            
            getData.querySelector('img').src = pokemon.sprites.front_shiny;
            getData.querySelector('img').alt = pokemon.name;
            getData.querySelector('h3').textContent = pokemon.name;
            
            getData.getElementById('tipePokemon').textContent = pokemonTypes.join(', ')
            getData.getElementById('kemampuanPokemon').textContent = pokemon.abilities.map(ability => ability.ability.name);
            poke.appendChild(getData);

            

            if(pokemonTypes.includes('fire')){
                
                // buat elemen untuk menampung img
                const imgElementFire = document.createElement('img')
                imgElementFire.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementFire.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementFire = document.createElement('p')
                nameElementFire.textContent = pokemon.name;

                // styling nama pokemon
                nameElementFire.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementFire = document.createElement('div');

                // styling card
                cardElementFire.classList.add('flex');
                cardElementFire.classList.add('justify-center');
                cardElementFire.classList.add('items-center');
                cardElementFire.classList.add('flex-col');
                cardElementFire.classList.add('border');
                cardElementFire.classList.add('rounded-md');
                cardElementFire.classList.add('shadow-xl');
                cardElementFire.classList.add('dark:bg-gray-900');
                cardElementFire.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementFire.appendChild(imgElementFire);
                cardElementFire.appendChild(nameElementFire)
                
                // tangkap id firePokemonContainer untuk menampung card
                const firePokemonContainer = document.getElementById('firePokemonContainer')

                // menampung card 
                firePokemonContainer.appendChild(cardElementFire)
            }
            if(pokemonTypes.includes('poison')){
                
                // buat elemen untuk menampung img
                const imgElementPoison = document.createElement('img')
                imgElementPoison.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementPoison.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementPoison = document.createElement('p')
                nameElementPoison.textContent = pokemon.name;

                // styling nama pokemon
                nameElementPoison.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementPoison = document.createElement('div');

                // styling card
                cardElementPoison.classList.add('flex');
                cardElementPoison.classList.add('justify-center');
                cardElementPoison.classList.add('items-center');
                cardElementPoison.classList.add('flex-col');
                cardElementPoison.classList.add('border');
                cardElementPoison.classList.add('rounded-md');
                cardElementPoison.classList.add('shadow-xl');
                cardElementPoison.classList.add('dark:bg-gray-900');
                cardElementPoison.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementPoison.appendChild(imgElementPoison);
                cardElementPoison.appendChild(nameElementPoison)
                
                // tangkap id PoisonPokemonContainer untuk menampung card
                const poisonPokemonContainer = document.getElementById('poisonPokemonContainer')

                // menampung card 
                poisonPokemonContainer.appendChild(cardElementPoison)
            }
            if(pokemonTypes.includes('water')){
                
                // buat elemen untuk menampung img
                const imgElementWater = document.createElement('img')
                imgElementWater.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementWater.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementWater = document.createElement('p')
                nameElementWater.textContent = pokemon.name;

                // styling nama pokemon
                nameElementWater.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementWater = document.createElement('div');

                // styling card
                cardElementWater.classList.add('flex');
                cardElementWater.classList.add('justify-center');
                cardElementWater.classList.add('items-center');
                cardElementWater.classList.add('flex-col');
                cardElementWater.classList.add('border');
                cardElementWater.classList.add('rounded-md');
                cardElementWater.classList.add('shadow-xl');
                cardElementWater.classList.add('dark:bg-gray-900');
                cardElementWater.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementWater.appendChild(imgElementWater);
                cardElementWater.appendChild(nameElementWater)
                
                // tangkapk WaterPokemonContainer untuk menampung card
                const waterPokemonContainer = document.getElementById('waterPokemonContainer')

                // menampung card 
                waterPokemonContainer.appendChild(cardElementWater)
            }
            
            if(pokemonTypes.includes('flying')){
                
                // buat elemen untuk menampung img
                const imgElementFlying = document.createElement('img')
                imgElementFlying.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementFlying.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementFlying = document.createElement('p')
                nameElementFlying.textContent = pokemon.name;

                // styling nama pokemon
                nameElementFlying.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementFlying = document.createElement('div');

                // styling card
                cardElementFlying.classList.add('flex');
                cardElementFlying.classList.add('justify-center');
                cardElementFlying.classList.add('items-center');
                cardElementFlying.classList.add('flex-col');
                cardElementFlying.classList.add('border');
                cardElementFlying.classList.add('rounded-md');
                cardElementFlying.classList.add('shadow-xl');
                cardElementFlying.classList.add('dark:bg-gray-900');
                cardElementFlying.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementFlying.appendChild(imgElementFlying);
                cardElementFlying.appendChild(nameElementFlying)
                
                // tangkapk fairyPokemonContainer untuk menampung card
                const flyingPokemonContainer = document.getElementById('flyingPokemonContainer')

                // menampung card 
                flyingPokemonContainer.appendChild(cardElementFlying)
            }
            
            if(pokemonTypes.includes('bug')){
                
                // buat elemen untuk menampung img
                const imgElementBug = document.createElement('img')
                imgElementBug.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementBug.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementBug = document.createElement('p')
                nameElementBug.textContent = pokemon.name;

                // styling nama pokemon
                nameElementBug.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementBug = document.createElement('div');

                // styling card
                cardElementBug.classList.add('flex');
                cardElementBug.classList.add('justify-center');
                cardElementBug.classList.add('items-center');
                cardElementBug.classList.add('flex-col');
                cardElementBug.classList.add('border');
                cardElementBug.classList.add('rounded-md');
                cardElementBug.classList.add('shadow-xl');
                cardElementBug.classList.add('dark:bg-gray-900');
                cardElementBug.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementBug.appendChild(imgElementBug);
                cardElementBug.appendChild(nameElementBug)
                
                // tangkapk bugPokemonContainer untuk menampung card
                const bugPokemonContainer = document.getElementById('bugPokemonContainer')

                // menampung card 
                bugPokemonContainer.appendChild(cardElementBug)
            }  

            if(pokemonTypes.includes('fairy')){
                
                // buat elemen untuk menampung img
                const imgElementFairy = document.createElement('img')
                imgElementFairy.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementFairy.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementFairy = document.createElement('p')
                nameElementFairy.textContent = pokemon.name;

                // styling nama pokemon
                nameElementFairy.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementFairy = document.createElement('div');

                // styling card
                cardElementFairy.classList.add('flex');
                cardElementFairy.classList.add('justify-center');
                cardElementFairy.classList.add('items-center');
                cardElementFairy.classList.add('flex-col');
                cardElementFairy.classList.add('border');
                cardElementFairy.classList.add('rounded-md');
                cardElementFairy.classList.add('shadow-xl');
                cardElementFairy.classList.add('dark:bg-gray-900');
                cardElementFairy.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementFairy.appendChild(imgElementFairy);
                cardElementFairy.appendChild(nameElementFairy)
                
                // tangkapk flyingPokemonContainer untuk menampung card
                const fairyPokemonContainer = document.getElementById('fairyPokemonContainer')

                // menampung card 
                fairyPokemonContainer.appendChild(cardElementFairy)
            }

            if(pokemonTypes.includes('ground')){
                
                // buat elemen untuk menampung img
                const imgElementGround = document.createElement('img')
                imgElementGround.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementGround.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementGround = document.createElement('p')
                nameElementGround.textContent = pokemon.name;

                // styling nama pokemon
                nameElementGround.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementGround = document.createElement('div');

                // styling card
                cardElementGround.classList.add('flex');
                cardElementGround.classList.add('justify-center');
                cardElementGround.classList.add('items-center');
                cardElementGround.classList.add('flex-col');
                cardElementGround.classList.add('border');
                cardElementGround.classList.add('rounded-md');
                cardElementGround.classList.add('shadow-xl');
                cardElementGround.classList.add('dark:bg-gray-900');
                cardElementGround.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementGround.appendChild(imgElementGround);
                cardElementGround.appendChild(nameElementGround)
                
                // tangkapk gorundPokemonContainer untuk menampung card
                const groundPokemonContainer = document.getElementById('groundPokemonContainer')

                // menampung card 
                groundPokemonContainer.appendChild(cardElementGround)
            }

            if(pokemonTypes.includes('normal')){
                
                // buat elemen untuk menampung img
                const imgElementNormal = document.createElement('img')
                imgElementNormal.src =pokemon.sprites.front_shiny;
                // styling gambar pokemon
                imgElementNormal.classList.add('h-40')

                // buat elemen untuk menampung nama pokemon
                const nameElementNormal = document.createElement('p')
                nameElementNormal.textContent = pokemon.name;

                // styling nama pokemon
                nameElementNormal.classList.add('mb-3')

                // buat elemen card untuk menampung img dan nama
                const cardElementNormal = document.createElement('div');

                // styling card
                cardElementNormal.classList.add('flex');
                cardElementNormal.classList.add('justify-center');
                cardElementNormal.classList.add('items-center');
                cardElementNormal.classList.add('flex-col');
                cardElementNormal.classList.add('border');
                cardElementNormal.classList.add('rounded-md');
                cardElementNormal.classList.add('shadow-xl');
                cardElementNormal.classList.add('dark:bg-gray-900');
                cardElementNormal.classList.add('bg-[#EFEFEF]');

                // menampung img dan nama kedalam card 
                cardElementNormal.appendChild(imgElementNormal);
                cardElementNormal.appendChild(nameElementNormal)
                
                // tangkapk gorundPokemonContainer untuk menampung card
                const normalPokemonContainer = document.getElementById('normalPokemonContainer')

                // menampung card 
                normalPokemonContainer.appendChild(cardElementNormal)
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