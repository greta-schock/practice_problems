var { expect } = require('chai'); 
var { subtractProductAndSum } = require('../app/1281_subtract_the_product_and_sum_of_digits_of_an_integer');

describe('Leetcode Problem #1281: Sum of Digits of an Integer', function() {
    it('Should return the difference between the product of its digits and the sum of its digits of an integer', function() {
        var example1 = 234;
        var example2 = 0; 
        var example3 = 6;
        var example4 = 12;
        var example5 = 893843;

        expect(subtractProductAndSum(example1)).to.equal(15);
        expect(subtractProductAndSum(example2)).to.equal(0);
        expect(subtractProductAndSum(example3)).to.equal(0);
        expect(subtractProductAndSum(example4)).to.equal(-1);
        expect(subtractProductAndSum(example5)).to.equal(20701);
        
    });
});