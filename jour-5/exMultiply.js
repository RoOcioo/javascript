var res = 0;

function multiply(num) {
    for (i = 1; i<=10; i++) {
    res = num * i
    
console.log(num, "x",i, "=",res);
}
}
multiply(process.argv[2])