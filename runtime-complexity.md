# Runtime complexity

- direct 1 to 1 relationship between nr of input to algorithm and nr of operations = "linear" runtime.

- in the matrix problem, the operation was n^2 - quadratic runtime

## Runtimes list

- **Constant runtime 1** - no matter the amount of inputs to algorithm, its always the same time of execution.

- **Logarithmic time log(n)** - if doubling the number of elements doesnt double the amount of work. searching operations are log(n)

- **Linear time n** - Iterating through all elements in a collection. iteration from 0 to x.length is linear time.

- **Quasilinear time n\*log(n)** - if doubling the number of elements doesnt double the amount of work. sorting operations are n\*log(n)

- **Quadratic time n^2** - Each new element has to deal with all already existing elements in the collection (the handshake problem)

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

What needs to happen is that whenever you call e.g. fib(5), the list of fib() calls should be exactly once for every n <= 5. The way to do this is memoization.

**Memoization** means recording the arguments of each function call such as if it's called again it's taking the precomputed result instead of running the function again.

## Data Structures

- they are all about runtime complexity

- a DS is some way of organizing information of data in a program with some optimal "runtime complexity" for adding or removing records

- when asked at an interview to solve a given problem, think in terms of "what DS can i use that is optimal for the problem we are trying to solve".

- knowledge about suboptimal DS is also desired.

### Queues

- adding to queue - enqueue-ing
- removing from queue - dequeue-ing
- queues are always FIFO.
- in JS there is no queue. You can emulate a queue in JS with the methods:
  - adding to front of array - `unshift()`
  - removing from the end of array - `pop()`
- making a queue in JS means making a class that operates an array and exposing only add / remove methods and hiding other array methods such as splice. This is when you want to make a queue but dont want to treat it like an array.

### Stacks

- FILO - first in, last out
- stack methods:
  - push - add a record to stack
  - pop - remove top record in the stack
  - peek (optional) - return the top record without removing it

### Linked Lists

- ordered collection of data
- the collection contains nodes
- each node has some amount of data, and a reference to the next node
- also called "chain of nodes strung together"
- the order of nodes is always maintained
- in every linked list there are always 2 special nodes:
  - head node - first node
  - tail node - last node
    - tail node has no reference to another node
- any type of data can be contained in a node
- what is a reference to another node in JS?
  - e.g. linkedlist

```
const nodeOne = {
  data: 1234
}

const nodeTwo = {
  data: 1234
}

nodeOne.next = nodeTwo;
```

- By convention, props are:
  - `data`
  - ref is called `next`

### Trees

- tree traversal (iteration) - common interview theme
- done in 2 ways (2 orders)
  - breadth-first traversal - iterate each level of the tree from left to right (even if they have different parent nodes)
    - start with array with just root inside it; while array still has nodes, foreach node: remove node, run predicate function on node, insert children of node in array. see implementation
  - depth-first traversal - start at top, go down left side as far as possible, then go back a level and then go down again on next node, etc.

#### Breadth-first in-depth

- **given the root node of a tree, return an array where each element is the width of the tree at each level**
  - the requirement of _width_ always implies breadth-first since it traverses on levels of nodes.

### Binary Search Trees

- every node can have at most 2 children.
- nodes can place more restrictions on the type of data that the children contain (e.g. for integer data, left child node could contain a value less than parent, and the child right node could contain always a value greater than parent).
- the term "search" in BST enforces requirements on the data contained in the nodes, that it respects these conditions. If we remove the term "search" and we have Binary Trees, these can contain data that does not fit in the strict requirements for each parent nodes.
- in an interview setting you should ask if its a BST (restricted data on child nodes) or a BT (no data restriction, anything goes).
- another common question in an interview setting is "validate" that this is a well formed BST (e..g in this particular case every node has 2 children, and left child nodes all are less than parent, and right child nodes are always greater than parent)

## Sorting

- BubbleSort - n^2 quadratic complexity - easiest
- SelectionSort - n^2 quadratic complexity - easier
- MergeSort - n\*log(n) - medium

- so BubbleSort and SelectionSort are v slow for large collections, but good at small collections (e.g. < 100 elements)
