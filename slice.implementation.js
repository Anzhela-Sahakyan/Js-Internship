function slice(array, start = 0, end = array.length) {
  if (start < 0) {
    start = start + array.length;
  }
  if (start >= array.length) {
    return;
  }
  if (end < 0) {
    end = end + array.length;
  }
  let newArray = [];
  for (let i = start; i < end; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], -2));
