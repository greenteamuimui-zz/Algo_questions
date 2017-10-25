/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  let queue = [root];
  let result;
  while (queue.length > 0) {
    result = queue[0].val;
    let size = queue.length;
    for (let i = 0; i < size; i++) {   
      current_root = queue.shift();
      if (current_root.left) queue.push(current_root.left);
      if (current_root.right) queue.push(current_root.right);
    }
  }
  return result;
};