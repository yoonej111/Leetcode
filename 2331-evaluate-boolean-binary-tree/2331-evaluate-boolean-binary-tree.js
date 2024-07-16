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
    if(!root) return false;
    
    if(root.val == 0) return false;
    
    if(root.val == 1) return true;
    
    const leftValue = evaluateTree(root.left)
    const rightValue = evaluateTree(root.right)
    
    if (root.val === 2) {
        return leftValue || rightValue;
    } else if (root.val === 3) {
        return leftValue && rightValue;
    }
    
    
    
    return false;
};