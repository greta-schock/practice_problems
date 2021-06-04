var { expect } = require('chai');
var { fibonacciSeq } = require('../app/HackerRank_eBay_Takehome');

describe('HackerRank eBay Hacker Rank Questions', function() {
    it('Should print out n digits of the Fionacci sequence', function() {
        var example1_1 = fibonacciSeq(-10);
        var example1_2 = fibonacciSeq(0);
        var example1_3 = fibonacciSeq(8);
        var example1_4 = fibonacciSeq(15);
        var example1_5 = fibonacciSeq(4);

        expect(example1_1).to.equal(null);
        expect(example1_2).to.equal(null);
        expect(example1_3).to.eql([0,1,1,2,3,5,8,13]);
        expect(example1_4).to.eql([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377]);
        expect(example1_5).to.eql([0, 1, 1, 2]);
    });
});