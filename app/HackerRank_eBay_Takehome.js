/*
  Fibonacci - Return an array to the nth of the Fibonacci Sequence 
  Example: 4 ---> [0, 1, 1, 2]
*/

var fibonacciSeq = function (n) {
    if (n <= 0) {
        return null;
    }

    if (n === 1) {
        return [0];
    } 

    if (n === 2) {
        return [0, 1];
    } 

    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}

exports.fibonacciSeq = fibonacciSeq;

/*
Given an array with a string(s?) inside, as you remove characters from the beginning of the string, figure out if there are matching prefixes with the leftover

'' - 'abcabcd' ---> 7
'a'- 'bcabcd' ---> 0
'ab' - 'cabcd' ---> 0
'abc' - 'abcd' ---> 3
'abca' - 'bcd' ---> 0
'abcab' - 'cd' ---> 0
'acbabcd' - 'd' ---> 0

Return an array with the total number of matching prefixes [11]
*/

var matchingPrefixes = function (arr) {
    if (arr.length === 0) {
        return [];
    }

    if (arr.length === 1) {
        return [0];
    }

    
}













/* Maximum size rectangle binary sub-matrix with all 1s */
