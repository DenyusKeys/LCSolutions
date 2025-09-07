// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]

//COMPLETED 0ms runtime
var sumZero = function(n) {
    //Create an array to push integers into
    let answer = [];

    //If n = 1, push 0 and return the array
    if(n == 1){
        answer.push(0);
        return answer;
    }

    //If n is odd, add 0 to allow remaining elements to be an even number
    if(n % 2 != 0){  //If n is an odd number
        answer.push(0);
        for(let i = 1; i < n; i++){  //Start at 1 to compare to index 0
            if(answer[i-1] > 0){
                answer.push(answer[i-1] * (-1));  //If previous index is a number, add the negation to the array
            } else if(answer[i-1] < 0 || answer[i-1] == 0){ //If previous index is 0 or a negative, push positive i to the array
                answer.push(i);
            }
        }
    } else {
        answer.push(1); //Push 1 element into the array to compare in the loop
        for(let i = 1; i < n; i++){
            if(answer[i-1] > 0){
                answer.push(answer[i-1] * (-1));
            } else if(answer[i-1] < 0 || answer[i-1] == 0){
                answer.push(i);
            }
        }
    }

    //Return answer array
    return answer;
    
};