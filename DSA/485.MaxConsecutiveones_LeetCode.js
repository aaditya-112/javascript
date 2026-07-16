

// function maxConsecutiveOnces (nums){
//     let start = -1;
//     let end = 0;
//     let max = 0;
//     // console.log(nums.length,"length")
//     for(let i = 0; i<nums.length ;i++){
//         if(nums[i]==1 && start==-1){
//             start=i
//         }
//         if(nums[i]==0 && start>-1){
//             end = i;
//             max = end - start;
//             start = -1;
//             // end = 0;
//         }
//         if(i== nums.length-1 ){
//             max = nums.length-start;
//         }
        
//     }
//     // console.log("loop number =", i)
//         console.log("start = ",start)
//         console.log("end = ",end)
//         console.log("max Consecutive Once are", max )
//     ;
// }
             
// maxConsecutiveOnces([[1,1,0,1,1,1]])

function maxConsecutiveOnces(nums){
    let max = 0;
    let count = 0;
    for(let i=0 ;i<nums.length;i++ ){
        if(nums[i]==1){
            count ++;
            // console.log(count)
        }
        else {
            count = 0;
        }
        if(count>max){
            max=count;
            // console.log(max)
        }
    }
    return max;
}
console.log(maxConsecutiveOnces([1,0,1,1,0,1]))