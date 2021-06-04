var { expect } = require('chai');
var { fibonacci_series, mostCommonString, countCommonPrefixes } = require('../app/prep02_takehome_questions');

describe('Takehome #02 Prep Questions', function() {
    it('Should print out n digits of the Fionacci sequence', function() {
        var example1_1 = fibonacci_series(-10);
        var example1_2 = fibonacci_series(0);
        var example1_3 = fibonacci_series(8);
        var example1_4 = fibonacci_series(15);

        expect(example1_1).to.equal(null);
        expect(example1_2).to.equal(null);
        expect(example1_3).to.eql([0,1,1,2,3,5,8,13,21]);
        expect(example1_4).to.eql([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610])
    });

    it('Should detemine the most common string in an array', function () {
        var example2_1 = mostCommonString([]);
        var example2_2 = mostCommonString([1, 2, 3, 4]);
        var example2_3 = mostCommonString(['1', '12', '123', 1234]);
        var example2_4 = mostCommonString(['a', 'ab', 'abc', 'abcd', 'abcdef']);

        expect(example2_1).to.equal(null);
        expect(example2_2).to.equal(null);
        expect(example2_3).to.equal('123');
        expect(example2_4).to.equal('abcdef');
    });

    it('Should return the most common prefix in a string', function() {
        var example3_1 = countCommonPrefixes('');
        var example3_2 = countCommonPrefixes('a');
        var example3_3 = countCommonPrefixes('a ab abc abcd abcde abcdef');
        var example3_4 = countCommonPrefixes('predetermination predestination precint predator pretest prenup');
        
        expect(example3_1).to.equal(null);
        expect(example3_2).to.equal('a');
        expect(example3_3).to.equal('a');
        expect(example3_4).to.equal('pre');
    })
});


