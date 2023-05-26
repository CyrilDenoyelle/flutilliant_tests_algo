const { expect } = require('chai');

const canFormPalindrom = require('../exercises/canFormPalindrom');

describe('Testing canFormPalindrom', function () {
    it('1. should be true for case abctpm', function (done) {
        const canForm = canFormPalindrom('nssnoo');
        expect(canForm).to.be.true;
        done();
    });

    it('2. should be false for case nssnoo', function (done) {
        const canForm = canFormPalindrom('abctpm');
        expect(canForm).to.be.false;
        done();
    });

    it('3. should be true for case SatireVeritas', function (done) {
        const canForm = canFormPalindrom('SatireVeritas');
        expect(canForm).to.be.true;
        done();
    });

});
