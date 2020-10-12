/*
Serialize and Deserialize Binary Tree: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

Serialization is the process of converting a data structure or object into a sequence of bits so
that it can be stored in a file or memory buffer, or transmitted across a network connection link
to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your
serialization/deserialization algorithm should work. You just need to ensure that a binary tree can
be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree.
You do not necessarily need to follow this format, so please be creative and come up with different
approaches yourself.

# Example 1:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

# Example 2:
Input: root = []
Output: []

# Example 3:
Input: root = [1]
Output: [1]

# Example 4:
Input: root = [1,2]
Output: [1,2]
*/

//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var serialize = function (root) {
  if (!root) return '';
  let values = [];
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let current = queue.shift();
    values.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return values.toString(',');
};

var deserialize = function (data) {
  if (!data.length) return null;
  let values = data.split(',');
  let root = new TreeNode(values[0]);
  const addNode = (node, value) => {
    if (value < node.val) {
      if (node.left) {
        addNode(node.left, value)
      } else {
        node.left = new TreeNode(value);
      }
    }
    if (value > node.val) {
      if (node.right) {
        addNode(node.right, value);
      } else {
        node.right = new TreeNode(value);
      }
    }
  }
  for (let i = 1; i < values.length; i += 1) {
    addNode(root, +values[i])
  }
  return root;
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/
