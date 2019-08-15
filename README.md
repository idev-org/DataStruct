# DataStruct

A data structure for idev

## Stack

> A brief description

A stack is a data structure that only accesses elements from the top, A real world example could be a stack of plates,
items are placed on top of each other and taken or accessed from the top.
The stack is known as a last-in, first-out (LIFO) data structure. this means that the element that was gotten last is what would be accessed first.

> usage of the data structure

```js
// This creates a new instance of a stack
const stack = new Stack();

// This adds the string 'hello' to the top of the stack
stack.push('hello');

// any data type can be addes
stack.push([1, 2, 3, 4]);
stack.push(true);

// This removes the top element from the stack i.e 'hello'
stack.pop();

// This returns the current length of the stack i.e 2
stack.length;

// This returns the top element from the stack without removing it
stack.peek();

// This clears all elements from the stack
stack.clear();
```

### Practical Applications of the Stack

A stack could easily be used to solve some common algorithms like common base conversions and palindrome.
A stack is also used to store browser histories and any LIFO operation that is required.

```js
// algorithm to convert from one base to another using a stack
// this works best for bases 2 through 9
const mulBase = (num, base) => {
  const stack = new Stack();

  do {
    stack.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);

  let converted = '';
  while (stack.length > 0) {
    converted += stack.pop();
  }

  return converted;
};

// algorithm to check if a word is palindrome using a stack
const isPalindrome = (word) => {
  const stack = new Stack();
  for (let i = 0; i < word.length; ++i) {
    stack.push(word[i]);
  }
  var reverseWord = '';
  while (stack.length > 0) {
    reverseWord += stack.pop();
  }
  if (word == reverseWord) {
    return true;
  }
  return false;
};
```

## Set

> A brief description

A Set data structure allows to add data to a container, a collection of objects or primitive types (strings, numbers or booleans), it is like an array except there are no duplicate items and the values are in no particular order.

> Usage of the set data structure

```js
// Create a new instance of set
const set = new Set();
// you can also create an instance of set with an array value
const set = new Set(['hello', 'hi', 99])
// add any type of data to the set collection
set.add('a');
set.add(2);
set.add(true);

// remove data from the set collection
set.remove(2);

// check if a value is available in the set
set.has('a');

// get all the values in set set
set.values();

// get the size of the set 
set.size();

// get the union of two sets
setA.union(setB);

// get the intersection of two sets
setA.intersection(setB);

// get the difference between two sets
setA.difference(setB);
// check if setA is a subset of setB
setA.subset(setB);
```