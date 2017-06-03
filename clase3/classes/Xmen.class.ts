export class Xmen{
  nombre_xmen:string;
  clave:string;

  constructor(nombre_xmen:string, clave:string) {
    this.nombre_xmen = nombre_xmen;
    this.clave = clave;
  }

  imprimir(){
    console.log(`${this.nombre_xmen} - ${this.clave}`);
  };
}
