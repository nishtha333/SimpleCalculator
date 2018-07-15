const expect = require('chai').expect;
const calculator = require('../src/simpleCalculator')

describe('Simple Calculator', () => {
    it('exists', () => {
        expect(calculator).to.be.ok;
    });

    it('has functions add, subtract, multiply to add, subtract, multiple 2 numbers resp', () => {
        expect(typeof calculator.add).to.equal('function');
        expect(typeof calculator.subtract).to.equal('function');
        expect(typeof calculator.multiply).to.equal('function');
    });

    describe('add', () => {
        it('adds 2 numbers', () => {
            expect(calculator.add(2,3)).to.equal(5);
            expect(calculator.add(-2,3)).to.equal(1);
            expect(calculator.add(-2,-3)).to.equal(-5);
        });
        it('throws exception when given undefined parameter', () => {
            expect(() => calculator.add(2)).to.throw("Can't add an undefined number");
        });
    });

    describe('subtract', () => {
        it('subtracts the second number from the first', () => {
            expect(calculator.subtract(2,3)).to.equal(-1);
            expect(calculator.subtract(-2,3)).to.equal(-5);
            expect(calculator.subtract(-2,-3)).to.equal(1);
        });
        it('throws exception when given undefined parameter', () => {
            expect(() => calculator.subtract(2)).to.throw("Can't subtract an undefined number");
        });
    });

    describe('multiply', () => {
        it('multiplies 2 numbers', () => {
            expect(calculator.multiply(2,3)).to.equal(6);
            expect(calculator.multiply(-2,3)).to.equal(-6);
            expect(calculator.multiply(-2,-3)).to.equal(6);
            expect(calculator.multiply(-2,0)).to.equal(0);
        });
        it('throws exception when given undefined parameter', () => {
            expect(() => calculator.multiply(2)).to.throw("Can't multiply an undefined number");
        });
    });
});
