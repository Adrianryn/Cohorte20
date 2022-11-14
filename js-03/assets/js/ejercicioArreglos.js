let nombre =String(prompt("Escribe tu nombre"));

function reverse(s){
    return s.split("").reverse().join("");
}

var sss = reverse(nombre)
document.write("Al reves es: " + sss)