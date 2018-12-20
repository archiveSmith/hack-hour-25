/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    const compare = [];
    let repeat;

    array.forEach(num => {
        if(compare.includes(num)){
            repeat = num;
        }
        compare.push(num); 
    });
    return repeat;
}

const nums = [2, 5, 2, 3, 6, ];
console.log(repeatNumbers(nums));

module.exports = repeatNumbers;
