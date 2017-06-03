//parametros obligatorios,  opcionales y por defecto

//ahora a no ser que lo espeifiques, todos los
//parametros de una funcion son obligatorios.
function activar (  quien:string,
                    cacharro:string = "batseñal", //parametro con valor por defecto, sino lo pasas por parametro tiene ese valor
                    momento?:string ) { //parametro opcional, puede o no ir

  let mensaje:string;

  if( momento ) {
  mensaje = `${quien} ha activado la ${cacharro} ${momento}`;
  console.log(mensaje);
} else{
  mensaje = `${quien} ha activado la ${cacharro}`;
  console.log(mensaje);

}
}

activar("Gordon");

activar("La hija de gordon", "batwomanSeñal");
activar("La hija de gordon", "batwomanSeñal", "hoy");
