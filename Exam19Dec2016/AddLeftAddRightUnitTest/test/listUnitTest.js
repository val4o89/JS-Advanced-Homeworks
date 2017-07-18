let makeList = require('../add.js').makeList;
let expect = require('chai').expect;

describe("Unit tests", function() {
    let myList = {};

    beforeEach(function () {
        myList = makeList();
    });

    it("AddLeft should add the passed element at index 0", function() {
        let element = 1;
        myList.addLeft(element++);
        myList.addLeft(element++);
        myList.addLeft(element++);
        myList.addLeft(element);

        expect(element.toString()).to.equal(myList.toString().split(', ')[0]);
    });

    it("AddLeft should add nothing if there isn't element", function() {
        myList.addLeft();
        expect(myList.toString()).to.equal('');
    });

    it("AddRight should add an element at the last index", function () {
        let element = 1;
        myList.addRight(element);
        expect(myList.toString().indexOf(element)).to.equal(myList.toString().split(', ') - 1);
    });

    it("AddRight should add an element at the last", function () {
        let element = 1;
        myList.addRight(element);
        expect(myList.toString().split(', ')[myList.toString().split(', ').length - 1]).to.equal(element.toString());
    });

    it("Clear should remove all items of the list", function () {
        let element = 1;
        myList.addRight(element);
        myList.addRight(element);
        myList.addRight(element);
        myList.addRight(element);
        myList.clear();
        expect(myList.toString().length).to.equal(0);
    });

    it('List should contains zero elements after initialize', function () {
        expect(myList.toString().length).to.equal(0);
    });

    it("ToString should print all items, joined by comma", function () {
        let element = 1;
        myList.addRight(element);
        myList.addRight(element);
        myList.addRight(element);
        myList.addRight(element);
        expect(myList.toString()).to.equal('1, 1, 1, 1');
    });
});
