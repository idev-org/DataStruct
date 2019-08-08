import chai from 'chai';
import Stack from './index';

const { expect } = chai;

const stack = new Stack();

afterEach('clear Stack for reuse ', () => {
  stack.clear();
});

describe('Stack', () => {
  it('should push to the stack', () => {
    stack.push('hello');

    expect(stack.peek()).to.be.equal('hello');
  });

  it('should pop off the stack', () => {
    stack.push('heyo');
    stack.push('love');
    stack.pop();

    expect(stack.peek()).to.be.equal('heyo');
  });

  it('should return undefined if pop is tried when empty', () => {
    expect(stack.pop()).to.be.equal(undefined);
  });

  it('should return the length of the stack', () => {
    stack.push('heyo');
    stack.push('love');

    expect(stack.length).to.be.equal(2);
  });

  it('should peek the top element of the stack', () => {
    stack.push('heyo');
    stack.push('love');

    expect(stack.peek()).to.be.equal('love');
  });

  it('should clear the stack', () => {
    stack.push('heyo');
    stack.push('love');
    stack.clear();

    expect(stack.length).to.be.equal(0);
    expect(stack.peek()).to.be.equal(undefined);
  });
});
