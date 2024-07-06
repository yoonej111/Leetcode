/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let entireLength = 2*n - 2;
    if(time > entireLength) time = time % entireLength;
    if(time < n) return time+1;
    else return 2*n - time - 1;
};