var expect = require("chai").expect;
var { twoSum } = require("../app/0001_two_sum.js"); 


describe("twoSum function", function() {
    it("take an array of integers and an integer target and return indices of the two numbers such that they add up to target", function() {
        var example1 = twoSum([2,7,11,15], 9);
        var example2 = twoSum([3,2,4], 6);
        var example3  = twoSum([3,3], 6); 

        expect(example1).to.eql([0,1]);
        expect(example2).to.eql([1,2]);
        expect(example3).to.eql([0,1]);
    })
})