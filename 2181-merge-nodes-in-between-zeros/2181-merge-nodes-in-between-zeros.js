/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let dummy = new ListNode(0);
    let currentResultNode = dummy;
    let value = 0;
    let current = head.next;

    while (current !== null) {
        if (current.val === 0) {
            currentResultNode.next = new ListNode(value);
            currentResultNode = currentResultNode.next;
            value = 0;
        } else {
            value += current.val;
        }
        current = current.next;
    }

    return dummy.next;
};