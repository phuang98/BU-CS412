const {describe, it} = require('mocha');
const {expect} = require('chai');

const PS1 = require('./PS1.P1');
const PS2 = require('./PS1.P2');
const PS3 = require('./PS1.P3');

describe('Tests for Problem 1', () => {

    it('should return a string', function () {
        let str = PS1.alphabOrder('test');
        expect(str).to.be.a('string');
    });

    it('should return a alphabetically ordered string', function () {
        let str = PS1.alphabOrder('supercalifragilisticexpialidocious');
        expect(str).to.equal('aaacccdeefgiiiiiiillloopprrssstuux');
    });

    it('should not return a null', function () {
        let str = PS1.alphabOrder('supercalifragilisticexpialidocious');
        expect(str).to.not.equal(null);
    });
})

describe('Tests for Problem 2', () => {

    it('should be able to handle decimal and return 699.5 when passed 712-12.5', function () {
        let op = PS2.value('712+12.5');
        expect(op).to.equal(724.5);
    });

    it('should return a 2 when passed 4-2', function () {
        let op = PS2.value('4-2');
        expect(op).to.equal(2);
    });

    it('should return a number', function () {
        let op = PS2.value('10*7');
        expect(op).to.not.be.NaN;
    });

    it('should return a number less than 70', function () {
        let op = PS2.value('70/5');
        expect(op).to.be.below(70);
    });
})

describe('Tests for Problem 3', () => {

    it('should return an array', function () {
        let sNF = PS3.stringNFunc('test', string => string.split());
        expect(sNF).to.be.an('array');
    });

    it('Exp 1: should return an array of size 4', function () {
        let sNF = PS3.stringNFunc('supercalifragilisticexpialidocious', string => string.split(/(?=c)/)).length;
        expect(sNF).to.equal(4);
    });

    it('Exp 2: should have property modifiedString', function () {
        let sNF = PS3.stringNFunc('test', string => {
            let original = string;
            let modified = string.replace(/a/gi, 'A');
            let numReplaced = string.split('a').length - 1;
            let length = modified.length;
            return {
                originalString: original,
                modifiedString: modified,
                numberReplaced: numReplaced,
                length: length,
            };
        });
        expect(sNF).to.have.property('modifiedString');
    });

})