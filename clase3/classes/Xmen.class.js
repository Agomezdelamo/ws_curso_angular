"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Xmen = (function () {
    function Xmen(nombre_xmen, clave) {
        this.nombre_xmen = nombre_xmen;
        this.clave = clave;
    }
    Xmen.prototype.imprimir = function () {
        console.log(this.nombre_xmen + " - " + this.clave);
    };
    ;
    return Xmen;
}());
exports.Xmen = Xmen;
