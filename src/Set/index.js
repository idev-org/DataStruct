class Set {
  constructor(arr) {
    this.collection = arr || [];
  }

  has(element) {
    return (this.collection.indexOf(element) !== -1);
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      const indexOfElement = this.collection.indexOf(element);
      this.collection.splice(indexOfElement, 1);
      return true;
    }
    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    const unionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    });
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  subset(otherSet) {
    const firstSet = this.values();
    return firstSet.every(value => otherSet.has(value));
  }
}

export default Set;
