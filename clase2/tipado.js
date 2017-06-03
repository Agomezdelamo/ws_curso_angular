"use strict";
//tipado en typscript
var nombreS = "Peter";
//tambien se tipa si no especificas el tipo,
//con lo que let nombre = "Peter" no podria ser number.
var numero = 123;
var booleano = true;
var hoy = new Date();
var otrafecha = new Date('2020-10-21');
console.log(otrafecha);
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
//si definimos un objeto
// no se puede alterar despue s desde una variable
// es como si en java intentas redefinir la clase String
var spiderman = {
    nombre: "Peter",
    edad: 20
};
