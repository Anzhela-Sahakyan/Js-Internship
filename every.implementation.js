function every(func) {
  return func;
}

function findBelowZero(element, index, array) {
  return element < 0;
}

console.log(every(findBelowZero(55)));
