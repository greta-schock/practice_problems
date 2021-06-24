var { expect } = require('chai');
var { removeDuplicateLetters } = require('../app/0316_remove_duplicate_letters');

describe('Leetcode #316: Remove Duplicate Letters', function() {
    it ('Should remove all duplicates from a string and then put in lexilogical order', function() {
        var example1 = removeDuplicateLetters('bcabc');
        var example2 = removeDuplicateLetters('cbacdcbc');

        expect(example1).to.equal('abc');
        expect(example2).to.equal('abcd');
    });
});