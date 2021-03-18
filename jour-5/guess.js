var prompt = require("prompt");

// var misteryNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);

prompt.start();

function displayPrompt() {
  prompt.get({ name: "q", description: "Quel est le nombre mystère ?" }, function play(err, res) { // permet de paramétrer la question
    
    if (res.q < misteryNum  || res) { // valide la saisie
      
        console.log("c'est plus!");

    } else (res.q > misteryNum ) {
        console.log("c'est moins");
    } else if (res.q === misteryNum ) {
        console.log("Bravo !");
    }

     
        displayPrompt(); // relance le prompt si la saisie n'est pas valide

    }
  });
}

displayPrompt();