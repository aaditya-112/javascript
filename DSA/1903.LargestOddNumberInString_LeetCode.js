// Input: num = "52"
// Output: "5"

// Input: num = "35427"
// Output: "35427"

// Input: num = "4206"
// Output: ""

function LargestOddNumberInString (num) {
    let lastOddnum ;
    
   for(let i = num.length -1 ; i>=0 ; i--){
        if((Number(num[i])%2)!==0){
            return num.slice(0,i+1);
        }
   }
   return "";

}

console.log(LargestOddNumberInString("42564"));