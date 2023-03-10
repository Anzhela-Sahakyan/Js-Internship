function filter(array, cb = () => {}) {
  const newArray = [];

  for (let idx = 0; idx < array.length; idx++) {
    const currentItem = cb(array[idx], idx, array);
    newArray.push(currentItem);
  }

  return newArray;
}

const array = [1, 2, 3, 4];

const newArray = filter(array, (item) => item * 2);

console.log(newArray);
