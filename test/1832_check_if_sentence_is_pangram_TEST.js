var { expect } = require('chai');
var { checkIfPangram } = require('../app/1832_check_if_the_sentence_is_pangram');

describe('Leetcode Problem #1832: Check If The Sentence Is Pangram', function() {
    it('Return true is the given sentence is a pangram (contains all 26 letters of the alphabet', function() {
        var example1 = checkIfPangram('thequickbrownfoxjumpsoverthelazydog');
        var example2 = checkIfPangram('leetcode');
        var example3 = checkIfPangram('abcdefghijklmnopqrstuvwxyz');
        var example4 = checkIfPangram('mattie wise and greta schock are friends');

        expect(example1).to.equal(true);
        expect(example2).to.equal(false);
        expect(example3).to.equal(true);
        expect(example4).to.equal(false);
    })
});