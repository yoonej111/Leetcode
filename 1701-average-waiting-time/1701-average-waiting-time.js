/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let waitTime = 0;
    let availableTime = 0;
    for (let i of customers){
        if(availableTime <= i[0]) {
            waitTime += i[1]
            availableTime = i[0] + i[1];
        }
        else {
            waitTime = waitTime + availableTime + i[1] - i[0];
            availableTime = availableTime + i[1];
        }
    }
    return waitTime / customers.length
};