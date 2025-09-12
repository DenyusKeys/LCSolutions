// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique 
// element appears only once. The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.

// Example:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function(nums) {

    //Track unique elements length
    let x = 0; //First unique element

    //Loop over array
    //Compare x with i.  If they are not the same, it is a unique value
    for(let i = 1; i < nums.length; i++){
        if(nums[x] !== nums[i]){  
            //To replace elements in-place, increment x to next element and copy the unique element to it.
            x++; 
            nums[x] = nums[i];
        }
    }

    //x is the length of unique elements - 1;
    return x + 1;
};