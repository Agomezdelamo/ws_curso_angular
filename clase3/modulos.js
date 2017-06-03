"use strict";
//import { Xmen } from "./classes/Xmen.class"
//import { Villano } from "./classes/Villano.class"
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./classes/index");
var ciclope = new index_1.Xmen("Scot Summers", "Ciclope");
ciclope.imprimir();
var magneto = new index_1.Villano("Magneto", "dominar el mundo");
magneto.imprimirPlan();
