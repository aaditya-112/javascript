// 704. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

let nums = [-1,0,3,5,9,12]
let target = 9


function binarySearch(arr,num){
    let start = 0;
    let end = arr.length -1;
    
    while(start <=end){
       let mid= Math.floor((start+end)/2)
        
        if(arr[mid]<num){
            start= mid+1
        }
        else if(arr[mid]>num){
            end= mid-1
        }
        else  return mid;
        
    }
    return -1;
}
console.log(binarySearch(nums,target))