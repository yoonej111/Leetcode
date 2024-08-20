/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let result = 0;

    while (n !== 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                result += i;

                n = n / i;

                break;
            }
        }
    }

    return result;
};