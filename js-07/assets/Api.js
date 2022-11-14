/* const url = "https://pokeapi.co/api/v2/pokemon/25/";

const pokedex = () =>{
    fetch(url)
    .then(datos => datos.json())
    .then(pokemon => console.log(pokemon))
    .catch (error => console.log(error))
    
    };

pokedex(); */
//servidor
const nombre = () => {
    const nombres = ["Pepe", "Pancho", "María"];

    /* setTimeout(() => {
        return nombres;
    }, 0); */

    return new Promise((resolve, reject) => { //resolve -- proceso exitoso
        setTimeout(() => {                    //reject -- proceso no exitoso
            resolve(nombres);
        }, 3000)
    });

}
//servidor

/*
nuestra pc
*/
console.log(nombre()[0]);
