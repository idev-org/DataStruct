class Stack {
  constructor() {
    this.count = 0;
    this.dataStore = [];
  }

  push(element) {
    this.dataStore[this.count] = element;
    this.count += 1;
  }

  pop() {
    if (this.count === 0) return undefined;
    this.count -= 1;

    const result = this.dataStore[this.count];
    this.dataStore.splice(this.count, 1);
    return result;
  }

  get length() {
    return this.count;
  }

  peek() {
    return this.dataStore[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.dataStore.length = 0;
  }
}

export default Stack;
