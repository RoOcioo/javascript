var request= require("request");

function catchPokemon(id) {
    request.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118", function (err, res, body) {
        var pokemonGame = JSON.parse(body);
        console.log(id);
        console.log(pokemonGame.results[id - 1].name);
    });
}
catchPokemon(25)