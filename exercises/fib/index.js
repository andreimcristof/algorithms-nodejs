// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let sequence = [0, 1];

//   while (sequence.length <= n) {
//     let first = sequence[sequence.length - 2];
//     let second = sequence[sequence.length - 1];
//     sequence.push(first + second);
//   }
//   return sequence[sequence.length - 1];
// }

function fib(n, sequence = [0, 1]) {
  if (sequence.length > n) {
    return sequence[sequence.length - 1];
  }
  const first = sequence[sequence.length - 2];
  const second = sequence[sequence.length - 1];
  sequence.push(first + second);

  return fib(n, sequence);
}

module.exports = fib;
