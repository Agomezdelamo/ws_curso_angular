'use strict';
/**
La destructuracion de objetos sirve
para hacer un model to command basicamente,
es decir, pasas varias propiedades de un objeto complejo
a variables simples de una forma practica.
*/
var avenger = {
  nombre: 'Steve',
  clave: 'Capitan America dark',
  poder: 'Drogasss'
};
var nombre2 = avenger.nombre;
var clave2 = avenger.clave;
var poder2 = avenger.poder;
//desestructuracion old schooll
/////////////////////////AHORA CON ES6 ///////////////
//ahora en una sola linea de código desmontamos en
//variables individuales las propiedades del objeto,
// da igual el orden de las propiedades al desesctructurarlo,
// lo importante es que existan en el objeto.
//GENERO 3 VARIABLES QUE SON PROPIEDADES DEL OBJETO AVENGER
var clave = avenger.clave,
  poder = avenger.poder,
  nombre = avenger.nombre;
console.log(nombre, clave, poder);
//tambien sirve en arrays, solo que se desestructura por posicion.
var avengersArray = ['Thor', 'Steve', 'Tony'];
// en este caso no tira del nombre de la propiedad
//tira de la posicion del array, por eso loki tiene de valor thor.
var loki = avengersArray[0],
  capi = avengersArray[1],
  ironMan = avengersArray[2];
console.log(avengersArray);
