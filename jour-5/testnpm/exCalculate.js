function calcul (num1, num2, operator) {
    if (operator == "+") {
        console.log(num1 + num2)
    }
    
       else if(operator == "-" ) {
        console.log(num1 - num2) 
    }
    
        else if (operator == "x") {
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
    

    module.exports=calcul