"use strict";
var nombre1 = "Juan";
var apellido = "Perez";
var edad = 32;
function getNombre() {
    return "Fernando";
}
//plantilla de string literales
var texto = "Hola,\n" + nombre1 + "\n" + apellido + "\n(" + edad + ")\n" + (1 + 2) + "\n" + getNombre() + "\n";
console.log(texto);
