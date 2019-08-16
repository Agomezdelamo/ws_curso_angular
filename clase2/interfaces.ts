interface XmenInterface {
  nombre: string;
  poder: string;
}

function enviarMision(xmen: XmenInterface) {
  console.log('enviando a: ' + xmen.nombre);
}

let wolverine: XmenInterface = {
  nombre: 'wolverine3',
  poder: 'Regeneracion'
};

enviarMision(wolverine);
