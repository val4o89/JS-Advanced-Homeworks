let expect = require('chai').expect;
let should = require('chai').should;
let mathEnforcer = require('../math-enforcer').mathEnforcer;

describe("Testing object with functions mathEnforcer", function () {
    describe("Testing addFive()", function () {
        it("with non-number parameter, should return undefined", function () {
            expect(mathEnforcer.addFive("5")).to.equal(undefined, "The function did not return the correct result!");
        });

        it("with number parameter, should return number + 5", function () {
            expect(mathEnforcer.addFive(5)).to.equal(10, "The function did not return the correct result!");
        });

        it("with floating point number, should return number + 5", function () {
            expect(mathEnforcer.addFive(5.53)).to.be.closeTo(10.53,0.01,"The function did not return the correct result!");
        });

        it("with negative number, should subtract 5", function () {
            expect(mathEnforcer.addFive(-10)).to.equal(-5, "The function did not return the correct result!");
        });

        it("with NaN parameter, should return Nan", function () {
            expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        });
    });

    describe("Testing subtractTen()",function () {
        it("with positive number parameter, should return number - 10", function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5, "The function did not return the correct result!");
        });
        it("with negative number parameter, should add 10 to the number", function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20, "The function did not return the correct result!");
        });
        it("with non-number parameter, should return undefined", function () {
            expect(mathEnforcer.subtractTen("5")).to.equal(undefined, "The function did not return the correct result!");
        });
        it("with NaN parameter, should return Nan", function () {
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        });
        it("with floating point number, should return number - 5 with precision 0.01", function () {
            expect(mathEnforcer.subtractTen(5.53)).to.equal(-4.47,"The function did not return the correct result!");
        });
    });

    describe("Testing sum()",function () {
        it("with positive number parameters, should return the sum", function () {
            expect(mathEnforcer.sum(5, 5)).to.equal(10, "The function did not return the correct result!");
        });
        it("with negative number first parameter and positive second, should subtract the numbers", function () {
            expect(mathEnforcer.sum(-10, 5)).to.equal(-5, "The function did not return the correct result!");
        });
        it("with non-number first parameter, should return undefined", function () {
            expect(mathEnforcer.sum("5", 5)).to.equal(undefined, "The function did not return the correct result!");
        });
        it("with non-number second parameter, should return undefined", function () {
            expect(mathEnforcer.sum(5, "5")).to.equal(undefined, "The function did not return the correct result!");
        });
        it("with NaN for both parameters, should return NaN", function () {
            expect(mathEnforcer.sum(NaN, NaN)).to.be.NaN;
        });
        it("with floating point number, should return sum with precision 0.01", function () {
            expect(mathEnforcer.sum(1.21, 1.30)).to.equal(2.51,"The function did not return the correct result!");
        });
    })
});