function splice(array, start, deleteCount, ...items) {
  const originalLength = array.length;

  if (start >= originalLength) {
    return [];
  }
  if (start < 0) {
    start += array.length - 1;
  }
  if (deleteCount > array.length) {
    deleteCount = array.length - start;
  }

  let deletedElements = [];
  for (
    let i = start;
    i < Math.min(start + deleteCount, originalLength - start + 1);
    i++
  ) {
    deletedElements.push(array[i]);
    array[i] = array[i + deleteCount];
  }

  for (let i = 0; i < Math.min(deleteCount, originalLength - start); i++) {
    if (start >= Math.min(start + deleteCount, originalLength - start + 1)) {
      deletedElements.push(array.pop());
      continue;
    }
    array.pop();
  }
  const arrLengthAfterRemovals = array.length;
  for (let i = start; i < items.length + start; i++) {
    array[arrLengthAfterRemovals + i - start] = array[i];
    array[i] = items[i - start];
  }
  return deletedElements;
}

let arr = ["Jan", "March", "April", "June", "May"];
console.log(splice(arr, 1, 3, "July", "Sept"), arr);
