var { expect } = require('chai');
var { judgeSquareSum } = require('../app/0633_sum_of_sqaure_numbers');

describe('Leetcode Problem #0633: Sum of Square Number', function(){
    it('Should return a Boolean value for if there are two integers that create a sum of the given number such that a^2 + b^2 = c^2', function() {
        var example1 = judgeSquareSum(5);
        var example2 = judgeSquareSum(3);
        var example3 = judgeSquareSum(4);
        var example4 = judgeSquareSum(2);
        var example5 = judgeSquareSum(1);

        expect(example1).to.equal(true);
        expect(example2).to.equal(false);
        expect(example3).to.equal(true);
        expect(example4).to.equal(true);
        expect(example5).to.equal(true);
    });
});