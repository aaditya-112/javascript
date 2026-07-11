// // // Create an array named fruits containing "apple", "banana", "mango", and "orange".

// //     // let fruits = ["apple", "banana", "mango", "orange"];

// // // Print the first and last elements of the array.

// //     // console.log(fruits[0]);
// //     // console.log(fruits[fruits.length-1]);

// // // Change the second element ("banana") to "grapes".

// //     // fruits[1]="grapes";
    

// // // Print the updated array.
// //     // console.log(fruits);


// // // Given an array numbers = [2, 4, 6, 8, 10],
// // // use a for loop to print the square of each element.

// //     // let arr=[2,4,6,8,10];
// //     // let sqr=[];
// //     // for(let i =0;i<arr.length;i++){
// //     //     sqr[i]=Math.pow(arr[i],2);
// //     //     sqr[i]= arr[i]*arr[i];
// //     //     sqr[i]= arr[i]**2;
// //     // }
// //     // let sqr = arr.map((item)=>{
// //     //     return Math.pow(item, 2);
// //     // })

// //     // console.log("square of each element",sqr);

// // // You have an array languages = ["JavaScript", "Python", "C++", "Java"].
// // // Use a for...of loop to print each language with the text:
// // // "I want to learn <language>".

// //     // let language =[ "JavaScript", "Python", "C++", "Java"];
// //     // for(item of language){
// //     //     console.log("I want to learn", item);
// //     // }

// // // Given an array marks = [40, 55, 70, 85, 90]:
// // // Use forEach() to print each mark with the text "Mark: <value>".
// // // Use map() to create a new array bonusMarks that adds 5 marks to each element, and print it.

// //     // let marks = [40, 55, 70, 85, 90];

// //     // marks.forEach((item)=>{
// //     //     console.log("Mark:",item);
// //     // })

// //     // let bonusMarks = marks.map((item)=>{
// //     //     return item + 5;
// //     // })
// //     // console.log(bonusMarks);


// // // Q: add dec at the end of an array?

// //     // let arr=["jan","march","april","june","july"];
// //     // console.log(arr);
// //     // arr.push("dec");
// //     // console.log(arr);

// // // Q: update march to March 

// //     // console.log(arr.splice(1,1,"March"));
// //     // console.log(arr);


// // // let arr = [1,2,3,4,5];

// // // console.log(arr.map((item, index)=> item > 3));
// // // console.log(arr.filter((item, index)=> item > 3));

// // // let str = "i am a boy";

// // // let vowels = ["a","e","i","o","u"];

// // // let countOfVowels = {
// // //     a:0,
// // //     e:0,
// // //     i:0,
// // //     o:0,
// // //     u:0
// // // }

// // // let newStr= str.split('');

// // // let newarr=newStr.map((item, index)=>{
// // //     for(i=0;i<vowels.length;i++){
// // //         if(item==vowels[i]){
// // //             countOfVowels[vowels[i]]++;
// // //         }
// // //     }
    

// // // })

// // // // console.log(newarr);
// // // console.log(countOfVowels);

// // function reverseInteger(num)
// // {
// //     // let rev;
// //     // if(num<0){
// //     //     num = Math.abs(num);
// //     //     rev = num.toString().split('').reverse().join('');
// //     //     return Number(-rev);
// //     // }
// //     // else{
// //     // rev = num.toString().split('').reverse().join('');
    
// //     // return Number(rev);
// //     // }
// //     let rev ;
// //     let n = Math.abs(num);

// //     rev = n.toString().split('').reverse().join('');
// //     if(num<0){
// //         if(-rev<Math.pow(-2,31))return 0;
// //         return Number(-rev);
// //     }
// //     else{
// //         if(rev>Math.pow(2,31)-1) return 0;
// //         return Number(rev);
// //     }
// // }
// // console.log(reverseInteger(2147483647))
// // // console.log(Math.pow(2,31)-1);

// // console.log([1,2]==[1,2])

// // for (var i =0; i<3;i++){
// //     setTimeout(()=>console.log(i),1000);
// // }

// // count of vowels

// // let vowels=["a","e","i","o","u"]
// // function coutVowels(str){
// //     let count= 0;
// //     for(let i =0; i<str.length;i++){
// //         if(vowels.includes(str[i])) count++;
// //     }
// //     return count;
// // }
// // console.log(coutVowels("aeioujdnc"))

// // count letter in a string
// // function coutFreq(str){
// //     let freq={};
    
// //     for(let i=0;i<str.length;i++){
// //         if(str[i]==" ")continue;
// //        if(freq[str[i]]){
// //         freq[str[i]]= freq[str[i]]+1;
// //        } 
// //        else{
// //         freq[str[i]]=1;
// //        }
// //     }
// //     return freq;

// // }
// // console.log(coutFreq("banana is"))

// // count frequency of vowels 
// // let vowels = ["a",'e','i','o','u'];
// // function freqVowels(str){
// //     let result = {}
// //     for(let i = 0;i<str.length;i++){
// //         if(str[i]==0)continue;
// //         if(vowels.includes(str[i])){
// //             if(result[str[i]]){
// //                 result[str[i]]++;
// //             }
// //             else{
// //                 result[str[i]] = 1;
// //             }
// //         }
// //     }
// //     return result;
// // }
// // console.log(freqVowels("aaditya koundal"))

// function vowelsCount(str){
//     let vowels = {a:0, e:0, i:0, o:0, u:0}
//     let arr =["a",'e','i','o','u']
//     for(let i = 0; i<str.length;i++){
//         if(arr.includes(str[i])){
//             vowels[str[i]]++;
//         }
//     }
//     return vowels
// }
// console.log(vowelsCount("hello"))

let srt = "hello";
console.log(srt.length);