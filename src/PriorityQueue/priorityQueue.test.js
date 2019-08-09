import chai from 'chai';
import PriorityQueue from './index';

const { expect } = chai;

let queue = new PriorityQueue();

afterEach('clear Queue for reuse ', () => {
  queue = new PriorityQueue();
});

describe('PriorityQueue', () => {
  it('should add item to the queue', () => {
    queue.enqueue(['First Item', 2]);
    expect(queue.empty).to.be.equal(false);
  });

  it('should order item by priority', () => {
    queue.enqueue(['First Item', 2]);
    queue.enqueue(['Higher Priority', 10]);
    expect(queue.front).to.eql(['Higher Priority', 10]);
  });
});
