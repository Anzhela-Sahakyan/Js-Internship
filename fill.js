function fill(array, value, start = 0, end = array.length) {
  if (start < 0) {
    start += array.length;
  }
  if (end < 0) {
    end += array.length;
  }
  for (let i = start; i < end; i++) {
    array[i] = value;
  }
  return array;
}

const array1 = [1, 2, 3, 4];

console.log(fill(array1, 6, -1));
