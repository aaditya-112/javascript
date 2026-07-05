// function sum (...args){
//     let answer = 0;
//    for( let i = 0 ; i<=args.length-1;i++){
//     answer= answer + args[i];

//    }
//    return answer;

// }
// console.log(sum(-100, 200, 300, 654.26));

// function sum (...args){
//    let ans = args.reduce((acc, currItem)=>{
//         return acc + currItem;
//    },0)
//    return ans;
// }
// console.log(sum());

function sum (...args){
    let sum = 0;
    let ans = args.map((currItem)=>{
        sum = sum + currItem;
        return sum;
    })
    return ans;
}
console.log(sum(100,200));