"use strict";
//funciones flecha, son una novedad de ecma script 6
//NORMAL
var miFuncion = function (a) {
    return a;
};
//FLECHA
var miFuncionFlecha = function (a) { return a; };
console.log(miFuncion("normal"));
console.log(miFuncionFlecha("flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncionFlecha2 = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncionFlecha3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
//explicaion flecha this
var hulk = {
    nombre: "Bruce",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " smash!!"); //this apunta a window
        }, 2000);
    }
};
hulk.smash();
var hulk2 = {
    nombre: "Bruce",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " smash!!"); //this apunta a hulk2
        }, 2000);
        //forma moderna para funciones con un retorno solo, en una linea
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 3000); //this apunta a hulk2
    }
};
hulk2.smash();
