/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// function subsetSum(array, target) {
// 	if (array.length === 1) return target === array[0];
// 	let sum = 0;
// 	let negSum = 0;
// 	const sumArr = [];
// 	const negArr = [];
// 	array.sort((a, b) => a - b);
// 	for (let i = 0; i < array.length; i += 1) { 
// 		// get negative numbers sum 
// 		if (array[i] < 0) {
// 			negArr.push(array[i]);
// 			negSum += array[i];
// 		} 
// 		// get positive numbers sum 
// 		else if (sum < target) {
// 			sum += array[i];
// 			sumArr.push(array[i]);
// 		} 
// 		// dealing with positive numbers 
// 		if (sum === target) return true;
// 		if (sumArr.includes(sum - target)) return true;
// 		if (array.slice(i).includes(target-sum) || negArr.includes(target-sum)) return true;

// 		// dealing with negative numbers 
// 		if (negSum === target) return true;
// 		if (negArr.includes(target - sum)) return true;
// 		if (array.slice(i).includes(sum - target) || sumArr.includes(sum - target)) return true;
// 	}
// 	return false;
// }

module.exports = subsetSum;