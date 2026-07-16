// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//  Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums){
    if (!nums.includes(0)) return nums;
    let p1 = 0;
    let p2 = 1;
    while(p2<nums.length){
        let temp = 0;
        if(nums[p1]==0 && nums[p2]!=0){
            temp = nums[p2];
            nums[p2]=nums[p1];
            nums[p1]=temp;
            p1++;
            p2++;
        }
        else if(nums[p2]==0 && nums[p1]==0){
            p2++;
        }
        else if(nums[p2]==0 && nums[p1]!=0){
            p1++;
            p2 ++;
        }
        else if(nums[p1]!=0 && nums[p2]!=0){
            p1=p1+2;
            p2=p2+2;
        }
    }
    console.log(nums)

}
moveZeroes([-1,0,0,1,0])