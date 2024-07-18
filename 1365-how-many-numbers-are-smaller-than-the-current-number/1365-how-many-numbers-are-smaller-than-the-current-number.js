/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    for(let i of nums){
        let count = 0;
        for (let j of nums){
            if(j < i) count++;
        }
        result.push(count);
    }
    return result;
};