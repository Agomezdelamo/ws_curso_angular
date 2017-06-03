"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villano = (function () {
    function Villano(nombre_villano, plan) {
        this.nombre_villano = nombre_villano;
        this.plan = plan;
    }
    Villano.prototype.imprimirPlan = function () {
        console.log("Soy " + this.nombre_villano + " y mi plan es  " + this.plan);
    };
    ;
    return Villano;
}());
exports.Villano = Villano;
