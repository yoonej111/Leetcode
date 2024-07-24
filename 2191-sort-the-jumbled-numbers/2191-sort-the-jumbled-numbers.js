/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    let map = new Map();
    
    for(let i of nums){
        let string = String(i).split('').map((e) => mapping[e]);
        map.set(i, Number(string.join('')))
    }
    
    return nums.sort((a, b) => map.get(a) - map.get(b));
};