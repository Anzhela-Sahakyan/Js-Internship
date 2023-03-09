function findIndex(array, cb) {
  currentItem = "";
  for (let idx = 0; idx < array.length; idx++) {
    currentItem = cb(array[idx], idx, array);

    if (currentItem) {
      return (currentItem = array[idx]);
    }
  }
  return -1;
}

const func = (element) => element > 13;

console.log(findIndex([5, 12, 8, 130, 44], func));
