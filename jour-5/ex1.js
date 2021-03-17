
function calculate (num1, num2, operator) {
if (operator == "+") {
    console.log(num1 + num2)
}

   else if(operator == "-" ) {
    console.log(num1 - num2) 
}

    else if (operator == "*") {
    console.log(num1 * num2) 
}

    else if (operator == "/") {
    console.log(num1 / num2)
}

    else if (operator == "%") {
    console.log(num1 % num2)
}

    else (console.log("error"))
}
// console.log(process.argv)
 calculate (parseInt(process.argv[2]), parseInt(process.argv[3]),process.argv[4])