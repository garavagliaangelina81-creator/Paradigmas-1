const prompt = require("prompt-sync")();
   const num1= parseFloat(prompt("ingrese el primer numero:"));
    const num2 =parseFloat(prompt("ingrese el segundo numero:"));

    const operacion = prompt("ingrese la operacion (+, -, *, /):"); 
    let resultado; 
    switch (operacion)
    {
       case "+":
        resultado = num1 + num2
        break; 
        case"-":
        resultado= num1 - num2
        break; 
        case "*":
        resultado = num1 * num2
        break; 
        case "/": 
        if (num2 !==0) { 
            resultado = num1 / num2;
         } else { 
            console.log ("error. division por cero no es permitida.");
            return; 
        
         }
   break; 
   default:
   console.log("operacion no valida.")
   return;
    }
    console.log("el resultado es: " + resultado); 



    

