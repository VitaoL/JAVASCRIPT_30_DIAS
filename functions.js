// Function Composition
// fn1(fn2(fn3()))....
// Primeiro vamos fazer o seguinte vamos 
// fazer um loop comecando pole ultimo e ir executando as funcoes
const sucessor = x => x + 1;
const precedente = x => x - 1;
const double = x => x * 2;
function composition(functions) {
  return function (x) {
    for (var i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x); 
    }
    return x; 
  };
}
const fn = composition([precedente, double, sucessor]);
console.log(fn(2));
//ReduceRight
const reduceRight = [precedente, double, sucessor].reduceRight((acc, curr) => curr(acc), 2);
console.log(reduceRight);
