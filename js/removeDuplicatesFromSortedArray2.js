// 80. Remove Duplicates from Sorted Array II
// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place 
// such that each unique element appears at most twice. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have 
// the result be placed in the first part of the array nums. More formally, if there are k elements after 
// removing the duplicates, then the first k elements of nums should hold the final result. 
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5

var removeDuplicates = function(nums) {
    
    //Allowed 2 duplicates.  Start at index 2
    //k is the position of the element getting replaced and the length of the array
    let k = 2;

    //Loop nums array
    for(let i = 2; i < nums.length; i++){
        //If nums[i] does not equal nums[k-2], replace value and increment k
        //k is the value being replaced
        if(nums[i] != nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
    }

    return k;

};