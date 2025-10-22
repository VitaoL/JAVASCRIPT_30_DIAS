function helloWorld() {
  return 'Hello World';
}

function sumIndex(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i] + i)
  };
  return newArray;
}

console.log(helloWorld());