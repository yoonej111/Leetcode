/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let count = 0;
    const n = rating.length;

    for (let j = 0; j < n; j++) {
        let left_less = 0, left_more = 0, right_less = 0, right_more = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) left_less++;
            if (rating[i] > rating[j]) left_more++;
        }

        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) right_less++;
            if (rating[k] > rating[j]) right_more++;
        }

        count += left_less * right_more + left_more * right_less;
    }

    return count;
};