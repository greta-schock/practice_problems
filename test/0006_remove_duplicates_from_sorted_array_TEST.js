var { expect } = require('chai');
var { removeDuplicates } = require('../app/0006_remove_duplicates_from_sorted_array');

describe('Leetcode Problem #0006: Remove Duplicates from Sorted Array', function () {
    it('Should return the length of a sorted array without any duplicate numbers', function () {
        var example1 = [1,1,2];
        var example2 = [0,0,1,1,1,2,2,3,3,4];

        expect(removeDuplicates(example1)).to.equal(2);
        expect(removeDuplicates(example2)).to.equal(5);
    })
    
})