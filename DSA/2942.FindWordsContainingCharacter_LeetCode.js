
function FindWords(words,x){
    // let result = words.filter((item, index)=>{
    //     return index && item.split('').includes(x)
    // })
    // return result;

    let result=[];
    for(let i = 0 ; i< words.length ; i++){
        if(words[i].split('').includes(x)){
            result.push(i);
        }
    }
    return result;

    // let result = words.filter((item, index)=>{
    //     let charArr = item.split('');
    //     if(charArr.includes(x)){
    //         return index;
    //     }
    // })
    // return result;
}
console.log(FindWords(["abc","bcd","aaaa","cbc"],"a"))
let str = "aditya"
console.log(str.split('').includes("a"));