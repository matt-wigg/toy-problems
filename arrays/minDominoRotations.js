/*
Minimum Domino Rotations For Equal Row: 
https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/

In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.
(A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the sameNumbers, or all the 
values in B are the sameNumbers.

If it cannot be done, return -1.

# Example 1:
Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2,
as indicated by the second figure.

# Example 2:
Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
Output: -1
Explanation: 
In this case, it is not possible to rotate the dominoes to make one row of values equal.

*/

const minDominoRotations = (A, B) => {
  const seenA = new Array(7).fill(0);
  const seenB = new Array(7).fill(0);
  const sameNumbers = new Array(7).fill(0);
  for (let i = 0; i < A.length; i += 1) {
    seenA[A[i]] += 1;
    seenB[B[i]] += 1;
    if (A[i] === B[i]) sameNumbers[A[i]] += 1;
  }
  for (let j = 1; j <= 6; j += 1) {
    if (seenA[j] + (seenB[j] - sameNumbers[j]) === A.length) {
      return Math.min(seenA[j] - sameNumbers[j], seenB[j] - sameNumbers[j]);
    }
  }
  return -1;
};
