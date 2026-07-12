//  sum 
function sum(...nums){
    let answer = nums.reduce((acc,currItem)=>{return acc+currItem},0)
    return answer;
}
// console.log(sum(50,150,40,60,90,10))

// Q2. Second largest digit in string
function secLarDig(str){
    let onlynumber = [];
    for(let i = 0 ; i<str.length;i++){
        if(!isNaN(str[i])){
            onlynumber.push(str[i]);
        }
    }
    // let uniqe=[];
    let onlyUniqueNumber = onlynumber.filter((item,index)=>{
        // if(!uniqe.includes(item)){
        //     uniqe.push(item)
        //     return item;
        // }
        return onlynumber.indexOf(item)===index;
    });
   
    onlyUniqueNumber.sort((a,b)=>b-a);
    console.log(onlyUniqueNumber);
    if(onlyUniqueNumber.length<=1)return -1;
    else return onlyUniqueNumber[1];
}
console.log(secLarDig("dfa154455537776afd"))