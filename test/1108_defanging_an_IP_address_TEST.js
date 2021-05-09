var expect = require('chai').expect;
var { defangIPaddr } = require('../app/1108_defanging_an_IP_address');

describe('Leetcode Problem #1108: Defanging an IP Address', function() {
    it('Given a valid IP address, it should return a defanging version of the IP address', function() {
        var example1 = defangIPaddr("1.1.1.1")
        var example2 = defangIPaddr("255.100.50.0")

        expect(example1).to.equal("1[.]1[.]1[.]1");
        expect(example2).to.equal("255[.]100[.]50[.]0");
    })
});