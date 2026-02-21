// Product of array ecept self , leetCode- 238

let nums=[1,2,3,4]
let output = [];

// let product = nums.reduce((accumilator, nextElement)=>{
//     return accumilator * nextElement;
// })

// output= nums.map((element, index)=>{
//     return product/element;
// });
// console.log(output);

// solution 2
let temp;
for(let i=0;i<nums.length;i++){
    temp = 1;
    for(let j=0;j<nums.length;j++){
        if(i!=j){
            temp = temp * nums[j];
        }        
    }
    output[i]= temp;
}
console.log("solution 2nd",output);