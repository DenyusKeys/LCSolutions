// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

var mySqrt = function(x) {
    //If x is less than 4, handle edge cases
    if(x == 0){
        return 0;
    }
    if(x < 4){
        return 1;
    }

    //Loop from 1 -> x
    for(let i = 1; i < x; i++){
        //If x is a perfect square, return i
        if((i*i) == x){
            return i;
        } else if((i * i) > x){ //If x is not a perfect square, return i - 1 since i*i will be greater than x
            return (i-1);
        }
    }   
};