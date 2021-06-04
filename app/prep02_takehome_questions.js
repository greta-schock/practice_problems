/* Print  out N digits of the Fibonacci sequence. */

var fibonacci_series = function (n) {
    if (n <= 0) {
        return null;
    }

    if (n === 1) {
        return [0, 1];
    } else {
        var result = fibonacci_series(n - 1);
        result.push(result[result.length - 1] + result[result.length - 2]);
        return result;
    }
};

exports.fibonacci_series = fibonacci_series;


/* Determining the most common string in an array. */

var mostCommonString = function (arr) {
    if (arr.length === 0) {
        return null;
    }

    if (arr.length === 1 && typeof arr[0] === 'string') {
        return arr[0];
    }

    var ref = {};
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            if (ref[arr[i]]) {
                ref[arr[i]]++;
            } else {
                ref[arr[i]] = 1;
            }
        }
    }

    if (Object.keys(ref).length === 0) {
        return null;
    }

    var mostCommonStringCount = 0;
    var result = '';
    for (var string in ref) {
        if (ref[string] > mostCommonStringCount) {
            mostCommonStringCount = string.length;
            result = string;
        }
    }
    return string;
};

exports.mostCommonString = mostCommonString;


/* Counting common prefixes in a string */
//input: a string
//output: count of most common prefix (?) || object with most common prefixes(?)

var countCommonPrefixes = function (string) {

    if (string.length === 0) {
        return null;
    }

    var arrOfStrings = string.split(' ');

    var reference = {};

    for (var i = 0; i < arrOfStrings.length; i++) {
        var currentStr = arrOfStrings[i];
        var prefixEndIndex = 1;
        for (var j = 0; j < currentStr.length; j++) {
            var currentPrefix = currentStr.substring(0, prefixEndIndex);
            if (!reference[currentPrefix]) {
                reference[currentPrefix] = 1;
            } else {
                reference[currentPrefix]++;
            }
            prefixEndIndex++;
        }
    }

    var counter = 0;
    var mostCommonPrefix = '';
    for (var prefix in reference) {
        if (reference[prefix] >= counter) {
            mostCommonPrefix = prefix;
            counter = reference[prefix];
        }
    }
    return mostCommonPrefix;
}

exports.countCommonPrefixes = countCommonPrefixes;

/* Determining the largest rectangle of 1s in a 2d array of 1s and 0s */

var findLargestRectangle = function (matrix) {
    var n = matrix.length;
    var m = (matrix[0] || []).length;
    var max = 0;
    var heights = Array(m);
    var stack = [];
    var h = 0;
    var w = 0;

    for (var i = 0; i < n; i++) {
        stack = [];

        for (var j = 0; j < m; j++) {
            if (matrix[i][j] === 1) {
                heights[j] = i === 0 ? 1 : heights[j] + 1;
            } else {
                heights[j] = 0;
            }

            while (stack.length && heights[j] <= heights[stack[stack.length - 1]]) {
                h = heights[stack.pop()];
                w = stack.length === 0 ? j : j - stack[stack.length - 1] - 1;
                max = Math.max(max, h * w);
            }

            stack.push(j);
        }

        while (stack.length) {
            h = heights[stack.pop()];
            w = stack.length === 0 ? m : m - stack[stack.length - 1] - 1;
            max = Math.max(max, h * w);
        }
    }

    return max;

}
