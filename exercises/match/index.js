// --- Directions
// Write a function that returns the matching pair of two numbers which add up to a given sum
// --- Examples
//   match(8, [1,2,3,9]) --> none
//   match(8, [1,2,4,4]) --> [4, 4]
//   match(10, [6,1,4,2]) --> [4,6]

function match(finalSum, numbers) {
  while (numbers.length > 0) {
    let nr = numbers.pop();
    for (let i = 0; i < numbers.length; i++) {
      if (nr + numbers[i] === finalSum) {
        return [nr, numbers[i]].sort();
      }
    }
  }
  return [];
}

module.exports = match;
