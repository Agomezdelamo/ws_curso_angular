let nombre1:string ="Juan"
let apellido:string = "Perez"
let edad:number = 32;
function getNombre() {
  return "Fernando";
}
//plantilla de string literales
let texto:string = `Hola,
${ nombre1 }
${ apellido }
(${ edad })
${ 1 + 2 }
${ getNombre()}
`;


console.log(texto);
