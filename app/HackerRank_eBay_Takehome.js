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

    var result = [];

    result[0] = 0;
    result[1] = 1;
    for (var i = 2; i < n; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }
    return result;
}

exports.fibonacciSeq = fibonacciSeq;


/*
Given an array of a strings, as you remove characters from the beginning of the string (prefix), return an array of the matching prefixes count per string

'' - 'abcabcd' ---> 7
'a'- 'bcabcd' ---> 0
'ab' - 'cabcd' ---> 0
'abc' - 'abcd' ---> 3
'abca' - 'bcd' ---> 0
'abcab' - 'cd' ---> 0
'acbabcd' - 'd' ---> 0

Return an array with the total number of matching prefixes [10]
*/

//helper function
var determineIfMatchingPrefixes = function (str) {
    var arr = str.split('');
    var counter = str.length;
    var prefixEndIndex = 0;
    var currentSubstring = '';
    while (arr.length > 0) {
        var strAgain = arr.join('');
        var equalLengthPrefix = strAgain.substring(0, prefixEndIndex);
        if (currentSubstring === equalLengthPrefix) {
            counter += equalLengthPrefix.length;
        }
        currentSubstring = currentSubstring + arr[0];
        arr.shift();
        prefixEndIndex++;
    }
    return counter;
}

var matchingPrefixesCounter = function (arr) {
    if (arr.length === 0) {
        return [];
    }
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var currentStr = arr[i].toLowerCase();
        result.push(determineIfMatchingPrefixes(currentStr));
    }
    return result;
}

exports.matchingPrefixesCounter = matchingPrefixesCounter;




/* DIDN'T GET TO IT- Maximum size rectangle binary sub-matrix with all 1s */
