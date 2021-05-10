var expect = require('chai').expect;
var { maximumWealth } = require('../app/1672_richest_customer_wealth');

describe('Leetcode Problem #1672: Richest Customer Wealth', function() {
    it('Given  an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.', function() {
        var example1 = maximumWealth([[1,2,3],[3,2,1]]);
        var example2 = maximumWealth([[1,5],[7,3],[3,5]]);
        var example3 = maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);

        expect(example1).to.equal(6);
        expect(example2).to.equal(10);
        expect(example3).to.equal(17);
    })
});