const numberOperations = require('./number-operations');
const expect = require('chai').expect;

describe('numberOperations tests', () => {

    describe('powNumber tests', () => {
        it('returns the power of a number', () => {
            expect(numberOperations.powNumber(3)).to.be.equal(9);
            expect(numberOperations.powNumber(1)).to.be.equal(1);
        });
    });

    describe('numberChecker tests', () => {
        it('throws an error if input is not a number', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw();
            expect(() => numberOperations.numberChecker({obj:'invalid param'})).to.throw();
        });
        it('parses the input to a number and checks if it is greater or lower than 100', () => {
            expect(numberOperations.numberChecker('10')).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(10)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(0)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('110')).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(110)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
        });
        it('works with negative numbers', () => {
            expect(numberOperations.numberChecker(-10)).to.be.equal('The number is lower than 100!');
        });
        it('works with floating point numbers', () => {
            expect(numberOperations.numberChecker(100.15)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(1.5)).to.be.equal('The number is lower than 100!');
        })
    });

    describe('sumArrays tests', () => {
        it('sums numbers at same indices of two arrays and returns a new array', () => {
            expect(numberOperations.sumArrays([1,2,3], [4,5,6])).to.deep.equal([5,7,9]);
        });
        it('works with uneven length arrays', () => {
            expect(numberOperations.sumArrays([1,2,3], [4,5,6,7])).to.deep.equal([5,7,9,7]);
            expect(numberOperations.sumArrays([1,2,3,4], [4,5,6])).to.deep.equal([5,7,9,4]);
        });
    });
});