// - Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
// - Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
// - Affichez les valeurs de `even` dans la console

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]

var even = numbers.filter(function(num) {
    return num % 2 === 0; 
})
console.log(even);