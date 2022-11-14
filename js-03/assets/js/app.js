/* Control de flujo */

let edad = Number( prompt("Escribe tu edad"));

/* if(condicion === true){
    bloque
    codigo
    //== operador de comparacion, ===comparacion Estricta
    //Operadores logicos: && And || OR !Not
} */
/* console.log(edad === 18); */

if( (edad > 0) && (edad <= 17) ){
    document.write("Tas chiquito");
}else if(edad === 18){
    document.write("Eres Mayor de edad");
}
else if(edad > 18){
    document.write("Tas ruco");
}else if(edad < 0){
    document.write("Es un numero negativo");
}
 else{
    document.write("No se pase de listo");
}
/* if(edad <= 18){
    document.write("eres menor de edad");

} */