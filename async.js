function maior(x, y) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x > y) {
        resolve({ status: 200, msg: 'Maior' });
      } else {
        reject({ status: 400, msg: 'Valores inválidos' });
      }
    }, 15);
  });
}

(async () => {
  console.log('1 - ' + new Date());

  maior(1, 2)
    .then(res => console.log(JSON.stringify(res)))
    .catch(err => console.log(JSON.stringify(err)));

  console.log('2 - ' + new Date());

  try {
    const res = await maior(1, 2);
    console.log(JSON.stringify(res));
  } catch (err) {
    console.log(JSON.stringify(err));
  }

  console.log('3 - ' + new Date());
})();
