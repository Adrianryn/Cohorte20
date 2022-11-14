let x = 10;
console.log(x);

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function () {
        return "el nombre es: " + this.nombre + " " + this.apellido;
    }
}

for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log("valor: " + persona[nombrePropiedad]);

    }


console.log(persona);
console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona["apellido"]);
persona.tel = 8112778469
console.log(persona);


