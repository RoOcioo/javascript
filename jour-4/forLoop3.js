var total = 0;

var min= 1;
var max= 6;

for (var i = 1; i <= 20; i++) {
    var veces = Math.floor(Math.random() * (max - min + 1) + min); 
    if (veces >= 5) {
        total += veces;
    }
}

console.log(total);