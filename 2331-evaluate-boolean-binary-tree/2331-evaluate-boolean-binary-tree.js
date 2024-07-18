/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    
    if(root.val == 0) return false;
    if(root.val == 1) return true;
    const leftside = evaluateTree(root.left);
    const rightside = evaluateTree(root.right);
    if(root.val == 2) return leftside || rightside;
    if(root.val == 3) return leftside && rightside;
};