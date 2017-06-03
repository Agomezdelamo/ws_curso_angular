"use strict";
//parametros obligatorios,  opcionales y por defecto
//ahora a no ser que lo espeifiques, todos los
//parametros de una funcion son obligatorios.
function activar(quien, cacharro, //parametro con valor por defecto, sino lo pasas por parametro tiene ese valor
    momento) {
    if (cacharro === void 0) { cacharro = "batseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " ha activado la " + cacharro + " " + momento;
        console.log(mensaje);
    }
    else {
        mensaje = quien + " ha activado la " + cacharro;
        console.log(mensaje);
    }
}
activar("Gordon");
activar("La hija de gordon", "batwomanSeñal");
activar("La hija de gordon", "batwomanSeñal", "hoy");
