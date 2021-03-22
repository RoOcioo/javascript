// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
// - Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
// - Affichez les valeurs de `double` dans la console


var array = ["1" , "2", "3", "4", "5"]

var double = array.map(function(num) {
    return num * 2;
  });
  
  console.log(double);