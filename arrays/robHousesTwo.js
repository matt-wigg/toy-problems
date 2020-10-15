/*
House Robber II: https://leetcode.com/problems/house-robber-ii/

You are a professional robber planning to rob houses along a street. Each house has a certain
amount of money stashed. All houses at this place are arranged in a circle. That means the first 
house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, 
and it will automatically contact the police if two adjacent houses were broken into on the same 
night.

Given a list of non-negative integers nums representing the amount of money of each house, return 
the maximum amount of money you can rob tonight without alerting the police.

# Example 1:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

# Example 2:
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

# Example 3:
Input: nums = [0]
Output: 0

*/

const rob = (nums) => {

  if (!nums || nums.length === 0) return 0;

  const totalHouses = nums.length;
  if (totalHouses === 1) return nums[0];

  const robbingTime = (start, end) => {
    const totalHouses = end - start + 1;
    const moneyStolen = [];
    moneyStolen[0] = 0, moneyStolen[1] = 0;
    for (let i = 0, j = 2; i < totalHouses; i += 1, j += 1) {
      const currentHouse = nums[start + i];
      moneyStolen[j] = Math.max(currentHouse + moneyStolen[j - 2], moneyStolen[j - 1]);
    }
    return moneyStolen[moneyStolen.length - 1];
  }

  return Math.max(robbingTime(0, totalHouses - 2), robbingTime(1, totalHouses - 1));
};
