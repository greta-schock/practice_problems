/*

  You're given two Linked Lists of potentially unequal length. Each Linked List
  represents a non-negative integer, where each node in the Linked List is a
  digit of that integer, and the first node in each Linked List always
  represents the least significant digit of the integer. Write a function,
  sumOfLinkedLists, that returns the head of a new Linked List that represents
  the sum of the integers represented by the two input Linked Lists.
  
  Each LinkedList node has an integer value as well as a next node pointing to the
  next node in the list or to None / null if it's the tail of the list. The value
  of each LinkedList node is always in the range of 0 - 9.

  Note: your function must create and return a new Linked List, and you're not
  allowed to modify either of the input Linked Lists.
  
  Sample Input:
  linkedListOne = 2 -> 4 -> 7 -> 1
  linkedListTwo = 9 -> 4 -> 5
  
  Sample Output:
  1 -> 9 -> 2 -> 2
  
  linkedListOne represents 1742
  linkedListTwo represents 549
  1742 + 549 = 2291
  
*/

class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

exports.sumOfLinkedLists = function(l1, l2) {
    const result = new LinkedList(null);
    let curr = result;
    let curr1 = l1;
    let curr2 = l2;
    let carry = 0;

    while (curr1 || curr2 || carry === 1) {
        let sum = 0;

        if (curr1) {
            sum += curr1.value;
            curr1 = curr1.next;
        }

        if (curr2) {
            sum += curr2.value;
            curr2 = curr2.next;
        }

        if (carry === 1) {
            sum += 1;
        }

        if (sum > 9) {
            sum -= 10;
            carry = 1;
        } else {
            carry = 0;
        }

        curr.next = new LinkedList(sum);
        curr = curr.next;
    }


    return result.next;
}