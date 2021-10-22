const dealership = require('./dealership');
const expect = require('chai').expect;

describe('dealership tests', () => {
    
    describe('newCarCost tests', () => {
        it('returns new car price if not returning old car', () => {
            expect(dealership.newCarCost(null, 1500)).to.be.equal(1500);
            expect(dealership.newCarCost('', 1500)).to.be.equal(1500);
        });
        it('returns new car price with a discount if old car is returned', () => {
            expect(dealership.newCarCost('Audi A4 B8', 100000)).to.be.equal(85000);
            expect(dealership.newCarCost('Audi A6 4K', 100000)).to.be.equal(80000);
            expect(dealership.newCarCost('Audi A8 D5', 100000)).to.be.equal(75000);
            expect(dealership.newCarCost('Audi TT 8J', 100000)).to.be.equal(86000);
        });
    });
    
    describe('carEquipment tests', () => {
        it('returns array of extras based on available array and indices', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2])).to.deep.equal(['heated seats', 'sport rims']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1, 2, 3])).to.deep.equal(['heated seats', 'sliding roof', 'sport rims', 'navigation']);
        });
        it('returns empty array if no extras are selected', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [])).to.deep.equal([]);
        });
    });

    describe('euroCategory tests', () => {
        it('returns a message with discount to the final price based on euro category', () => {
            expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(6)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });
        it('returns a no discount message if euro category is too low', () => {
            expect(dealership.euroCategory(2)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(1)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(0)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(-1)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});