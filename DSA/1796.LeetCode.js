// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// An alphanumeric string is a string consisting of lowercase English letters and digits.
// Example 1:
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
// Example 2:
// Input: s = "abc1111"
// Output: -1
// Explanation: The digits that appear in s are [1]. There is no second largest digit. 

// var secondHighest = function(s) {
    
// };
// console.log(secondHighest("dfa12321afd"))

// let str = "dfa1121afd";
// let array = str.split('');

// // console.log(!isNaN("1"));

// let numbers= array.filter((item)=>{
//     if(!isNaN(item)){
//         return item;
//     }
// })
// // console.log(numbers);

// // let newarr = [1,2,3,2,1];
// let aa= [];
// let uniqueItems = numbers.filter((item)=>{
//     if(!aa.includes(item)){
//         aa.push(item)
//         return item
//     }
// })
// // console.log(aa)
// // console.log(uniqueItems)
// let sortedArr = uniqueItems.sort((a,b)=>b-a);
// // console.log(sortedArr);
// if(sortedArr.length<=1){
//     console.log("-1")
// }
// else{
//     console.log(sortedArr[1]);
// }


var secondHighest = function(s) {
    
    let onlyNumber = s.split('').filter((item)=>{
        if(!isNaN(item)){
            return item;
        }
    })
    // let aa= [];
    let uniqueItems = onlyNumber.filter((item,index)=>{
        // if(!aa.includes(item)){
        //     aa.push(item);
        //     return item;
        // }
        return onlyNumber.indexOf(item)===index;
    })
    let sortedArr = uniqueItems.sort((a,b)=>b-a);
    
    if(sortedArr.length<=1){
        return "-1";
    } 
    else return Number(sortedArr[1]);
    
};
console.log(secondHighest("dfa1243321afd"))