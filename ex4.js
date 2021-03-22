// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// - Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
// - Affichez les valeurs de `numbers` dans la console


var array= ["1", "toto", "34", "javascript", "8"]

var numbers = array.filter(function(num) {
    
    return num>=0;

});

console.log(numbers);