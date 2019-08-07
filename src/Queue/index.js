class Queue {
  constructor() {
    this.collection = [];
  }

  /**
   * @param {*} value
   * @returns undefined
   */
  enqueue(value) {
    this.collection.push(value);
  }

  /**
   * @returns {array} new form of queue
   */
  dequeue() {
    return this.collection.shift();
  }

  /**
   * @returns {*} first element of queue
   */
  get front() {
    return this.collection[0];
  }

  /**
   * @returns {number} length of queue
   */
  get size() {
    return this.collection.length;
  }

  /**
   * @returns {boolean} state of empty queue
   */
  get empty() {
    return !this.collection.length;
  }
}

export default Queue;
