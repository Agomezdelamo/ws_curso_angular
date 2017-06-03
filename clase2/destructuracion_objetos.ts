 /**
La destructuracion de objetos sirve
para hacer un model to command basicamente,
es decir, pasas varias propiedades de un objeto complejo
a variables simples de una forma practica.
*/
let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga"
}

let nombre2 = avenger.nombre;
let clave2 = avenger.clave;
let poder2 = avenger.poder;

//desestructuracion old schooll

/////////////////////////AHORA CON ES6 ///////////////

//ahora en una sola linea de código desmontamos en
//variables individuales las propiedades del objeto,
// da igual el orden de las propiedades al desesctructurarlo,
// lo importante es que existan en el objeto.
//GENERO 3 VARIABLES QUE SON PROPIEDADES DEL OBJETO AVENGER
let {  clave, poder, nombre } = avenger;

console.log(nombre, clave, poder);


//tambien sirve en arrays, solo que se desestructura por posicion.
let avengersArray:string[]  = ["Thor","Steve","Tony"];
// en este caso no tira del nombre de la propiedad
//tira de la posicion del array, por eso loki tiene de valor thor.
let [loki, capi, ironMan] = avengersArray;

console.log(avengersArray);
