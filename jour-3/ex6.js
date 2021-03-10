var sentence= "Hello Konexio !";
var hello = [];

for (var i=sentence.length-1; i>=0; i--) {
    hello.push(sentence[i]);
}
console.log(hello.join(""));