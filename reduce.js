const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];

const sum = arr.reduce((acc, curr) => {
  if (curr > 18) {
    return acc + curr;
  } else {
    return acc;
  }
}, 0);

console.log(sum);
