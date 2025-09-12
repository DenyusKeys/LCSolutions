

var merge = function(nums1, m, nums2, n) {
    
    //Nums1.length is large enough fit all elements from nums1 and nums2
    //m = elements in nums1   ------ n = elements in num2

    //index counter for nums2
    let n2index = 0;
    
    //Handle edge cases
    if(m == 1 && n == 0){
        return nums1;
    } else if(m == 0 && n == 1){
        nums1[0] = nums2[0];
        return nums1;
    }

    //start index at m because that is the end of the nums1 list
    for(let i = m; i < nums1.length; i++){
        nums1[i] = nums2[n2index];   //Replace elements as you loop through
        n2index++;                  //Increment nums2 index
    }

    //Sort nums1 array with compare function.  Normal sort converts everything to a string and
    //can cause bad sorting.
    return nums1.sort((a,b)=> a-b);
};