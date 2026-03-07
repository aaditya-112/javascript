// LeetCode 53 - maximum subarray
// Q- given an integer array nums , find the subarray with the largest sum, and return its sum.
let arr = [-2,1,-3,4,-1,2,1,-5,4];
let subarr = [];
let maxsum=0
for(let i= 0;i<arr.length;i++){
    let currSum= 0;
    for(let j=i;j<arr.length;j++){
        currSum +=arr[j]
        maxsum = Math.max(currSum,maxsum);
    }
}
console.log(maxsum);

// __________code to find all sub array________.#
// ----------using splice method --------------.#
// splice returns new sub array (from start - end).
// it do not overwrite original array.
// syntax -- example.splice(startIndex , endIndex) --- endIndex id not included in newSubArray.

// for(let i =0 ;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         subarr.push(arr.slice(i,j+1));
//     }
// }
// console.log(subarr);

// // ------find maxsum of sub array------

// for(let i=0 ; i<subarr.length;i++){

// }



// let sum = subarr.reduce((accum, next)=>{
//    return accum+next;
// })

// console.log("sum is ",sum)
