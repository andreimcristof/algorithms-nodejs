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
// runtime is O(n), so linear runtime -  as the amount of work is incremented linearly foreach element from 0 until n

// my own version of recursion fib - runtime O(n)
// function fib(n, sequence = [0, 1]) {
//   if (sequence.length > n) {
//     return sequence[sequence.length - 1];
//   }
//   const first = sequence[sequence.length - 2];
//   const second = sequence[sequence.length - 1];
//   sequence.push(first + second);

//   return fib(n, sequence);
// }

// grider's recursion fib
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
module.exports = fib;
