//  sum 
function sum(...nums){
    let answer = nums.reduce((acc,currItem)=>{return acc+currItem},0)
    return answer;
}
// console.log(sum(50,150,40,60,90,10))

// Q2. Second largest digit in string
function secLarDig(str){
        {
            // use for loop
            // let onlynumber = [];
            // for(let i = 0 ; i<str.length;i++){
            //     if(!isNaN(str[i])){
            //         onlynumber.push(str[i]);
            //     }
            // }
        }
        // using filter method
        let onlynumber=str.split('').filter((item, index)=>{
            return !isNaN(item)
        })
        console.log(onlynumber)
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
// console.log(secLarDig("dfa154455537776afd"))

// question number 9. Palindrome integer
// Input: x = 121
// Output: true
// Input: x = -121
// Output: false
function isPalindromeInt(num){
    let rev=0;
    let copyNum= num;

    while(num>0){
        let lastDigit = num%10;
        rev=rev*10 + lastDigit;
        num=Math.floor(num/10);
    }
    if(rev===copyNum) return true;
    return false;

}
// console.log(isPalindromeInt(-121))

// using string method
 function isPalindromeIntByString(num){
   return num.toString().split('').reverse().join('') === num.toString()
 }
 console.log(isPalindromeIntByString(10))