// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
//  The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function(nums, val) {
    //Track total elements not equal to val
    let total = 0;

    //increment total for every element not equal to val.
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            total = total + 1;
            continue;
        } else {             //Replace element with 'x' if it is equal to value.
            nums[i] = 'x';
        }
    }

    //Check nums array.  Sort will sort the strings after the integers.
    console.log(nums.sort());

    //Return total number of values not equal to val
    return total;

};