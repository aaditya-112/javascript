// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
function ReverseString(s){
    let left=0;
    let right=s.length-1;
    let temp;
    while(left < right){
        temp= s[left];
        s[left]=s[right];
        // console.log(temp);
        s[right] = temp;  
        left ++;
        right--;
    }
    return s;
}
console.log(ReverseString(["H","a","n","n","a","h"]))