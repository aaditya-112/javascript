// Given an integer x, return true if x is a palindrome, and false otherwise.
// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// let input = 1222;

function checkPalindrome (num) {
    if (num<0)return false;

    let copyNum = num ;
    let reversedNum = 0;
    while(num>0){
        let  lastDigit = num % 10;
        reversedNum = reversedNum * 10 + lastDigit;
        num = Math.floor(num/10);
    }
    return copyNum === reversedNum;

}
console.log(checkPalindrome(input));

//  using string conversion

function checkPalindrome (num){
    return num.toString().split('').reverse().join('') == num;
    
}
let a = 121
let b = a.toString().split('').reverse().join('')

// console.log(b);
console.log(checkPalindrome(122))

