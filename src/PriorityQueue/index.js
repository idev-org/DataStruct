import Queue from '../Queue';

class PriorityQueue extends Queue {
  enqueue(element) {
    if (this.empty) {
      return this.collection.push(element);
    }
    let added = false;
    for (let i = 0; i < this.collection.length; i += 1) {
      if (element[1] > this.collection[i][1]) {
        this.collection.splice(i, 0, element);
        added = true;
        break;
      }
    }
    if (!added) {
      this.collection.push(element);
    }
    return true;
  }
}

export default PriorityQueue;
