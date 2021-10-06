let expect = require('chai').expect;
let lookupChar = require('./lookup-char');

describe('Test lookupChar functionality', () => {
    it('looks up a char in a string by given index', () => {
        expect(lookupChar('hello unit testing', 6)).to.be.equal('u');
    });
    it('returns undefined if input params are invalid', () => {
        expect(lookupChar(3, 5)).to.be.an('undefined');
        expect(lookupChar('string', 'another string')).to.be.an('undefined');
        expect(lookupChar(true, false)).to.be.an('undefined');
    });
    it('returns incorrect index if invalid index', () => {
        expect(lookupChar('hello', 10)).to.be.equal('Incorrect index');
        expect(lookupChar('hello', -1)).to.be.equal('Incorrect index');
    });
    describe('tests overloading', () => {
        it('returns undefined if number is not an integer', () => {
            expect(lookupChar('hello', 3.5)).to.be.an('undefined');
        })
    })
});