var prompt = require("prompt");

var misteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);

prompt.start();

function displayPrompt() {
  prompt.get(
    {
      name: "num",
      description: "Quel est le nombre mystère?",
      validator:  /^[1-9][0-9]?$|^100$/g, 
      
      message: 'Pas de lettres',
    },
    function play(err, res) {

      if (res.num < misteryNum) { // valide la saisie

        console.log("c'est plus!");

      } else if (res.num > misteryNum) {
        console.log("c'est moins");
      } else {
        console.log("Bravo !");
      }


      displayPrompt(); // relance le prompt si la saisie n'est pas valide

    }
  )};


displayPrompt();