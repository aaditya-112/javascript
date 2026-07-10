// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

function removeDuplicate(nums){
    let len = nums.length,left = 0;
    for(let right = 1; right<len; right++){
        if(nums[left]!==nums[right]){
            left ++;
            nums[left]=nums[right];
        }
    }
    return left +1;
}

console.log(removeDuplicate([1,1,2]))