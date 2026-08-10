//  sum 
function sum(...nums){
    let answer = nums.reduce((acc,currItem)=>{return acc+currItem},0)
    return answer;
}
// console.log(sum(50,150,40,60,90,10))

// Q2. Second largest digit in string
function secLarDig(str){
        {
            // use for loop
            // let onlynumber = [];
            // for(let i = 0 ; i<str.length;i++){
            //     if(!isNaN(str[i])){
            //         onlynumber.push(str[i]);
            //     }
            // }
        }
        // using filter method
        let onlynumber=str.split('').filter((item, index)=>{
            return !isNaN(item)
        })
        console.log(onlynumber)
    // let uniqe=[];
    let onlyUniqueNumber = onlynumber.filter((item,index)=>{
        // if(!uniqe.includes(item)){
        //     uniqe.push(item)
        //     return item;
        // }
        return onlynumber.indexOf(item)===index;
    });
   
    onlyUniqueNumber.sort((a,b)=>b-a);
    console.log(onlyUniqueNumber);
    if(onlyUniqueNumber.length<=1)return -1;
    else return onlyUniqueNumber[1];
}
// console.log(secLarDig("dfa154455537776afd"))

// question number 9. Palindrome integer
// Input: x = 121
// Output: true
// Input: x = -121
// Output: false
function isPalindromeInt(num){
    let rev=0;
    let copyNum= num;

    while(num>0){
        let lastDigit = num%10;
        rev=rev*10 + lastDigit;
        num=Math.floor(num/10);
    }
    if(rev===copyNum) return true;
    return false;

}
// console.log(isPalindromeInt(-121))

// using string method
 function isPalindromeIntByString(num){
   return num.toString().split('').reverse().join('') === num.toString()
 }
//  console.log(isPalindromeIntByString(10))

//  ------------------------
// date - 14-07-2026
// Q.4 : 7-Reverse Integer
// -------------------------

function reverseInteger (num){
    let absNumber = Math.abs(num);
    let rev = 0;
    while(absNumber>0){
        let lastDigit = absNumber%10;
        rev = rev*10+lastDigit;
        if(rev>(Math.pow(2,31)-1)) return 0;
        absNumber = Math.floor(absNumber/10)
    }
    if(num<0){
        return -rev;
    }
    else return rev;
}
// console.log(reverseInteger(120))

// --------------------------------------------------
// count negatives -question from(namaste dev)
// --------------------------------------------------

function countNegatives(nums){
    if(!Array.isArray(nums)) return false;
    let negativeNums = nums.filter((item)=>{
        return item<0;
    })
    return negativeNums.length;
}

// console.log(countNegatives("5"))

// --------------------------------------------------
// Find Smallest number -question from(namaste dev)
// --------------------------------------------------
function findSmallestNumber (nums){
    if(!Array.isArray(nums)) return false;
    if(nums.length===0)return null;
    let minElement = Math.min(...nums);
    if(isNaN(minElement)||minElement==Infinity)return false;
    return minElement;
}
// console.log(findSmallestNumber([1,"a"]))

// --------------------------------------------------
// Find largest number -question from(namaste dev)
// --------------------------------------------------

function largestNumber(nums){
    if(!Array.isArray(nums)|| nums.length<1) return null;

    let largest = Math.max(...nums);
    if(isNaN(largest) || largest == Infinity){ return false};

    return largest;
}
// console.log(largestNumber(null),"null")
// console.log(largestNumber(undefined),"undefined")
// console.log(largestNumber(45),"number")
// console.log(largestNumber("34"),"string")
// console.log(largestNumber([Infinity]),"infinity")
// console.log(largestNumber([NaN]),"NaN")
// console.log(largestNumber([1,"a"]),"mixed array [1,'a']")

// --------------------------------------------------
// 704. Binary Search - LeetCode
// --------------------------------------------------

// function binarySearch (nums, target){
//     let start = 0;
//     let end = nums.length-1;

//     while(start<=end){
//         let mid = Math.floor((start+end)/2)

//         if(nums[mid]<target){ 
//             start = mid+1;
//         }
//         else if(nums[mid]>target){
//             end = mid-1;
//         }
//         else if(nums[mid] === target){
//             return mid;
//         }
//     }
//     return -1;

// }
// console.log(binarySearch([-1,0,3,5,9,12],9))

// --------------------------------------------------
// 1. Sum (foundation)
// --------------------------------------------------

function sum (...args){
    let sum = 0;
    // simple for loop
        // for(let i = 0 ; i<args.length;i++){
        //     sum = args[i]+sum;
        // }
    // for in loop
        // for(let i in args){
        //     sum = sum + args[i];
        // }
    // for of loop
        // for(let i of args){
        //     sum = sum + i
        // }

    // for each 
        // args.forEach((item)=>{
        //     sum = sum + item
        // })
    
    // reducer method
        sum = args.reduce((acu,item)=>{
            // console.log(acu);
            // console.log(item);
            return acu+item
        },0)
    return sum;
}
console.log(sum(1,2,3,4))