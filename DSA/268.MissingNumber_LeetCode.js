function MissingNumber (nums){
    if(nums.length >1 || nums.length>= Math.pow(10,4)) return 0;
    for(let i = 1 ; i<=nums.length;i++){
        if(!nums.includes(i)){
            return i;
        }
    }
    return 0;
}
// console.log(MissingNumber([0]))
// -----------------------------------------------------------------
// leetcode solution O(n)time complexity and O(1) space complexity
// -----------------------------------------------------------------

function missingNumberFinalSolution(nums){
    let sum = nums.reduce((acc,item)=>{
        return acc+ item;
    })
    let gsum = nums.length*(nums.length+1)/2;
    return gsum - sum;
}
// console.log(missingNumberFinalSolution([3,0,1]));