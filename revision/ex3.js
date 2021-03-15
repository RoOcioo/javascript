function checkPal(word) {
var reverse = word.split("").reverse().join("");
console.log(reverse);

if (word === reverse) {
        console.log( "Palindrome !");
      } else {
        console.log( "Nope !");
      }
  }


checkPal("kasyak");

