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
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }
/* for every additional element we get a dramatic increase in calculation necessary - runtime complexity is exponential time
because the tree of calls is parsed again for each additional number.

What needs to happen is that whenever you call e.g. fib(5), the list of  fib() calls should be exactly once for every n <= 5.
The way to do this is memoization:

memoization means recording the arguments of each functioncall such as if its called again its taking the precomputed result instead of 
running the function again:
*/

function memoize(fn) {
  const cache = {};
  // ""...args" when the count of args is unknown
  return function (...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
fib = memoize(fib);

module.exports = fib;
