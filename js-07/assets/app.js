const titulo = document.getElementById("titulo");
const parrafos = document.getElementsByClassName("parrafo")

titulo.textContent = "Hola"
parrafos[0].innerHTML = "soy un parrafo"

console.log(titulo.textContent);
console.log(parrafos[1].textContent);

//css bacground-color   --snake case
//js  backgroundColor   --camel Case

/* parrafos[1].style.backgroundColor = "yellow";
parrafos[1].style.color = "red"; */

parrafos[1].classList.add("coloresFeos")

//Crear Elemtntos HTML
const padre = document.getElementById("padre");
const enlace = document.createElement("a");
enlace.href = "https://google.com";
console.log(enlace);
enlace.textContent = "ir a Google"

/* document.body.insertAdjacentElement("afterbegin" , enlace) */

padre.appendChild(enlace);

