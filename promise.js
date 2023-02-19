let t = 0;
new Promise((resolve, reject) => {
  setTimeout(() => {
    t = 50;
    console.log(t);
    return resolve('hola');
  }, 500);
})
  .then(() => {
    t = 30;
    while(t < 60){
      t++;
      console.log(t);
    }
  })
  .catch((err) =>);
