/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const map = new Map()
    let childrenSet = new Set()
    
    for(const [parent,children,isLeft] of descriptions){
        if(!map.has(parent)){
            map.set(parent,new TreeNode(parent))
        }
        if(!map.has(children)){
            map.set(children,new TreeNode(children))
        }
        let parent_ = map.get(parent)
        let children_ = map.get(children)
        if(isLeft) parent_.left = children_
        else parent_.right = children_

        childrenSet.add(children) 
    }
    let root = null
    for(const [key,val] of map.entries()){
        if(!childrenSet.has(key)){
            root = val
            break
        }
    }
    return root
};