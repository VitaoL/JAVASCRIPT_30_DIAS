function maior (x, y) {
  return new Promise((resolve, reject) => {
    if (x > y) {
      setTimeout(() => resolve({ status: 200, msg: 'Maior' }), 15);
    } else {
      // rejeita com objeto simples (serializa fácil)
      setTimeout(() => reject({ status: 400, msg: 'Valores inválidos' }), 15);
    }
  });
}

maior(1, 2)
  .then(result => console.log(JSON.stringify(result)))
  .catch(err => console.log(JSON.stringify(err)));
