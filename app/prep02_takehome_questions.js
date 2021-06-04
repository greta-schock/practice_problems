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


// determining the most common string in an array.

var mostCommonString = function (arr) {
    if (arr.length === 0) {
        return 
    }
}