/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let prev = head.val;
    let cur = head.next;
    let minimum = 0;
    let criticalPoints = []
    let index = 1;
    while(cur != null && cur.next != null){
        if( (prev < cur.val && cur.val > cur.next.val) || (prev > cur.val && cur.val < cur.next.val) ){
            criticalPoints.push(index);
            if (criticalPoints.length > 1){
                let diff = index - criticalPoints[criticalPoints.length-2];
                minimum = (diff < minimum) || (minimum == 0) ? diff : minimum;
            }
        }
        prev = cur.val;
        cur = cur.next;
        index++;
    }
    if (criticalPoints.length <= 1) return [-1, -1];
    else return [minimum, criticalPoints[criticalPoints.length -1] - criticalPoints[0]]
}
