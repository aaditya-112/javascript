// // ceck wheather the string is palandrom ?

// const str = "nitin";

// // method one 

// const revStr = [];
// let finalStr= "";

// for (i=1; i<=str.length; i++){
//    let counter = len - i;
//     revStr[i]= str.charAt(counter);
    
//     finalStr=revStr.join('');
    
// }
// document.write(finalStr);
// document.write("<br>")
// if(finalStr==str){
//         document.write("yes");
//     }
//     else{
//         document.write("no");
//     }


// const str = "hi i am aditya";

// const str2 = str.split(' ');
// let Length = 0 ; 
// let tempLength= 0;
// let element ;
// str2.forEach((item, index )=>{
//     tempLength = item.length;
//     if(tempLength > Length){
//         Length = tempLength;
//         // console.log(Length , str2[index]);
//         element= str2[index];
//     }
    
// })
// console.log(Length, element);

// console.log(str2[0]);

// Reverse the string



// for(let i =1 ;i<= leng; i++){
//     // finalStr = str.at(i-1);
//     // console.log(str.at(leng-i));
//     finalStr[i] = str.at(leng-i);
// }
// console.log(`final answer is: ${finalStr.join('')}`);
// // console.log(finalStr);
// // str.forEach((item,index )=>{
    
// // })

// let str = "hi my name is aditya";
// let aryStr= str.split('');
// let revStr = aryStr.reverse();
// let finalStr= revStr.join("");
// console.log(`reversed string is : ${finalStr}`);

// function reverseString (str){
//     let reversed = "";

//     for(let i = str.length-1; i>=0 ; i--){
//         reversed += str[i];
//     }
//     return(reversed);
// }

// console.log(reverseString("hello, my name is aaditya"));
// output : aytidaa si eman ym ,olleh


// using buit- in method 
// function reverseString(str){
//     return str.split(" ").reverse().join(" ");
// }
// console.log(reverseString("hi my name is aaditya"))

// Q2. check palindrome

// let str = "nit";
// let leftPointer = 0;
// let rightPointer = str.length-1

// while(leftPointer<rightPointer){
//     if(str[leftPointer]==str[rightPointer]){
//         leftPointer =+ 1 ;
//         rightPointer =-1;

//     }
//     else(console.log(`${str} is not a palindrome`))
// }

// let strArry= str.split('');
// let lastindex = strArry.length-1;
// let answer;
// for(let i = 0 ; i<= 2; i++){
//     if(strArry[i]==strArry[lastindex]){
//         lastindex =- 1;
//         answer = true;
//     }
//     else(answer = false);
        
// }
// console.log(answer)

// let aryStr = str.split('');
// let reversedStr = aryStr.reverse();
// // console.log(reversedStr)
// let isPalindrome = true;
// for(let i = 0; i<=str.length-1 ; i++){
//     if(aryStr[i]!==reversedStr[i]){
//         console.log("h");
//         isPalindrome = false;
//         break;
//     }
// }
// console.log(isPalindrome); 

// Palindrome using 2 pointer 

// function isPalindrome(str){
//     let left = 0 ;
//     let right = str.length-1;

//     while(left<right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left ++;
//         right --;

//     }
//     return true;
// }
// console.log(`nitn is palindrome ${isPalindrome("nit")}`)

// using buit in functions 

// function isPalindrome(str){
//     return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome("hello"))

function palinderome (str){
    return str.toString().split('').reverse().join('') === str.toString();
}
// console.log(palinderome(121))

function numberPalindrom(num){
    let copyNum = num
    let rev = 0;
    while(num>0){
        let lastDigit = num%10;
        rev = rev*10+lastDigit;
        num= Math.floor(num/10);
    }
    if(rev===copyNum) return true
    else return false

}
console.log(numberPalindrom(121121545484 ))
                               