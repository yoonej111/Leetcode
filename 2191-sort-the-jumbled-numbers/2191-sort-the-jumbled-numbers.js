/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    let map = new Map();
    
    for(let i of nums){
        let string = String(i).split('');
        for(let i = 0 ; i < string.length ; i++){
            string[i] = mapping[string[i]];
        }
        map.set(i, string.join(''))
    }
    
    return nums.sort((a, b) => map.get(a) - map.get(b));
};