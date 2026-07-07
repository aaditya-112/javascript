// given an array arr of numbers , return the smallest number in the array . if the array is empty return null.

function smallestNum(arr){

    if(!Array.isArray(arr))return false;

    if(arr.length < 1) return null ;

    let min = Math.min(...arr)
    
    if(isNaN(min) || min === Infinity) return false;

    return min;
}

console.log(smallestNum([]))