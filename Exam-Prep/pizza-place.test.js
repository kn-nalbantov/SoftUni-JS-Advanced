const pizzaUni = require('./pizza-place');
const expect = require('chai').expect;
const pizzUni = require('./pizza-place');

describe('pizzaUni tests', () => {

    describe('makeAnOrder tests', () => {
        it('returns msg with order status when obj parameter is valid', () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Margarita', orderedDrink: 'Coke'})).to.be.equal('You just ordered Margarita and Coke.');
        });
        it('returns msg with order status if only pizza is ordered', () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'Neapolitana'})).to.be.equal('You just ordered Neapolitana');
        });
        it('throws an error if no pizza is ordered', () => {
            expect(() => pizzUni.makeAnOrder({orderedDrink: 'Coke'})).to.throw();
            expect(() => pizzUni.makeAnOrder({})).to.throw();
            expect(() => pizzUni.makeAnOrder('')).to.throw();
        });
    });

    describe('getRemainingWork tests', () => {
        it('returns list of pizzas which are still preparing', () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'Margarita', status: 'preparing'}])).to.be.equal('The following pizzas are still preparing: Margarita.');
            expect(pizzUni.getRemainingWork([{pizzaName: 'Calzone', status: 'preparing'}, {pizzaName: 'Peperoni', status: 'preparing'}])).to.be.equal('The following pizzas are still preparing: Calzone, Peperoni.');
            expect(pizzUni.getRemainingWork([{pizzaName: 'Calzone', status: 'preparing'}, {pizzaName: 'Peperoni', status: 'ready'}])).to.be.equal('The following pizzas are still preparing: Calzone.');
        });
        it('returns a msg with order status if all pizzas are ready', () => {
            expect(pizzaUni.getRemainingWork([{pizzaName: 'Margarita', status: 'ready'}])).to.be.equal('All orders are complete!');
        });
        it('returns a msg with order status if empty array is passed', () => {
            expect(pizzaUni.getRemainingWork([])).to.be.equal('All orders are complete!');
        });
    });

    describe('orderType tests', () => {
        it('gives a 10% discount if orderType is Carry Out', () => {
            expect(pizzaUni.orderType(100, 'Carry Out')).to.be.equal(90);
        });
        it('returns full price if order type is Delivery', () => {
            expect(pizzUni.orderType(100, 'Delivery')).to.be.equal(100);
        });
        it('returns undefined if invalid input', () => {
            expect(pizzUni.orderType()).to.be.undefined;
            expect(pizzUni.orderType(100, 'Invalid order type')).to.be.undefined;
        });
    });
});