const { expect } = require('chai');

const travellingSails = require('../exercises/travellingSails');

describe('Testing travellingSails', function () {
    it('1. should work for case 1', function (done) {
        const order = travellingSails([10, 5, 8, 3, 25, 7, 9], [2, 3, 2, 4, 5, 3, 2], [1, 2, 1, 3, 1, 2, 0]);
        expect(order).to.be.eql([4, 2, 6, 7, 5, 3, 1]);
        done();
    });

    it('2. should work for case 2', function (done) {
        const order = travellingSails([5, 9], [2, 3], [1, 1]);
        expect(order).to.be.eql([1, 2]);
        done();
    });

    it('3. should work with snails not arriving', function (done) {
        const order = travellingSails([5, 9], [5, 10], [15, 100]);
        expect(order).to.be.eql([1, 2]);
        done();
    });

    it('4. should throw an error if arrays have different lengths', function (done) {
        expect(() => travellingSails([5, 9], [5, 10, 3], [15, 100])).to.throw();
        done();
    });


});
