const cinema = require('./cinema');
const {expect} = require('chai');

describe ('cinema tests', () => {
    
    describe('showMovies', () => {
        it('prints movies separated by comma and space', () => {
            expect(cinema.showMovies(['Gladiator', 'Frozen'])).to.be.equal('Gladiator, Frozen');
        })
        it('returns an msg string if arr length is 0', () => {
            expect(cinema.showMovies([])).to.contain('no');
        });
    });

    describe('ticketPrice', () => {
        it('checks projection type and returns price', () => {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.5);
        });
        it('throws an error if invalid projection type is used', () => {
            expect(() => cinema.ticketPrice('InvalidType')).to.throw();
        });
        it('throws an error if invalid projection type is used', () => {
            expect(() => cinema.ticketPrice('asd')).to.throw(Error);
        });
    });

    describe('swapSeatsInHall', () => {
        it('prints success when valid 2 valid seat numbers are used', () => {
            expect(cinema.swapSeatsInHall(4,5)).to.be.equal('Successful change of seats in the hall.');
        });
        it('prints unsucess if seats are invalid', () => {
            expect(cinema.swapSeatsInHall(1,1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0,1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,21)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5,2.1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,-1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1)).to.be.equal('Unsuccessful change of seats in the hall.');
        })
    });
});