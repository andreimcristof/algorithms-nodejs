// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // console.log("arr", arr);
      // console.log("j+1", arr[j + 1], "j", arr[j]);
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        // we found an element with lesser value. we update indexOfMin to look at it now
        indexOfMin = j;
      }
    }
    // if it was swapped during iteration, it means a lesser one was found, so it needs to be swapped
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  let left = arr.slice(0, center);
  let right = arr.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      const firstLeft = left.shift();
      results.push(firstLeft);
    } else {
      const firstRight = right.shift();
      results.push(firstRight);
    }
  }

  // if anyting is left in these arrays just push the remaining elements in results
  // the order doesnt matter, adding left vs right first, because one of them will always be empty (due to the while which was stopping only then)
  if (left.length > 0) results = [...results, ...left];
  if (right.length > 0) results = [...results, ...right];
  return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
