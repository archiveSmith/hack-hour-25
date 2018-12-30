/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  
  let center = Math.floor(arr.length / 2)

  if (target < arr[0] || target > arr[arr.length - 1] || arr.length === 0) return false;

  if (arr[center] === target) return true;

  if (target > arr[center]) {
    return findInOrderedSet(arr.slice(center), target)
  } else if (target < arr[center]) {
    return findInOrderedSet(arr.slice(0, center), target)
  }

}

module.exports = findInOrderedSet;
