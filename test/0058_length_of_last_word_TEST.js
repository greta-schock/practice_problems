var { expect } = require('chai');
var { lengthOfLastWord } = require('../app/0058_length_of_last_word');

describe('Leetcode Problem #0058: Length of Last Word', function() {
    it('Given a string, it should return the length of the last word in the string', function() {
        var example1 = '';
        var example2 = '        '; 
        var example3 = ' a ';
        var example4 = 'hello world';
        var example5 = 'getting started with your Oyster Card ';

        expect(lengthOfLastWord(example1)).to.equal(0);
        expect(lengthOfLastWord(example2)).to.equal(0);
        expect(lengthOfLastWord(example3)).to.equal(1);
        expect(lengthOfLastWord(example4)).to.equal(5);
        expect(lengthOfLastWord(example5)).to.equal(4)
    })
})