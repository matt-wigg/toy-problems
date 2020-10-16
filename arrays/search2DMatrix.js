/*
Search 2D Matrix: https://leetcode.com/problems/search-a-2d-matrix/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the
following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 

# Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
Output: true

# Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
Output: false

# Example 3:
Input: matrix = [], target = 0
Output: false
*/

const searchMatrix = (matrix, target) => {
  for (let i = 0; i < matrix.length; i += 1) {
    const row = matrix[i];
    if (target <= row[row.length - 1]) return row.includes(target);
  }
  return false;
};
