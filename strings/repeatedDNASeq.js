/*
Find Repeated DNA Sequences: https://leetcode.com/problems/repeated-dna-sequences/

All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T', for example:
"ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the 
DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in 
a DNA molecule.

# Example 1:
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]

# Example 2:
Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
*/

const findRepeatedDnaSequences = (s) => {
  let [seen, seenAgain] = [new Set(), new Set()];
  for (let i = 0; i < s.length - 9; i += 1) {
      const string = s.substring(i, i + 10)
      seen.has(string) ? seenAgain.add(string) : seen.add(string);
  }
  return Array.from(seenAgain)
};
