let button = document.getElementById("button");
let image = document.getElementById("image");
let pokenNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = async () => {
    let randomNumber = Math.ceil(Math.random() * 151) + 1;
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let data = await fetch(requestString)
    console.log(data);

    let respose = await data.json();
    console.log(respose);

    image.src = respose.sprites.front_default;
    pokenNumber.textContent = respose.id;
    pokeName.textContent = respose.name;
};

button.addEventListener('click', changePokemon);