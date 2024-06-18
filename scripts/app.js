// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


// first we need to set up our array
// then we need to set up a for loop to iterate though the array
// we will set i to a as its the starting point and the ending point will be b
// we will use the .push() method 

// 1) Let A = 1 and B = 10
// 2) Determine which number is higher/lower
// 3) Push lower number to start of array
// 4) Add 1 to lower number until it's equal to the higher number


function between(a, b){
    let arr = [];
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr;
}