function multiply(num) {
    var res = 0;
    
    for (i = 1; i<=10; i++) {
    res = num * i

console.log(num, "x",i, "=",res);
}
}


function addition(num) {
    var res = 0;
    
    for (i = 1; i<=10; i++) {
    res = num + i

console.log(num, "+",i, "=",res);
}
}

module.exports = {
    multiply,
    addition,
  };