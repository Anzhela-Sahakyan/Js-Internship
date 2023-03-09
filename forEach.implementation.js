function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, array);
  }
}

let func = (element) => console.log(element);

forEach(["a", "b", "c"], func);
