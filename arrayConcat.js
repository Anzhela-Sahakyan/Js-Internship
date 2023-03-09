const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8, 9];

// const thirdArray = firstArray.concat(secondArray);

const thirdArray = [...firstArray, ...secondArray];

console.log(thirdArray);
