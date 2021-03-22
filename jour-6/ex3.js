// À l'aide du package `prompt`, créez une fonction `checkProfile` qui demande à l'utilisateur un email, un username et un mot de passe
// La fonction vérifiera que l'utilisateur a saisi des informations valides (regardez la doc, et plus precisement les `pattern`) :
// l'email doit être au bon format
// le username ne doit comporter que des lettres, chiffres et tirets (les petits)
// le mot de passe doit contenir au moins 6 caractères, au moins une lettre et au moins un chiffre, et peut contenir des tirets
// Si tout est bon, elle retourne "All good !", sinon elle retourne "error"


var prompt = require("prompt");

var properties = [

    {
        name: "email",
        validator: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm ,// Regex de validation : lettres maj / min, espaces et tirets
        warning: "L'email doit être au bon format"
      },


    {
        name: "username",
        validator: /^[a-z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
        warning: "Le username ne doit contenir que des lettres, espaces et tirets"
    },
    {
        name: "password",
        validator: /^(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/gm,
        replace: "*", 
        hidden: true // n'affichera pas la saisie de l'utilisateur à l'écran
    }
];

prompt.start(); // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return 1;
}

prompt.get(properties, function (err, res) {
    if (err) {
        return onErr(err);
    }

    console.log("All good!");

});
