/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = countNodes(root.left);
    if (k <= count){
        return kthSmallest(root.left, k);
    } else if (k > count + 1){
        return kthSmallest(root.right, k-1-count);
    }
    return root.val;
};

const countNodes = function(node){
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}
