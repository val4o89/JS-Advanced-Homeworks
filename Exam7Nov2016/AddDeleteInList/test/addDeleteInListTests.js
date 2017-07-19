let expect = require('chai').expect;

let list = require('../addDeleteInList').list;

describe('List unit tests', function () {

    let myList = list;

    beforeEach(function () {
        myList = list;
        myList.delete(0);
        myList.delete(0);
        myList.delete(0);
        myList.delete(0);
        myList.add(34);
        myList.add(64);
        myList.add(44);
    })

    it('List should be empty after initialize', function () {
        myList.delete(0);
        myList.delete(0);
        myList.delete(0);
        myList = list;

        expect(`[${myList}]`).to.equal('[]');
    })

    it('List should have add()', function () {
        expect(myList.hasOwnProperty('add')).to.be.true;
    })
    it('List should have delete()', function () {
        expect(myList.hasOwnProperty('delete')).to.be.true;
    })
    it('List should have toString()', function () {
        expect(myList.hasOwnProperty('toString')).to.be.true;
    })


    it('Add() should append an element to the end of the list', function () {
        myList.add(54);
        let myListLength = myList.toString().split(', ').length;

        let lastElement = Number(myList.toString().split(', ')[myListLength-1]);

        expect(lastElement).to.equal(54);
    })

    it('Delete() should remove an element by given index', function () {

        myList.delete(1);
        let myListLength = myList.toString().split(', ').length;

        expect(myListLength).to.equal(2);
    });
    
    it('Delete() should return removed element', function () {

        let returnedElement = myList.delete(1);

        expect(returnedElement).to.equal(64);
    })

    it('Delete() should return undefined if the given index isnt number', function () {
        let returnedElement = myList.delete('abc');

        expect(returnedElement).to.equal(undefined);
    })

    it('Delete() should return undefined if the given index is out of bounds (negative)', function () {
        let returnedElement = myList.delete(-1);

        expect(returnedElement).to.equal(undefined);
    })

    it('Delete() should return undefined if the given index is out of bounds (positive)', function () {
        let returnedElement = myList.delete(4);

        expect(returnedElement).to.equal(undefined);
    })

    it('Delete() shouldnt remove an element if the given index isnt number', function () {
        myList.delete('abc');
        let myListLength = myList.toString().split(', ').length;

        expect(myListLength).to.equal(3);
    })

    it('ToString() should return string representation of the list, separated by ", "', function () {
        expect(myList.toString()).to.equal('34, 64, 44');
    })


})