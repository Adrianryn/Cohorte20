//llamar al elemento
const imagen = document.getElementsByClassName("contenedor")[0];

// Crear el elemento
const nuevaImg = document.createElement("img");

//modificar atributos

nuevaImg.src = "https://placeimg.com/200/200/tech"

nuevaImg.alt = "imagen Tech"

//insertar el elemento

imagen.appendChild(nuevaImg);

/* otra manera de crear elementos */

const imagen2 = document.getElementById("img");

imagen2.innerHTML = `<img src="https://placeimg.com/200/200/tech"/>
`;

//insentarla en el documento para que se pueda mostrar.
const nombres = ["pedro", "Juan", "Sonia", "Miguel" ]

//forma uno creando elementos

const lista1 = document.getElementById("lista1");

nombres.forEach((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    lista1.appendChild(li);
});

//forma 2 
const frutas = ["manzana", "limon", "pera", "uva"];

const lista2 = document.getElementById("lista2");

frutas.forEach((el) =>  {
    lista2.innerHTML += `
    <li>${el}</li> `;
});