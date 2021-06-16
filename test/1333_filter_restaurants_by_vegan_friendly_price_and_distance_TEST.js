var { expect } = require('chai');
var { filterRestaurants } = require('../app/1333_filter_restaurants_by_vegan_friendly_price_and_distance');

describe('Leetcode Problem #1333: Filter Restaurants by Vegan-Friend, Price and Distance', function() {
    it('Should return an array of restaurant IDs after filtering, ordered by rating from highest to lowest. If resturants have the same rating, it should order them by ID from highest to lowest', function(){
        var example1 = filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 1, 50, 10);
        var example2 = filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]], 0, 50, 10);

        expect(example1).to.eql([3,1,5]);
        expect(example2).to.eql([4,3,2,1,5]);
    });
});