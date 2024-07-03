/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length <= 4) return 0;
    nums.sort((a,b) => a-b);
    const result1 = nums[nums.length-4]-nums[0];
    const result2 = nums[nums.length-1]-nums[3] 
    const result3 = nums[nums.length-2]-nums[2] 
    const result4 = nums[nums.length-3]-nums[1] 
    return Math.min(...[result1, result2, result3, result4])
};