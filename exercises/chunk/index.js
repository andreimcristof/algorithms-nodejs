// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const newSlice = array.slice(index, index + size);
    chunked.push(newSlice);
    index += size;
  }
  return chunked;
}

// function chunk(array, size) {
//   array = array.reverse();
//   let result = [];
//   let t = [];
//   while (array.length > 0) {
//     t.push(array.pop());
//     if (t.length === size || array.length == 0) {
//       result.push(t);
//       t = [];
//     }
//   }
//   return result;
// }

module.exports = chunk;
