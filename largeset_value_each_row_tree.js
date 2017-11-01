/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];
  let ans = [];
  let queue = [root];
  while (queue.length > 0) {
    let queueNumber = queue.map((node, idx) => node.val);
    ans.push(Math.max(...queueNumber));
    let size = queue.length;
    for (let i = 0; i < size; i++) {
        let node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
  }
  return ans;
};
