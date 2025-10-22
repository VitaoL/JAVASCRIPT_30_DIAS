
// Função MAP — percorre um array aplicando uma função a cada elemento
// e retorna um novo array com os resultados da função aplicada.

let sequencial = [0, 1, 2, 3];

function sucessor(x) {
  return x + 1;
}

function map(array, callback) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const mapFunction = map(sequencial, sucessor);
const mapNat = sequencial.map(sucessor);
console.log(mapFunction);
console.log(mapNat);


// Função FILTER — percorre um array aplicando uma função condicional
// e retorna um novo array apenas com os elementos que passam na condição.

function odd(x) {
  return x % 2 === 0;
}
let numbers = [0,1,2,4,6,8,9]
function filter(array, callback) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const filterFunction = filter(numbers, odd);
const filterNat = numbers.filter(odd);
console.log(filterFunction);
console.log(filterNat);
