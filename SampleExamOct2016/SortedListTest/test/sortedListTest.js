let expect = require('chai').expect;

let SortedList = require('../sorted-list').SortedList;

describe('SortedList tests', function () {
    let sortedList = {};

    beforeEach(function () {
        sortedList = new SortedList();

        sortedList.add(1);
        sortedList.add(3);
        sortedList.add(2);

    });

    it('get function should return element of passed index', function () {
        expect(sortedList.get(2)).to.equal(3);
    });

    it('remove function should remove element of passed index', function () {
        sortedList.remove(1);

        expect(sortedList.size).to.equal(2);
        expect(sortedList.list.includes(2)).to.be.false;
    });

    it('add function should add element at last index', function () {
        sortedList.add(7);
        expect(sortedList.get(3)).to.equal(7);
    })

    it('SortedLists should contains only numeric elements', function () {

        function check(collection) {
            let hasOnlyNumbers = true;

            for (let i = 0; i < collection.size; i++) {

                let element = collection.get(i);

                if(isNaN(element) || element === null){
                    hasOnlyNumbers = false;
                    break;
                }

            }
            return hasOnlyNumbers;
        }

        expect(check(sortedList)).to.be.true;
    });

    it('SortedList should contains add function', function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
    })

    it('SortedList should contains remove function', function () {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
    })

    it('SortedList should contains get function', function () {
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.true;
    })

    it('SortedList should contains vrfyRange function', function () {
        expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.true;
    })

    it('Collection should be ascending sorted', function () {
        expect(sortedList.list.join(' ')).to.equal('1 2 3');
    });

    it('Should throws an error if passed invalid index to get() or remove()', function () {
        expect(() => sortedList.vrfyRange(5)).to.throw(Error, 'Index was outside the bounds of the collection.');
        expect(() => sortedList.vrfyRange(-1)).to.throw(Error, 'Index was outside the bounds of the collection.');

        sortedList.remove(0);
        sortedList.remove(0);
        sortedList.remove(0);
        expect(() => sortedList.vrfyRange(1)).to.throw(Error, "Collection is empty.");
    })

    it('Should has size property', function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.true;
    })

    it('Size property should return the size of a list', function () {
        expect(sortedList.size).to.equal(3);
    })

})