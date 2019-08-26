class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.Node = class {
      constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
      }
    };
  }

  getSize() { return this.length; }

  getHead() { return this.head; }

  add(element) {
    const NodeClass = this.Node;
    const node = new NodeClass(element);
    if (this.head === null) this.head = node;
    else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      node.prev = currentNode;
      currentNode.next = node;
    }
    this.length += 1;
  }

  remove(element) {
    if (this.head == null) return false;
    let currentNode = this.head;
    let previousNode;
    if (currentNode.element === element) {
      this.head = currentNode.next;
      this.head.prev = null;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      if (currentNode.next) currentNode.next.prev = previousNode;
      previousNode.next = currentNode.next;
    }

    this.length -= 1;
    return currentNode.element;
  }

  isEmpty() { return this.length === 0; }

  indexOf(element) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index += 1;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count += 1;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  nodeAt(index) {
    let currentNode = this.head;
    let count = 0;
    while (count < index) {
      count += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  addAt(index, element) {
    const NodeClass = this.Node;
    const node = new NodeClass(element);

    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;

    if (index > this.length) return false;

    if (index === 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (currentIndex < index) {
        currentIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      node.prev = previousNode;
      previousNode.next = node;
    }
    this.length += 1;
  }

  removeAt(index) {
    if (this.head == null) return false;
    let currentNode = this.head;
    let previousNode;
    let currentIndex = 0;
    if (index < 0 || index >= this.length) return false;
    if (index === 0) {
      if (currentNode.next) currentNode.next.prev = null;
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex += 1;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode.next) currentNode.next.prev = previousNode;
      previousNode.next = currentNode.next;
    }
    this.length -= 1;
    return currentNode.element;
  }

  clear() {
    this.length = 0;
    this.head = null;
  }
}

export default LinkedList;
