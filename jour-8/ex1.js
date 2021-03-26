var request = require('request');

var getCountries = [];

function getCountries() {
request.get("https://restcountries.eu/rest/v2/all", function (err, res, body) {
    
    var bodyparsed = JSON.parse(body);
    console.log(bodyparsed)

    
});
}
getCountries();