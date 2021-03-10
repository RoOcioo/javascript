for (var i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (1 % 5 === 0) {
        console.log("buzz");
    } else if (1 % 7 === 0) {
        console.log("");
    }else {
        console.log(i);
    }
};