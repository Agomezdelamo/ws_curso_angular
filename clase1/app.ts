//declaracion de tipo
function saludar (nombre:string) {
 console.log("Hola " + nombre.toUpperCase());
}


var wolwerine = {
  nombre: "Logan"
};

saludar(wolwerine.nombre);

//1. para compilar una vez typescript el comando es:
//tsc nombredearchivo.ts

//2. para compilar siempre un archivo el comando es:
//tsc app -w

//3. para transformar un proyecto a typescript el comando es:
//tsc -init
//3.1. para compilar todo el proyecto y sus archivos ahora solo hay que ejecutar este comando:
//tsc
