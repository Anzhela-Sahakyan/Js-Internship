function sortBy(arr, str) {
  if (str === "Asc".toLowerCase()) {
    return arr.sort((a, b) => a - b);
  } else if (str === "Desc".toLowerCase()) {
    return arr.sort((a, b) => b - a);
  }
  return arr;
}

console.log(sortBy([8, 7, 11, 66], "asc"));
