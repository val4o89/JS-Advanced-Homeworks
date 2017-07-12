let should = require('chai').should();
let lookupChar = require('../lookUp.js').lookupChar;
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('lookupChar', function () {

    it('f', function () {
        expect(lookupChar(13, 0)).to.equal(undefined, 'The function did not return the correct result!');
    })

    it('g', function () {
        expect(lookupChar('pesho', 'gosho')).to.equal(undefined, 'The function did not return the correct result!');
    })

    it('h', function () {
        expect(lookupChar('pesho', 3.12)).to.equal(undefined, 'The function did not return the correct message!');
    })

    it('j', function () {
        expect(lookupChar('gosho', 13)).to.equal('Incorrect index', 'The function did not return the correct value!');
    })

    it('k', function () {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index', 'The function did not return the correct value!');
    })

    it('k', function () {
        expect(lookupChar('stamat', -1)).to.equal('Incorrect index', 'The function did not return the correct value!');
    })

    it('m', function () {
        expect(lookupChar('pesho', 0)).to.equal('p', 'The function did not return the correct result!');
    })

    it('n', function () {
        expect(lookupChar('stamat', 3)).to.equal('m', 'The function did not return the correct result!');
    })

})