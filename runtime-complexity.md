# Runtime complexity

- direct 1 to 1 relationship between nr of input to algorithm and nr of operations = "linear" runtime.

- in the matrix problem, the operation was n^2 - quadratic runtime

## Runtimes list

- **Constant runtime 1** - no matter the amount of inputs to algorithm, its always the same time of execution.

- **Logarithmic time log(n)** - if doubling the number of elements doesnt double the amount of work. searching operations are log(n)

- **Linear time n** - Iterating through all elements in a collection. iteration from 0 to x.length is linear time.

- **Quasilinear time n\*log(n)** - if doubling the number of elements doesnt double the amount of work. sorting operations are n\*log(n)

- **Quadratic time n^2** - every element in a collection needs to be compared to every other element. Each new element has to deal with all already existing elements in the collection (the handshake problem)

- **Exponential time 2^n** - a single element added to a collection doubles the amount of processing power required.

- interviews need recognition of a slow algorithm and a proposed solution of a better algorithm.

## Big O Notation

- "what is the runtime , the efficiency of the solution?"

- O(n) - Linear runtime
- O(1) - constant runtime
- O(n^2) - quadratic runtime

### Identifying Runtime Complexity

- for iteration of a single collection - linear runtime usually - O(n)
- iterating through half a collection? - still O(n). There are no constants in runtime.
- iterating through 2 different collections with separate for loops - O(n+m)- runtime complexity is split to two separate terms
- two nested for loops iterating same collection - quadratic runtime O(n^2)
- two nested for loops but iterating different collections - O(n * m) - its not n^2 because collections might have different lengths. But since n^2 is n*n, n\*m is very close to it.
- sorting problems? O(n\*log(n))
- searching a sorted array - O(log(n))

### Space Complexity

- reference to how much RAM an algorithm needs.
- usually very similar to runtime complexity:
  - e.g. for a linear runtime on a given set of data, the amount of memory was linear too, becasue for every 1 additional character, we need 1 additiional element in the string to be added.

### Memoization

Problem with fib exponential time solution: for every additional element we get a dramatic increase in calculation necessary - runtime complexity is exponential time because the tree of calls is parsed again for each additional number.

What needs to happen is that whenever you call e.g. fib(5), the list of fib() calls should be exactly once for every n <= 5.
The way to do this is memoization.

**Memoization** means recording the arguments of each functioncall such as if its called again its taking the precomputed result instead of running the function again.