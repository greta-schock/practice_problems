var { expect } = require('chai');
var { isSumEqual } = require('../app/1880_check_if_word_equals_summation_of_two_words');

describe('Leetcode Problem #1880: Check If Word Equald Summation of Two Words', function() {
    it('Should return the summation of two words based on a string to number converting rule', function() {
        var example1 = isSumEqual("acb", "cba", "cdb");
        var example2 = isSumEqual('abe', 'efg', 'dfd');
        var example3 = isSumEqual('a', 'b', 'b');
        var example4 = isSumEqual('dgc', 'ef', 'eah');
        var example5 = isSumEqual('gdh', 'jib', 'bhbi');

        expect(example1).to.equal(true);
        expect(example2).to.equal(false);
        expect(example3).to.equal(true);
        expect(example4).to.equal(true);
        expect(example5).to.equal(false);
    });
});