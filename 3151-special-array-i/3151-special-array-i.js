/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    if(nums.length == 1) return true;
    let prev = nums[0] % 2;
    for(let i = 1 ; i < nums.length ; i++){
        let current = nums[i] % 2;
        if(prev == current) return false;
        prev = current;
    }
    return true;
};