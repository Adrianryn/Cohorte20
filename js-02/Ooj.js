let miObjeto = {
    nombre: "juan",
    edad: 30,
    datos: function(){
        let mensaje= "Tu eres  " + this.nombre;
mensaje += " tienes " + this.edad + " años";
console.log(mensaje);
    }
};

miObjeto.datos();

/* Objeto contructor
el contructor es una funcion que va a construir un objeto , el objeto tiene metodos y tambien funciones. */

let constructor = function () {
    let objPersona = {
        nombre: "Juan",
        nss: 2357,
        datosPersona: function (){
            let msj= "Eres" + this.nombre + " Tu nss es " + this.nss
            console.log(msj);
         },
         otroMetodo: function(parametro){
            let numero = 8;
            console.log("la suma es : " +(numero + parametro) );
         }
    };
    return objPersona
};
let varObjReg = constructor()//crea la variable del objeto
varObjReg.datosPersona();
varObjReg.otroMetodo(5);