export class Villano{
  nombre_villano:string;
  plan:string;

  constructor(nombre_villano:string, plan:string) {
    this.nombre_villano = nombre_villano;
    this.plan = plan;
  }

  imprimirPlan(){
    console.log(`Soy ${this.nombre_villano} y mi plan es  ${this.plan}`);
  };
}
