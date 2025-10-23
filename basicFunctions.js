// ====================================================================
// Função MAP — percorre o array e aplica uma função em cada elemento.
// Retorna um novo array com os resultados.
// É uma função de ordem superior (recebe outra função como argumento)
// e é imutável (não altera o array original).
// ====================================================================
console.log('--MAP--')

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


// ====================================================================
// Função FILTER — percorre o array e aplica uma função condicional.
// Retorna um novo array apenas com os elementos que passam no teste.
// É uma função pura e imutável (não altera o array original).
// ====================================================================
console.log('--FILTER--')

function odd(x) {
  return x % 2 === 0;
}

let numbers = [0, 1, 2, 4, 6, 8, 9];

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


// ====================================================================
// Função REDUCE — percorre o array acumulando os valores em uma variável.
// Recebe uma função com dois parâmetros: acumulador e valor atual.
// É uma função de agregação e também de ordem superior.
// ====================================================================
console.log('--REDUCE--')

let array = [38, 31, 20, 100, 6, 5];

function biggest(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function sum(x, y) {
  return x + y;
}

function reduce(array, initialValue, callback) {
  var temp = initialValue;

  for (var i = 0; i < array.length; i++) {
    temp = callback(temp, array[i]);
  }

  return temp;
}

let reduceFunctionB = reduce(array, 0, biggest);
let reduceNatB = array.reduce((acc, curr) => biggest(acc, curr), 0);

console.log(reduceFunctionB);
console.log(reduceNatB);

let reduceFunctionS = reduce(array, 50, sum);
let reduceNatS = array.reduce((acc, curr) => sum(acc, curr), 50);

console.log(reduceFunctionS);
console.log(reduceNatS);
