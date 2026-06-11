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

let str = "hi my name is aditya";
let aryStr= str.split('');
let revStr = aryStr.reverse();
let finalStr= revStr.join("");
console.log(`reversed string is : ${finalStr}`);
