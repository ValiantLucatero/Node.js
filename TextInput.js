const async = require('async');
const debug = require('debug');
const info = debug('index:info');
const error = debug('index:error');

const readline = require('readline');

let input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pedirCafe(cb) {
  setTimeout(() => {
    console.log('Quiero un café');
    cb();
  }, 2000);
}

function obtenerCafe(cb) {
  setTimeout(() => {
    console.log('Compré café');
    let err = (Date.now() % 2) ? null : new Error ('No es hora de café');
    cb(null, 'Estado emocional: :)')
  }, 2000);
}

function checarEstadoEmocional(emocion, cb) {
  setTimeout(function () {
    console.log(emocion);
    cb();
  }, 2000);
}

input.on('line', (line) => {
  if(line == 'exit'){
    process.exit(0);
  }
  console.log('Hola ' + line);
});

// pedirCafe(() => {
//   obtenerCafe((err, emocion) => {
//     if (err)
//     {
//       return err;
//     }
//     checarEstadoEmocional(emocion, () => {
//       console.log('El highlight de mi vida se acabó');
//     });
//   });
// });

// async.waterfall([
//   pedirCafe,
//   obtenerCafe,
//   checarEstadoEmocional,
// ], (err, cb) => {
//   if (err) {
//    error(error.message)
//   }
//   console.log('El highlight de mi vida se acabo');
// });

// let p = new Promise(function(resolve, reject){
//   pedirCafe(resolve);
// })
//   .then(new Promise(function(resolve, reject) {
//   obtenerCafe(resolve);
// }))
// .then(new Promise(function(resolve, reject) {
//   checarEstadoEmocional(resolve);
// }))
// .catch((err) => {
//   error(err.message);
// });

let p = Promise.promisify(pedirCafe),

//input.question('Dame tu nombre:\n', (nombre) => {
//  console.log('Hola ' + nombre);
//});

//input.close();
error('Se acabó la interpretación');
