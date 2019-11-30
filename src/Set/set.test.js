import chai from 'chai';
import Set from './index';

const { expect } = chai;

const setA = new Set(['a', 'b', 'c']);

const setB = new Set(['a', 'b', 'c', 'd', 'f']);

describe('Set', () => {
  it('should check if the set has an element', (done) => {
    expect(setA.has('a')).to.eql(true);
    done();
  });
  it('should add an element to the setA', (done) => {
    setA.add('d');
    expect(setA.has('d')).to.eql(true);
    done();
  });
  it('should remove an element from the setA', (done) => {
    setA.remove('d');
    expect(setA.has('d')).to.eql(false);
    done();
  });
  it('should return the length of the setA', (done) => {
    expect(setA.size()).to.eql(3);
    done();
  });
  it('should return the values of the collection in the setA', (done) => {
    const setValues = setA.values();
    expect(setValues).to.be.an('array');
    expect(setValues).to.deep.equal(['a', 'b', 'c']);
    done();
  });
  it('should return the union between setA and setB', (done) => {
    const union = setA.union(setB);
    expect(union.values()).to.deep.equal(['a', 'b', 'c', 'd', 'f']);
    done();
  });
  it('should return the intersection between setA and setB', (done) => {
    const intersection = setA.intersection(setB);
    expect(intersection.values()).to.deep.equal(['a', 'b', 'c']);
    done();
  });
  it('should return the difference between setA and setB', (done) => {
    const differnce = setB.difference(setA);
    expect(differnce.values()).to.deep.eql(['d', 'f']);
    done();
  });
  it('should check if setA is a subSet of setB', (done) => {
    expect(setA.subset(setB)).to.eql(true);
    done();
  });
});
