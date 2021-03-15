function checkPal(str) {
var tab1 = str.split("");
console.log(tab1);
var tab2 = tab1.reverse();
console.log(tab2);

for (var i = 0; i < tab1.length; i++) {
    if (tab1[i] === tab2[tab1.length - 1 - i]) {
        return "Palindrome !";
    } else {
        return "Nope !";
    }
}

}

console.log(checkPal("koptpok"));

