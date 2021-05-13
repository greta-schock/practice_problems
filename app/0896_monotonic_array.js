/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Return true if and only if the given array nums is monotonic.

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
Example 4:

Input: nums = [1,2,4,5]
Output: true
Example 5:

Input: nums = [1,1,1]
Output: true

Note
1. 1 <= nums.length <= 50000
2. -100000 <= nums[i] <= 100000
*/

exports.isMonotonic = function(nums) {
    
    //if array length is equal to 1
      //return true 
    if (nums.length === 1) {
        return true;
    }
    
    //DETERMINE IF NUMS IS INCREASING OR DECREASING 
    
    //if nums at index 0 is greater than nums at index 1
      //reverse the nums array 
    if (nums[0] > nums[nums.length - 1]){
        nums.reverse();
    }
    
    //iterate over the nums array 
      //if the current value is greater than the next value
        //return false
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            return false;
        }
    }
    
    //return true 
    return true;
    
};