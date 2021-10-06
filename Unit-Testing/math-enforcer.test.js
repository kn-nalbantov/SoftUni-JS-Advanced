let expect = require('chai').expect;
let mathEnforcer = require('./math-enforcer');

describe('mathEnforcer', () => {
  describe('addFive', () => {
    it('should return correct result with num param', () => {
      expect(mathEnforcer.addFive(1)).to.be.equal(6);
    });
    it('should return undefined if param is not a num', () => {
      expect(mathEnforcer.addFive('3')).to.be.undefined;
      expect(mathEnforcer.addFive(true)).to.be.undefined;
      expect(mathEnforcer.addFive([1])).to.be.undefined;
    });
    describe('tests overloading', () => {
      it('should work with negative nums', () => {
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
      });
      it('should work with floating point nums', () => {
        expect(mathEnforcer.addFive(1.3)).to.be.closeTo(6.3, 0.1);
      });
      it('should only work with first param', () => {
        expect(mathEnforcer.addFive(1, 3, 'more params')).to.be.equal(6);
    });
    });
  });
  describe('subtractTen', () => {
    it('should return correct result with num param', () => {
      expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
    });
    it('should return undefined if param is not a num', () => {
      expect(mathEnforcer.subtractTen('not a num')).to.be.undefined;
      expect(mathEnforcer.subtractTen(Symbol(3))).to.be.undefined;
      expect(mathEnforcer.subtractTen([1])).to.be.undefined;
    });
    describe('tests overloading', () => {
      it('should work with negative nums', () => {
        expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
      });
      it('should work with floating point nums', () => {
        expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.1);
      });
      it('should only work with first param', () => {
          expect(mathEnforcer.subtractTen(1, 3, 'more params')).to.be.equal(-9);
      });
    });
  });
  describe('sum', () => {
    it('should return correct sum with num params', () => {
      expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
    });
    it('should return undefined if params are not nums', () => {
      expect(mathEnforcer.sum('string', true)).to.be.undefined;
      expect(mathEnforcer.sum(1, 'not a num')).to.be.undefined;
      expect(mathEnforcer.sum([1, 2])).to.be.undefined;
      expect(mathEnforcer.sum([1, '2'])).to.be.undefined;
    });
    describe('tests overloading', () => {
      it('should work with negative nums', () => {
        expect(mathEnforcer.sum(-10, -1)).to.be.equal(-11);
        expect(mathEnforcer.sum(-10, 1)).to.be.equal(-9);
      });
      it('should work with floating point nums', () => {
        expect(mathEnforcer.sum(1.3, 1.1)).to.be.closeTo(2.4, 0.1);
        expect(mathEnforcer.sum(1.3, -1.1)).to.be.closeTo(0.2, 0.1);
        expect(mathEnforcer.sum(1.3, -1)).to.be.closeTo(0.3, 0.1);
      });
      it('should work with zeroes', () => {
          expect(mathEnforcer.sum(0, 0)).to.be.equal(0);
      });
      it('should only work with first two params', () => {
          expect(mathEnforcer.sum(1, 2, 10)).to.be.equal(3);
      });
    });
  });
});
