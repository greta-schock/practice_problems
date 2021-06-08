/*
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
*/

exports.lengthOfLastWord = function(s) {
    if (s.length === 0) {
        return 0;
    }
    var arr = s.split(' ');
    
    for (var i = arr.length -1; i >= 0; i--) {
        if (arr[i].length > 0) {
            return arr[i].length;
        }
    }
    
    return 0
};