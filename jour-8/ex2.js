var request= require("request");

function getFact() {
    request.get("https://api.chucknorris.io/jokes/random"), function(err, res, body) {
        var joke = JSON.parse(body);
        console.log(joke.value);
    };
}
getFact(4);