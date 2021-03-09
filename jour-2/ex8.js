var limit = 50;
var score = 64;
var password = "azerty";



if (score === limit && password.length > 5){
    console.log("Everything is good");
} else if (score === limit || password.length > 8){
    console.log("Something is good");
} else (score < limit && password.length > 8);
    console.log("Nothing is good" );
