let createList = require('../addSwapShiftList').createList;

let expect = require('chai').expect;

describe('Unit tests', function () {

    let list;

    beforeEach(function () {

        list = createList();

        list.add('1');
        list.add('2');
        list.add('3');

    });

    it('List should be empty if it is currently initialized', function () {
        list = createList();
        expect(`[${list.toString()}]`).to.equal('[]');
    })

    it('Add() should append an item to the end of the list', function () {
        list.add('4');
        let listLength = list.toString().split(', ').length;

        let lastItem = list.toString().split(', ')[listLength - 1];

        expect(lastItem).to.equal('4');
    })

    it('ShiftLeft() should shift all elements one position left', function () {
        list.shiftLeft();

        let allShiftedElements = list.toString().split(', ');
        expect(allShiftedElements[1]).to.equal('3');
        expect(allShiftedElements[0]).to.equal('2');
    })

    it('ShiftLeft() should shift element of position "0" to the end of the list', function () {
        list.shiftLeft();

        let allShiftedElements = list.toString().split(', ');
        let listLength = list.toString().split(', ').length;

        expect(allShiftedElements[listLength - 1]).to.equal('1');
    })
    it('ShiftLeft() shouldnt shift element if list.length is lower than 1', function () {
        list = createList();
        list.add('5');
        list.shiftLeft();

        let allShiftedElements = list.toString().split(', ');
        let listLength = list.toString().split(', ').length;

        expect(allShiftedElements.join(', ')).to.equal('5');
    })

    it('ShiftRight() should shift all elements one position right', function () {
        list.shiftRight();

        let allShiftedElements = list.toString().split(', ');
        expect(allShiftedElements[1]).to.equal('1');
        expect(allShiftedElements[2]).to.equal('2');
    })

    it('ShiftRight() should shift element of last position to the begining of the list', function () {
        list.shiftRight();

        let allShiftedElements = list.toString().split(', ');
        let listLength = list.toString().split(', ').length;

        expect(allShiftedElements[0]).to.equal('3');
    })

    it('Swap() should swap the positions of the elements', function () {
        list.swap(0, 2);

        let allListElements = list.toString().split(', ');

        let firstElement = allListElements[0];
        let secondElement = allListElements[2];

        expect(firstElement).to.equal('3')
        expect(secondElement).to.equal('1')

    })

    it('Swap() shouldnt swap the positions of the elements if there are invalid indices', function () {
        list.swap(0, 30);

        let allListElements = list.toString().split(', ');

        let firstElement = allListElements[0];
        let secondElement = allListElements[2];

        expect(firstElement).to.equal('1')
        expect(secondElement).to.equal('3')

    })

    it('Swap() shouldnt change the list if the given indices are equals', function () {
        list.swap(0, 0);

        let allListElements = list.toString().split(', ');

        expect(list.toString()).to.equal(allListElements.join(', '));

    })

    it('Swap() should return true if success', function () {
        let result = list.swap(0,1);

        expect(result).to.be.true;
    })

    it('Swap() should return false if called by negative indices', function () {
        let result = list.swap(-1,-41);

        expect(result).to.be.false;
    })

    it('ToString() should return string representation of the list', function () {
        expect(list.toString()).to.equal('1, 2, 3');
    })

    it('Swap() should return false if the first element isnt number', function () {
        let result = list.swap('sdfdsf', 1);
        expect(result).to.be.false;
    })
    it('Swap() should return false if the second element isnt number', function () {
        let result = list.swap(1, 'sdfsdf');
        expect(result).to.be.false;
    })

    it('Swap() should return false if the first index is lower than 0', function () {
        let result = list.swap(-1, 1);
        expect(result).to.be.false;
    })
    it('Swap() should return false if the second index is lower than 0', function () {
        let result = list.swap(1, -1);
        expect(result).to.be.false;
    })

    it('Swap() should return false if the first index is greater than list.length', function () {
        let listLength = list.toString().split(', ').length;

        let result = list.swap(listLength, 1);
        expect(result).to.be.false;
    })
    it('Swap() should return false if the second index is greater than list.length', function () {
        let listLength = list.toString().split(', ').length;

        let result = list.swap(1, listLength);
        expect(result).to.be.false;
    })
})