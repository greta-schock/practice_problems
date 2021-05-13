var { expect } = require('chai');
var { isMonotonic } = require('../app/0896_monotonic_array');

describe('Leetcode Problem #896: Monotonic Array', function() {
    it('Return true if an array is monotonically increasing or decreasing', function() {
        var example1 = isMonotonic([1,2,2,3]);
        var example2 = isMonotonic([6,5,4,4]);
        var example3 = isMonotonic([1,3,2]);
        var example4 = isMonotonic([1,2,4,5]);
        var example5 = isMonotonic([1,1,1]);

        expect(example1).to.equal(true);
        expect(example2).to.equal(true);
        expect(example3).to.equal(false);
        expect(example4).to.equal(true);
        expect(example5).to.equal(true);
    })
})