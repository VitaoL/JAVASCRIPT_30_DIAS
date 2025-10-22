function helloWorld() {
  return 'Hello World';
}

console.log(helloWorld());

function sumIndex(array) {
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    newArray.push(array[i] + i)
  };
  return newArray;
}


console.log(sumIndex([0,1,2,3,4]));
