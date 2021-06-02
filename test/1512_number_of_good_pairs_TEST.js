var { expect } = require('chai');
var { numIdenticalPairs } = require('../app/1512_number_of_good_pairs');

describe('Leetcode Problem #1512: Number of Good Pairs', function () {
    it('Return the nums of good pairs in a numbers array. A pair (i, j) is called good if nums[i] === nums[j] and i < j', function() {
        var example1 = numIdenticalPairs([1,2,3,1,1,3]);
        var example2 = numIdenticalPairs([1,1,1,1]);
        var example3 = numIdenticalPairs([1,2,3]);


        expect(example1).to.equal(4);
        expect(example2).to.equal(6);
        expect(example3).to.equal(0);
    })
})