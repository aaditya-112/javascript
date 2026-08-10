// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
function validPalindrome (s){
    
    // let arr = str.toLowerCase().split('');
    // let onlyChar = arr.filter((item)=>{
    //     return item>="a"&&item<="z"
    // })
    // return onlyChar.join('') === onlyChar.reverse().join('')
    // console.log(onlyChar.join(''));
    // console.log(onlyChar.reverse().join(''))

    let str = s.toLowerCase().split('').filter((i)=>{
        return (i>="a"&& i<="z")||(i>="0" && i<="9")
    })
    console.log(str.join(''));
    return str.join('')===str.reverse().join('')
}
console.log(validPalindrome("A man, a plan, a canal: Panama"))
