import chai from 'chai';
import Queue from './index';

const { expect } = chai;

let queue = new Queue();

afterEach('clear Queue for reuse ', () => {
  queue = new Queue();
});

describe('Queue', () => {
  it('should add item to the queue', () => {
    queue.enqueue('i-dev');

    expect(queue.front).to.be.equal('i-dev');
  });

  it('should remove item from the queue', () => {
    queue.enqueue('i-dev');
    queue.enqueue('developers');
    const initialSize = queue.size;

    queue.dequeue();

    expect(queue.size).to.be.equal(initialSize - 1);
  });

  it('should dequeue in proper order', () => {
    queue.enqueue('hello');
    queue.enqueue('i-dev');
    queue.enqueue('developers');

    expect(queue.front).to.be.equal('hello');

    queue.dequeue();
    expect(queue.front).to.be.equal('i-dev');

    queue.dequeue();
    expect(queue.front).to.be.equal('developers');
  });

  it('should return true for empty queue', () => {
    expect(queue.empty).to.equal(true);
  });

  it('should return false for non-empty queue', () => {
    queue.enqueue('i-dev');
    expect(queue.empty).to.equal(false);
  });

  it('should return the size of the queue', () => {
    expect(queue.size).to.equal(0);

    queue.enqueue('i-dev');
    expect(queue.size).to.be.equal(1);
  });
});
