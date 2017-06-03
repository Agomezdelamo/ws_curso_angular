"use strict";
// una promesa es la capacidad de ejecutar una funcion
//despues de que una tarea asincrona es terminada.
//recibe 2 parametros que son dos funciones que lanzaremos
// si la promesa va bien o va mal.
//la funcion que recibe la promesa se ejecuta en la creacion
//del objeto
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Promesa terminada');
        //Termina bien
        resolve();
        //Termina mal
        //reject();
    }, 3000);
});
console.log("Paso 1");
//en esta invocación de promise, ejecutamos la lógica del resolve y
//el reject.
prom1.then(function () {
    console.log("Ejecutarme si todo va bien");
}, function () {
    console.error("Ejecutarme si todo va mal");
});
console.log("Paso 2");
