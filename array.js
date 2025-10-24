// Creatind arrays:

// Using Array constructo

        // let fruits = new Array("apple","orange","banana");
        // console.log(fruits);
        // console.log(typeof(fruits));

// Using array literal

        // let fruits =["apple", "orange","banana"];
        // console.log(fruits);

// Accessing Elements:

// Accessing element: Array elements are accessed using zero-based indices.

        // let fruits =["apple", "orange","banana"];
        // console.log(fruits[0]);

// Array Traversal / Itrating Over Arrays

// let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// 1: for loop

        // for (let item=0 ; item < fruits.length; item++){
        //     console.log(fruits[item])
        // }

// 2: for of loop
//* for of Loop: the for of loop is used to iterate over the values of an iterable object, such as arrays, string, or other iterable objects.

        // for (let items of fruits){
        //     console.log(items);
        // }

        // example 2:
        // let num = [1,2,3,4,5,6]
        // for (let items of num){
        //     items = items*2 ;
        //     console.log(items);
        // }

// 3: for in loop
//* for in Loop : The for in loop  is used to iterate over the properties (including indeces) of an object.

        // for (let item in fruits){
        //     console.log(item);
        // }

// 4: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the element of the given array.

        // fruits.forEach((item , index, arr )=>{
        //         console.log(item , index);
        //         console.log(arr);
        // })



// 5: map function 
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

        // fruits.map((item, index, arr)=>{
        //         console.log(item, index);
        //         console.log(arr);
        // })     

// example 2: to understand difference b/w for each and map method.
        
        let arr =[ 1,2,3,4,5,6];        
        // forEach method 
        
                // let arr2= arr.forEach((items)=>{
                //         let value = items*2;
                //         console.log(value);
                //         return value;
                // })
                // console.log(arr2)
                // console.log(arr)

        // map method
                // let arr2 = arr.map((item)=>{
                //         let value = item*2;
                //         return value;
                // })
                // console.log(arr2);
                // console.log(arr);

// how to insert , add , replace and delete element in array .

let fruits = ["apple", "orange", "mango", "grapes", "banana"];

// 1: push():method that add one or more element to the end of an array.

        // fruits.push("guava");
        // console.log(fruits);
        // push return the length of the array.
        // console.log(fruits.push("guava"));
// 2: pop():Method that remove the last element from an array.

        // fruits.pop();
        // console.log(fruits);

        // pop() return the element which is removed from array.
        // console.log(fruits.pop());

// 3: unshift():Method that addds one or more element to the beginnning of an array.

        // fruits.unshift("guava");
        // console.log(fruits);

        // unshift return the new length of an array.
        // console.log(fruits.unshift("guava"));

// 4: shift():Method that remove the first element from an array.

        // fruits.shift();
        // console.log(fruits);

        // shift return the removed element from array.
        // console.log(fruits.shift());

// 5: splice():that splice() method of array instance changes the contents of an array by removing or replacing existing element and /or adding new elements in place.

        // console.log(fruits);
        // fruits.splice(0,1);
        // fruits.splice(1,3);
        // fruits.splice(0,0,"aditya", "koundal");
        // console.log(fruits);