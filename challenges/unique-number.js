/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  let hash = {};
  for (let i = 0; i < array.length; i += 1) {
      if (!hash.hasOwnProperty(array[i])) {
          hash[array[i]] = 1
      }
      else { hash[array[i]] += 1 } 
  }
  for (let key in array) {
      if (array[key] === 1) return array[key]
  }
}

module.exports = uniqueNumber;
