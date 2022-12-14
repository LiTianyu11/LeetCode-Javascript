/*977. Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

//Solution 1 Two Pointers
var sortedSquares = function (nums) {
  let k = nums.length - 1;
  let arr = new Array();
  for (let i = 0, j = nums.length - 1; i <= j; ) {
    let left = nums[i] * nums[i],
      right = nums[j] * nums[j];
    if (left > right) {
      arr[k] = left;
      i++;
      k--;
    } else if (left < right) {
      arr[k] = right;
      j--;
      k--;
    } else {
      arr[k] = right;
      j--;
      k--;
    }
  }
  return arr;
};


// Solution 2
var sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i]
    }
    return nums.sort((a, b) => a - b)
};