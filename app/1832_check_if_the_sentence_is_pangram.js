/* A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
 

Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
*/

/*
 * @param {string} sentence
 * @return {boolean}
 */

var checkIfPangram = function (sentence) {

    if (sentence.length < 26) {
        return false;
    }

    var alphabet = {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
    }

    for (var i = 0; i < sentence.length; i++) {
        alphabet[sentence[i]] = true;
    }

    for (var letter in alphabet) {
        if (!alphabet[letter]) {
            return false;
        }
    }

    return true;
};
