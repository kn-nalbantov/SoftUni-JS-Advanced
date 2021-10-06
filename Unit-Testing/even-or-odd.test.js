let expect = require('chai').expect;
let isOddOrEven = require('./even-or-odd');

describe('Test isOddOrEven functionality', () => {
  describe('happy path', () => {
    it('returns even when even chars of string', () => {
      expect(isOddOrEven('1234')).to.be.equal('even');
    });
    it('returns odd when odd char of strings', () => {
      expect(isOddOrEven('123')).to.be.equal('odd');
    });
  });
  describe('tests overloading', () => {
    it('returns undefined if not a string', () => {
      expect(isOddOrEven(true)).to.be.an('undefined');
      expect(isOddOrEven(1)).to.be.an('undefined');
      expect(isOddOrEven({ name: 'peter', age: 20 })).to.be.an('undefined');
      expect(isOddOrEven(undefined)).to.be.an('undefined');
    });
    it('processes first string when multiple params are passed', () => {
      expect(isOddOrEven('12', 'asd')).to.be.equal('even');
      expect(isOddOrEven('123', 'asdf')).to.be.equal('odd');
    });
  });
});
