//const Promise = require ("bluebird");
const readline = require("readline");

let input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class cake {
  constructor(flavour, size) {
    this.flavour = flavour;
    this.size = size;
  }
}

function cook(arr) {
    inter = arr.toString().split("-");
    obj = new cake(inter[0].toString(), inter[1].toString());
    return obj;
}

input.on('line', (line) => {
  check = line.split(", ");
  if (check.length % 2 == 0)
  {
    for (var i = 0; i < check.length; i++) {
      fast = cook(check[i]);
      console.log(JSON.stringify(fast));
    }
    extra = new cake("carne", "grande");
    console.log(JSON.stringify(extra));
    input.prompt();
  }
  else if (check.length % 3 == 0)
  {
    console.log("No puedo aceptar listas que sean multiplos de 3 de largo");
    input.prompt();
  }
  else
  {
    for (var i = 0; i < check.length; i++) {
      fast = cook(check[i]);
      console.log(JSON.stringify(fast));
    }
  input.prompt();
  }
});

console.log("Dame una lista de pasteles, su sabor y tamaño separados por un dash(-) y separados entre ellos por una coma y un espacio(, ). Ejemplo:\nchocolate-grande, vainilla-mediano, nuez-chico");
input.prompt();

// function cook(arr){
//   return arr.toString().split("-").then(function(inter) {
//     return new cake (inter[0].toString(), inter[1].toString());
//   });
// }

// function bake(line) {
//   .then ((line) => {
//     return line.split(", ");
//   })
//   .then ((check) => {
//
//   })
// }
