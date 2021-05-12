var { expect } = require('chai');
var { kidsWithCandies } = require('../app/1431_kids_with_the_greatest_number_of_candies');

describe('Leetcode Problem #1431: Kids With Greatest Number of Candies', function() {
    it('Given the array candies and the integer extraCandies, where candies[i] represents the number for candies that the ith kid has. For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.', function() {
        var example1 = kidsWithCandies([2,3,5,1,3], 3);
        var example2 = kidsWithCandies([4,2,1,1,2], 1);
        var example3 = kidsWithCandies([12,1,12], 10);

        expect(example1).to.eql([true,true,true,false,true]);
        expect(example2).to.eql([true,false,false,false,false]);
        expect(example3).to.eql([true,false,true]);
    })
})