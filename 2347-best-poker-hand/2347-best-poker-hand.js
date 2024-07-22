/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    const isFlush = suits.every(suit => suit === suits[0]);
    if (isFlush) return "Flush";

    const rankCount = {};
    for (const rank of ranks) {
        if (rankCount[rank]) {
            rankCount[rank]++;
        } else {
            rankCount[rank] = 1;
        }
    }

    let hasThreeOfAKind = false;
    let hasPair = false;
    
    for (const count of Object.values(rankCount)) {
        if (count >= 3) {
            hasThreeOfAKind = true;
        } else if (count === 2) {
            hasPair = true;
        }
    }

    if (hasThreeOfAKind) return "Three of a Kind";
    if (hasPair) return "Pair";

    return "High Card";

};