import * as chai from 'chai';

const assert = chai.assert;
const expect = chai.expect;
chai.should();

describe('Demo Test Suite 1', () => {
    describe('Assert Test Suite', () => {
        it('Valid test- should check name length', () => {
            const name = 'circuitstream';
            assert.equal(name.length, 13, 'Length does not match');
            assert.lengthOf(name, 13, 'Length does not match');
        })
        it('Invalid test- should check name length', () => {
            const name = 'circuitstream';
            assert.notEqual(name.length, 10, 'Length matches');
        });
        it('Valid test - should concatenate two string correctly', () => {
            const str1 = 'circuit';
            const str2 = 'stream';
            const result = str1 + str2;
            assert.equal(result, 'circuitstream', 'Strings are not concatenated correctly');
        });
        it('Valid test - should return true for positive number', () => {
            const number = 5;
            assert.isTrue(number > 0, 'Number is not positive');
        });
        it('Valid test - should check if array contains specific element', () => {
            const array = [1, 2, 3, 4, 5];
            assert.include(array, 3, 'Array does not contain the element');
        });
        it('Valid test - should check object type to be an object', () => {
            const obj = { name: 'circuitstream' };
            assert.typeOf(obj, 'object', 'Not an object type');
        });
    });

    describe('Expect Test Suite', () => {
        it('Valid test - should check name length', () => {
            const name = 'circuitstream';
            expect(name.length).to.equal(13, 'Length does not match');
        });
        it('Invalid test - should check name length', () => {
            const name = 'circuitstream';
            expect(name.length).to.not.equal(10, 'Length matches');
        });
    });

    describe('Should Test Suite', () => {
        it('Valid test - should check name length', () => {
            const name = 'circuitstream';
            name.length.should.equal(13, 'Length does not match');
        });
        it('Invalid test - should check name length', () => {
            const name = 'circuitstream';
            name.length.should.not.equal(10, 'Length matches');
        });
    });
});

describe('Demo Test Suite 2', () => {

});