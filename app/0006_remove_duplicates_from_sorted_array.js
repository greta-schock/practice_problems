/*
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
 

Constraints:

0 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in ascending order.

*/

exports.removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        console.log('next number: ', nums[j], 'current number: ', nums[i]);
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
        console.log(nums)
    }
    return i + 1;
};

//Why does this work?
/*
Process 
  - The array is already sorted
  - We use two pointers: 
        i is the "slow-runner"
        j is the "fast-runner"
  - As long as nums[i] === nums[j], we will increment j to skip the duplicate 
        - Something to note: we are using i as a sort of "counter" variable
  - When nums[i] !== nums[j], the duplicate run has ended so we must copy its value to nums[i + 1]
        - i is then incremented (because it is not a duplicate)
        - Repeat the same process again until j reaches the end of the array 
  - Return i + 1 

Time Complexity: O(n) because n is the length of the array 
Space Complexity: O(1)
*/
