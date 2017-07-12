let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


document.body.innerHTML = `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;

describe('Shared object unit tests', function () {
    beforeEach(function () {
        document.body.innerHTML = `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>
</body>`;
        sharedObject.name = null;
        sharedObject.income = null;
    })
    describe('Initial tests', function () {
        it('Default value of name property must be null', function () {
            expect(sharedObject.name).to.be.null;
        })
        it('Default value of name field must be null', function () {
            sharedObject.changeName('ivan')
            expect($('#name').val()).to.equal('ivan', 'Function did not return the correct result!')
        })
        it('Default value of name field must be null', function () {
            sharedObject.changeName('')
            expect($('#name').val()).to.equal('', 'Function did not return the correct result!')
        })
        it('Default value of income property must be null', function () {
            expect(sharedObject.income).to.be.null;
        })
        it('No changes should be made if passed parameter is empty string', function () {
            sharedObject.name = null;
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        })
        it('Changes should be made if passed parameter is valid string', function () {
            sharedObject.changeName('kiro');
            expect(sharedObject.name).to.equal('kiro', 'Function did not return the correct result!');
        })

        it('No changes should be made if passed parameter is negative number', function () {
            sharedObject.changeIncome(-1);
            expect(sharedObject.income).to.be.null;
        })
        it('No changes should be made if passed parameter is 0', function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.null;
        })
        it('Changes should be made if passed parameter is positive number', function () {
            sharedObject.changeIncome(1);
            expect(Number(sharedObject.income)).to.equal(1, 'Function did not return the correct result!');
        })
        it('Changes should be made if passed parameter is positive number', function () {
            sharedObject.changeIncome(1);
            expect(Number($('#income').val())).to.equal(1, 'Function did not return the correct result!');
        })
        it('HTML should be changed if passed parameter is positive number', function () {
            sharedObject.changeIncome(0);
            expect($('#income').val()).to.equal('', 'Function did not return the correct result!');
        })
        it('Changes should not be made if passed parameter is not an integer', function () {
            sharedObject.income = null;
            sharedObject.changeIncome('asd');
            expect(sharedObject.income).to.equal(null, 'Function did not return the correct result!');
        })
        it('Changes should not be made if passed parameter is a floating point number', function () {
            sharedObject.income = null;
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.equal(null, 'Function did not return the correct result!');
        })

        it('No changes should be made if name textbox`s value is an empty string', function () {
            sharedObject.name = null;
            $('#name').val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.null;
        })
        it('No changes should be made if value can not be parsed', function () {
            sharedObject.income = null;
            $('#income').val('a');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.null;
        })
        it('No changes should be made if value is negative', function () {
            $('#income').val(-1);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.null;
        })
        it('No changes should be made if value is 0', function () {
            $('#income').val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.null;
        })
        it('Changes should be made if value can be parsed', function () {
            $('#income').val(1);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(1, 'Function did not return the correct result!');
        })
    })
})