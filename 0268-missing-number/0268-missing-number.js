/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sumOfNum = nums.reduce((acc,cur) => acc+cur,0)
    var realSum = (nums.length) * (nums.length+1) / 2;
    return realSum - sumOfNum;
};

