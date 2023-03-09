function find(array, cb) {
  for (let i = 0; i < array.length; i++) {
    let currentItem = cb(array[i], i, array);
    if (currentItem) {
      return array[i];
    }
  }
  return -1;
}

const func = (element) => element > 100;

console.log(find([5, 12, 8, 130, 44], func));
