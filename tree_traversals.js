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
var preorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let curt = root;
  while (stack.length !== 0 || curt !== null) {
    while (curt !== null) {
      stack.push(curt)
      result.push(curt.val);
      curt = curt.left;
    }
    curt = stack.pop();
    curt = curt.right;
}
  return result;
};

var inorderTraversal = function(root) {
  if (root === null) return [];
  let ans = [];
  let stack = [root];
  current = root;
  while (stack.length > 0) {
    while (current && current.left) {
      stack.push(current.left);
      current = current.left;
    }
    let node = stack.pop()
    ans.push(node.val);
    current = node.right;
    if (current) stack.push(current);
  }
  return ans;
};