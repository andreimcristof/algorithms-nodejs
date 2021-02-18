// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertAt(
    data,
    index,
    currentNode = this.head,
    previous = null,
    currentIndex = 0
  ) {
    if (!this.head || index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index === currentIndex || !currentNode) {
      previous.next = new Node(data, currentNode);
      return;
    }

    this.insertAt(data, index, currentNode.next, currentNode, ++currentIndex);
  }

  insertLast(data) {
    if (this.head == null) {
      this.insertFirst(data);
      return;
    }

    this.getLast().next = new Node(data);
  }

  getFirst() {
    return this.head;
  }

  getAt(index, currentNode = this.head, currentIndex = 0) {
    if (!currentNode) return null;
    if (index === currentIndex) return currentNode;

    return this.getAt(index, currentNode.next, ++currentIndex);
  }

  getLast(nextNode = this.head) {
    if (!this.head) return null;

    if (!nextNode.next) return nextNode;

    return this.getLast(nextNode.next);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    this.head = this.head.next;
  }

  removeAt(index, currentNode = this.head, previous = null, currentIndex = 0) {
    if (!currentNode) return;

    if (index === 0) {
      this.removeFirst();
      return;
    }

    if (index === currentIndex) {
      previous.next = currentNode.next;
      return;
    }

    this.removeAt(index, currentNode.next, currentNode, ++currentIndex);
  }

  removeLast(currentNode = this.head, previous = null) {
    if (!currentNode) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    if (!currentNode.next) {
      previous.next = null;
      return;
    }

    this.removeLast(currentNode.next, currentNode);
  }

  size(currentSize = 0, nextNode = this.head) {
    if (!nextNode) return currentSize;

    return this.size(++currentSize, nextNode.next);
  }
}

module.exports = { Node, LinkedList };
