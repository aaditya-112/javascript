function lenLastWord(str){
    let result = 0;
    let arr = str.split(" ");
    console.log(arr);
    let onlywords= arr.filter((item)=>{return item.length>0})
    console.log(onlywords)
    let lastWord= onlywords[onlywords.length-1];
    console.log(lastWord.length);
}
// lenLastWord(" hello world ");
// leetcode solution
function lengthOfLastWord(str){
    let arrayOfWords = str.split(" ");
    let onlywords = arrayOfWords.filter((item)=>{return item.length>0});

    let result = onlywords[onlywords.length-1].length;
    return result
}
console.log(lengthOfLastWord( " hello world "))

