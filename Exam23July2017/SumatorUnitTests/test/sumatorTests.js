let expect = require('chai').expect;

let Sumator = require('../sumator').Sumator;

describe('Sumator unit tests', function () {
    let sumator;

    beforeEach(function () {
       sumator = new Sumator();
    });

    it('Should exist data property', function () {
        expect(sumator.hasOwnProperty('data')).to.be.true;
    })
    
    it('Should data property to be empty after initialize', function () {
        expect(`[${sumator.data}]`).to.equal('[]');
    })

    it('Add() should add any type of item', function () {
        sumator.add(1);
        sumator.add('1');
        sumator.add('pesho');
        sumator.add(true);

        expect(sumator.toString()).to.equal('1, 1, pesho, true');
    });

    it('sumNums() should sum only the numbers in the collection', function () {
        sumator.add('pesho')
        sumator.add(21)
        sumator.add(19)
        sumator.add(10.1)
        sumator.add('gosho')

        expect(sumator.sumNums()).to.equal(50.1);
    })

    it('sumNums() shoul return zero, if there isnt numbers', function () {
        sumator.add('gosho')
        sumator.add('psho')
        sumator.add('google')

        expect(sumator.sumNums()).to.equal(0);

    })

    it('removeByFilter() should remove all items, matched by given function', function () {
        sumator.add('gosho')
        sumator.add('psho')
        sumator.add('google')

        sumator.removeByFilter(function (x) {
            if(x.includes('p')){
                return x;
            }
        })

        expect(sumator.toString()).to.equal('gosho, google');
    })

    it('toString() should retrun string representation of the collection', function () {
        sumator.add('gosho')
        sumator.add('psho')
        sumator.add('google')

        expect(sumator.toString()).to.equal('gosho, psho, google');
    })

    it('toString() should work correctly if the collection is empty', function () {
        expect(sumator.toString()).to.equal('(empty)');
    })

    it('Summator should contains add()', function () {
        expect(Sumator.prototype.hasOwnProperty('add')).to.be.true;
    })

    it('Summator should contains sumNums()', function () {
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true;
    })

    it('Summator should contains removeByFilter()', function () {
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true;
    })

    it('Summator should contains toString()', function () {
        expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true;
    })
})