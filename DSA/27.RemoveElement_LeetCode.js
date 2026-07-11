// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// [0,1,2,2,3,0,4,2], 2
function removeElements (nums, val){
    let left = 0 ;
    let right = nums.length;
    while(left!==right){
        if(nums[left]==val){
            if(nums[right]!=val){
                nums[left]=nums[right];
                left ++;
                right++;
            }
            else right++;
        }
        else left++;
    }
    console.log(nums)
    return left;
}

console.log(removeElements([0,1,2,2,3,0,4,2], 2))