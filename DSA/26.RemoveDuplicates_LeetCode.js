// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeDuplicate(nums){
    let a = 1;
    

    for(let i = 0 ; i<nums.length-1; i++){
       
        if(nums[i]!==nums[i+1]){
            nums[a]=nums[i+1]
            // console.log(nums[i+1])
            a++;
        }
    }
    console.log(nums)
    return a;
}
console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]))


// function removeDuplicate(nums){
//     let len = nums.length,left = 0;
//     for(let right = 1; right<len; right++){
//         if(nums[left]!==nums[right]){
//             left ++;
//             nums[left]=nums[right];
//         }
//     }
//     return left +1;
// }

// console.log(removeDuplicate([1,1,2]))