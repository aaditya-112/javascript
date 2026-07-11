// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// [0,1,2,2,3,0,4,2], 2
function removeElements (nums, val){
    let left = 0 ;
    let rigth = 0;
    // for(let i = 0 ; i <nums.length;i++){
    //     if(nums[i]!==val){
    //         nums[left]= nums[i];
    //         left++;
    //     }
    // }
    while(rigth<nums.length){
        if(nums[rigth]!==val){
            nums[left]=nums[rigth]
            left++;
        }
        rigth++
    }
    console.log(nums)
    return left;
}

console.log(removeElements([0,1,2,2,3,0,4,2], 2))