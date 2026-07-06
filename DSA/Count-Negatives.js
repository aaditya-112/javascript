// Given an array arr of numbers return the count of element strictly less than 0
// input: arr= [-1,0,1]
// output : 1

function countNegative (arr){
    if(!Array.isArray(arr))return false;
    let negativeElements = arr.filter((item)=>{return item<0})
    return negativeElements.length
}
console.log(countNegative(undefined))