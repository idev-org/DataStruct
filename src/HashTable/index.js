class HashTable {
  constructor(storageLimit) {
    this.storage = [];
    this.storageLimit = storageLimit;
  }
  
  hash(string, max) {
    let charCode = 0;

    for (let i = 0; i < string.length; i++) {
      charCode += string.charCodeAt(i);
    }

    return charCode % max;
  };
  
  find(key) {
    const hashIndex = this.hash(key, this.storageLimit);
 
    if (this.storage[hashIndex] !== undefined) {
      const found = this.storage[hashIndex].find((table) => table[0] === key);
      return { found, hashIndex };
    }
    
    return {hashIndex}
  }
  
  add(key, value) {
    const { found, hashIndex } = this.find(key);
    
    if (this.storage[hashIndex] === undefined) {
      this.storage[hashIndex] = [[key, value]];
      return true;
    } else {
      if (!found) {
        this.storage[hashIndex].push([key, value]);
        return true;
      }
    }

    return false;
  }

  update(key, value) {
    const { found } = this.find(key);
 
    if (found) {
      found[1] = value;
      return true;
    }
  
    return false;
  }
  
  remove(key) {
    const { found, hashIndex } = this.find(key);
  
    if (found) {
      const foundIndex = this.storage[hashIndex].findIndex((table) => table === found);
      this.storage[hashIndex].splice(foundIndex, 1); 
      return true;
    }
  
    return false;
  }
  
  lookUp(key) {
    const { found } = this.find(key);

    if (found) {
      return found[1];
    }
  }

  getHashTable() {
    return this.storage;
  }
  
  print() {
    console.log(this.storage);
  }
}

export default HashTable;
