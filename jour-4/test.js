function compare(num1, num2) {
    if (num2 < num1) {
        console.log("num1 is bigger", num1)
    } else if (num1 < num2) {
        console.log("num2 is bigger", num2)
    } else {
        console.log("both are the same");
    }

}
compare(56, 56);