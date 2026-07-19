
function SingleNumber (nums){
    // if(nums.length==1) return nums[0];
    for(let i = 0; i<nums.length;i++){
        let firstIndex = nums.indexOf(nums[i]);
        let lastIndex = nums.lastIndexOf(nums[i]);
        if(firstIndex==lastIndex){
            return nums[i];
        }
    }
}

// console.log(SingleNumber([1]))

// -------------------------------------------
// solution with xor operator
// -------------------------------------------

function singleNumberXor(nums){
    let res = 0;
    nums.forEach(item => {
        res = res^ item
    });
    return res
}
console.log(singleNumberXor([1,1,3,2,2,4,4]))