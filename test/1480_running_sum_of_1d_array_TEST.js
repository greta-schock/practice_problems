var expect = require("chai").expect; 
var { runningSum } = require("../app/1480_running_sum_of_1d_array");

describe("Leetcode Problem #1480: Running Sum of 1d Array", function() {
    it("Given an array, it should give us the running num of an array", function() {
        var example1 = runningSum([1,2,3,4]);
        var example2 = runningSum([1,1,1,1,1]);
        var example3 = runningSum([3,1,2,10,1])

        expect(example1).to.eql([1,3,6,10]);
        expect(example2).to.eql([1,2,3,4,5]);
        expect(example3).to.eql([3,4,6,16,17]);
    })
})