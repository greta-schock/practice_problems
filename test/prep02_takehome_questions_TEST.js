var { expect } = require('chai');
var { fibonacci_series } = require('../app/prep02_takehome_questions');

describe('Takehome #02 Prep Questions', function() {
    it('Should print out n digits of the Fionacci sequence', function() {
        var example1 = fibonacci_series(-10);
        var example2 = fibonacci_series(0);
        var example3 = fibonacci_series(8);
        var example4 = fibonacci_series(15);

        expect(example1).to.equal(null);
        expect(example2).to.equal(null);
        expect(example3).to.eql([0,1,1,2,3,5,8,13,21]);
        expect(example4).to.eql([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610])
    })
})