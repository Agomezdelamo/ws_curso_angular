//funciones flecha, son una novedad de ecma script 6

//NORMAL
let miFuncion = function ( a:any ) {
  return a;
}
//FLECHA
let miFuncionFlecha = a => a;

console.log(miFuncion("normal"));
console.log(miFuncionFlecha("flecha"));

let miFuncion2 = function ( a:number, b:number ) {
  return a + b;
}

let miFuncionFlecha2 = ( a:number, b:number ) => a + b;

let miFuncion3 = function ( nombre:string ) {
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFuncionFlecha3 = ( nombre:string ) =>{
  nombre = nombre.toUpperCase();
  return nombre;
}


//explicaion flecha this

let hulk:any = {
  nombre: "Bruce",
  smash(){
    setTimeout( function() {
      console.log(this.nombre + " smash!!"); //this apunta a window
    }, 2000);
  }
}

hulk.smash();

let hulk2 = {
  nombre: "Bruce",
  smash(){
    setTimeout( ()=> {
      console.log(this.nombre + " smash!!"); //this apunta a hulk2
    }, 2000);

    //forma moderna para funciones con un retorno solo, en una linea
    setTimeout( ()=> console.log(this.nombre + " smash!!"),3000); //this apunta a hulk2
  }
}
hulk2.smash();
