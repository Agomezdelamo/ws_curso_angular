interface XmenInterface {
  nombre:string,
  poder: string
}

function enviarMision(xmen:XmenInterface) {
  console.log("enviando a: " + xmen.nombre);
}

let wolverine:XmenInterface = {
  nombre: "wolverine",
  poder: "Regeneracion"
}

enviarMision(wolverine);
