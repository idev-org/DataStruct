import chai from 'chai';
import LinkedList from './index';

const { expect } = chai;

const linkedList = new LinkedList();

afterEach('clear Linked list for reuse ', () => {
  linkedList.clear();
});

describe('Linked List', () => {
  it('should add to the linkedList', () => {
    linkedList.add('hello');
    linkedList.add('sam');

    const elem = linkedList.elementAt(1);

    expect(elem).to.be.equal('sam');
  });

  it('should remove element from linkedlist', () => {
    linkedList.add('hello');
    linkedList.add('sam');
    linkedList.add('welcome');

    const elem = linkedList.remove('sam');

    expect(linkedList.getSize()).to.be.equal(2);
    expect(elem).to.be.equal('sam');
  });

  it('should return false if remove is tried when empty', () => {
    expect(linkedList.remove('sam')).to.be.equal(false);
  });

  it('should return the length of the linkedlist', () => {
    linkedList.add('hello');
    linkedList.add('sam');

    expect(linkedList.length).to.be.equal(2);
    expect(linkedList.getSize()).to.be.equal(2);
  });

  it('should return the head of the linkedlist', () => {
    linkedList.add('hello');
    linkedList.add('sam');

    expect(linkedList.getHead().element).to.be.equal('hello');
    expect(linkedList.head.element).to.be.equal('hello');
  });

  it('should get index of element in linkedlist', () => {
    linkedList.add('hello');
    linkedList.add('sam');
    const index = linkedList.indexOf('sam');

    expect(index).to.be.equal(1);
  });

  it('should add element at an index in linkedlist', () => {
    linkedList.addAt(0, 'hello');
    linkedList.addAt(1, 'sam');
    const index = linkedList.indexOf('sam');

    expect(index).to.be.equal(1);
    expect(linkedList.getSize()).to.be.equal(2);
  });

  it('should remove element at an index in linkedlist', () => {
    linkedList.addAt(0, 'hello');
    linkedList.add(1, 'sam');
    const elem = linkedList.removeAt(0);

    expect(elem).to.be.equal('hello');
    expect(linkedList.getSize()).to.be.equal(1);
  });

  it('should clear the stack', () => {
    linkedList.add('hello');
    linkedList.add('sam');
    linkedList.clear();

    expect(linkedList.isEmpty()).to.be.equal(true);
    expect(linkedList.getHead()).to.be.equal(null);
  });
});
