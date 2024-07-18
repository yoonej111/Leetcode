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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false; 
    
    const getSum = function(node, currentSum, path) {
        console.log(node, currentSum, path)
        if (!node) return false; 
        
        currentSum += node.val; 
        path.push(node.val); 
        console.log(currentSum, node.val, path);
        
        if (!node.left && !node.right) {
            if (currentSum === targetSum) {
                return true;
            } else {
                path.pop();
                return false;
            }
        }
        
        if (getSum(node.left, currentSum, path) || getSum(node.right, currentSum, path)) {
            return true;
        }
        
        path.pop(); 
        return false;
    }
    
    return getSum(root, 0, []); 
};
