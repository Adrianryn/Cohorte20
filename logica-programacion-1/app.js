alert("a continuacion se te solicitaran 3 numeros a ingresar")

let num1=parseInt( prompt("ingrese el primer numero"))//crear la primer variable numerica
console.log(num1);
let num2=parseInt( prompt("ingrese el segundo numero"))//crea la segunda variable numerica  
console.log(num2);
let num3=parseInt( prompt("ingrese el tercer numero"))//crea la tercer variable numerica
console.log(num3);

let numbers=[num1, num2, num3] // crea el array donde se almacenan los numeros
numbers.sort( (a,b) => {
    if(a == b) {
        return 0;
    }
    if(a < b) {
        return -1;
    }
    return 1;
}   );  // compara los numeros en el array para ordenarlos ascendentemente
console.log(numbers);

numbers.sort( (a,b) => {
    if(a == b) {
        return 0;
    }
    if(a > b) {
        return -1;
    }
    return 1;
}   ); // compara los numeros en el array para ordenarlos descendentemente.
console.log(numbers);

Document.write=(" el orden ascendente es " + numbers);