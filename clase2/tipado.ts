//tipado en typscript
let nombreS:string = "Peter";
//tambien se tipa si no especificas el tipo,
//con lo que let nombre = "Peter" no podria ser number.

let numero:number = 123;
let booleano:boolean = true;
let hoy:Date = new Date();
let otrafecha:Date = new Date('2020-10-21');

console.log(otrafecha);

let cualquiera:any;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

//si definimos un objeto
// no se puede alterar despue s desde una variable
// es como si en java intentas redefinir la clase String
let spiderman = {
  nombre: "Peter",
  edad: 20
}
