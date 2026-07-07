// given an array of number, return the largest number in the array. if the array in empty, return null.

function largestNum(arr){

    if(!Array.isArray(arr)) return false

    if(arr.length<1) return null;

    if(arr.includes(Infinity) || arr.includes(-Infinity) || arr.includes(NaN)) return false;

    return Math.max(...arr);
}

console.log(largestNum([Infinity]))