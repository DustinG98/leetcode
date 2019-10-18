// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit 
// signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function 
// returns 0 when the reversed integer overflows.

// Accepted
// 835,410
// Submissions
// 3,274,312



//First Pass
var reverse = function(x) {
    let xSign = Math.sign(x);
    let xStr = x.toString();
    let xStrRev = xStr.split("").reverse();
    (xSign === -1 ? xStrRev.pop() : xStrRev);
    x = parseInt(xStrRev.join(""));
    (xSign === -1 ? x = -x : x = x);
    (Math.abs(x) > Math.pow(2, 31) ? x = 0 : x = x); 
    return x;
};


//TEST CASES
console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(1356143))
console.log(reverse(-121343))
console.log(reverse(1534236469));
