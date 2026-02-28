let height = [1,8,6,2,5,4,8,3,7];
let answer=0;
// ----Solution 1.

// for(let i=0;i<height.length;i++){
//     for(let j=i+1; j<height.length;j++){
//         let w= j-i;
//         let h= Math.min(height[i],height[j]);
//         // let area = h*w;
        
//         // answer = Math.max(answer, area)
//         if(answer<(w*h)){
//             answer= w*h;
//         }
//     }
// }
// console.log(answer);

// ------solution 2.
let leftPointer = 0;
let rightPointer = height.length-1 ;

while(leftPointer<rightPointer){
    let w = rightPointer - leftPointer;
    let h = Math.min(height[leftPointer], height[rightPointer]);
    // console.log(w);
    // console.log(h);
    if(answer < w*h){
        answer=w*h;
    }
    // console.log(answer)
    height[leftPointer] < height[rightPointer] ? leftPointer++ : rightPointer--;
    // if(height[leftPointer]< height[rightPointer]){
    //     leftPointer++;
    // }
    // else{
    //     rightPointer++;
    // }
}
console.log(answer);