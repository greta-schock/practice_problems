const { expect } = require('chai');
const { sumOfLinkedLists } = require('../app/VandV_sumOfLinkedLists');

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

describe('Test suite', function () {
    it('will test the Sample Input', function () {
        const l1 = [2, 4, 7, 1];
        const l2 = [9, 4, 5];
        const ansArr = [1, 9, 2, 2];

        const linkedListOne = new LinkedList();
        let l1Ref = linkedListOne;
        for (const num of l1) {
            l1Ref.next = new LinkedList(num);
            l1Ref = l1Ref.next;
        }

        const linkedListTwo = new LinkedList();
        let l2Ref = linkedListTwo;
        for (const num of l2) {
            l2Ref.next = new LinkedList(num);
            l2Ref = l2Ref.next;
        }

        let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)

        const resArr = [];
        while (result) {
            resArr.push(result.value);
            result = result.next;
        }

        expect(resArr).to.eql(ansArr);
    });

    it('will test Two Lists with only 0 in the list', function () {
        const linkedListOne = new LinkedList(0);

        const linkedListTwo = new LinkedList(0);

        let result = sumOfLinkedLists(linkedListOne, linkedListTwo)

        const resArr = [];
        const ansArr = [0]
        while (result) {
            resArr.push(result.value);
            result = result.next;
        }

        expect(resArr).to.eql(ansArr);
    });

    it('will test input with leading zeros', function () {
        const l1 = [4, 6, 9, 3, 1];
        const l2 = [0, 0, 0, 0, 2, 7];
        const ansArr = [4, 6, 9, 3, 3, 7]

        const linkedListOne = new LinkedList();
        let l1Ref = linkedListOne;
        for (const num of l1) {
            l1Ref.next = new LinkedList(num);
            l1Ref = l1Ref.next;
        }

        const linkedListTwo = new LinkedList();
        let l2Ref = linkedListTwo;
        for (const num of l2) {
            l2Ref.next = new LinkedList(num);
            l2Ref = l2Ref.next;
        }

        let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)

        const resArr = [];
        while (result) {
            resArr.push(result.value);
            result = result.next;
        }

        expect(resArr).to.eql(ansArr);
    });

    it('will test number inputs with different lengths', function () {
        const l1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        const l2 = [5, 6, 4];
        const ansArr = [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

        const linkedListOne = new LinkedList();
        let l1Ref = linkedListOne;
        for (const num of l1) {
            l1Ref.next = new LinkedList(num);
            l1Ref = l1Ref.next;
        }

        const linkedListTwo = new LinkedList();
        let l2Ref = linkedListTwo;
        for (const num of l2) {
            l2Ref.next = new LinkedList(num);
            l2Ref = l2Ref.next;
        }

        let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)

        const resArr = [];
        while (result) {
            resArr.push(result.value);
            result = result.next;
        }

        expect(resArr).to.eql(ansArr);
    });

    it('will test carrying over numbers', function () {
        const l1 = [9, 9, 9, 9, 9, 9, 9];
        const l2 = [9, 9, 9, 9];
        const ansArr = [8, 9, 9, 9, 0, 0, 0, 1]

        const linkedListOne = new LinkedList();
        let l1Ref = linkedListOne;
        for (const num of l1) {
            l1Ref.next = new LinkedList(num);
            l1Ref = l1Ref.next;
        }

        const linkedListTwo = new LinkedList();
        let l2Ref = linkedListTwo;
        for (const num of l2) {
            l2Ref.next = new LinkedList(num);
            l2Ref = l2Ref.next;
        }

        let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)

        const resArr = [];
        while (result) {
            resArr.push(result.value);
            result = result.next;
        }

        expect(resArr).to.eql(ansArr);
    });

    it('will test carrying over numbers', function () {
        const l1 = [6];
        const l2 = [4];
        const ansArr = [0, 1]

        const linkedListOne = new LinkedList();
        let l1Ref = linkedListOne;
        for (const num of l1) {
            l1Ref.next = new LinkedList(num);
            l1Ref = l1Ref.next;
        }

        const linkedListTwo = new LinkedList();
        let l2Ref = linkedListTwo;
        for (const num of l2) {
            l2Ref.next = new LinkedList(num);
            l2Ref = l2Ref.next;
        }

        let result = sumOfLinkedLists(linkedListOne.next, linkedListTwo.next)

        const resArr = [];
        while (result) {
            resArr.push(result.value);
            result = result.next;
        }

        expect(resArr).to.eql(ansArr);
    });
})
