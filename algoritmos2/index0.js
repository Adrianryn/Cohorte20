let miVariable = prompt("Cual es tu nombre");

function saludoPers(miVariable) {
    alert(miVariable);
}
saludoPers(miVariable);

function suma() {
    let num1 = parseInt( prompt("valor del primer numero"));
    let num2 = parseInt( prompt("valor del segundo numero"));
    let resultado = num1 + num2;
    return resultado;
}




let r= suma();
alert(r);