class Perro
{
  constructor(nombre, raza = 'Cruza')
  {
    this.nombre = nombre;
    this.raza = raza;
  }
  ladrar(ladrido = 'Woof')
  {
    console.log(arguments);
    console.log(this.nombre, '-' ,ladrido);
  }
}

class Gato
{
  constructor(nombre, raza = 'Cruza')
  {
    this.nombre = nombre;
    this.raza = raza;
  }
}

let fido = new Perro('Fido');
let manchas = new Perro('Manchas');
let bigotes = new Gato('Bigotes');

if (bigotes instanceof Perro)
{
  console.log("Bigotes ha evolucionado");
}
else
{
  console.log("Bigotes sigue siendo un gato :(");
}

fido.ladrar(1,2,3,4,5,6,7,'hola',45.8);
manchas.ladrar();
