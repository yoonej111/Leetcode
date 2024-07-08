/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let array = Array.from({length:n}, (v,i)=>i+1);
    let index = 0;
    while(array.length > 1){
        index = index + k - 1;      
        if(index >= array.length) index = index % array.length;
        removed = array.splice(index, 1);
    }
    return array[0];
};