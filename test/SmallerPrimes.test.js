const { expect } = require('chai');

const smallerPrimes = require('../exercises/smallerPrimes');

describe('Testing smallerPrimes', function () {
    it('1. should work for case 10', function (done) {
        let primes = smallerPrimes(10);
        expect(primes).to.eql([2, 3, 5, 7])
        done();
    });

    it('2. should work for case 100', function (done) {
        let primes = smallerPrimes(100);
        expect(primes).to.eql([
            2, 3, 5, 7, 11, 13, 17, 19,
            23, 29, 31, 37, 41, 43, 47, 53,
            59, 61, 67, 71, 73, 79, 83, 89,
            97
        ]);
        done();
    });

    it('3. should work for case 42', function (done) {
        let primes = smallerPrimes(42);
        expect(primes).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]);
        done();
    });

});
