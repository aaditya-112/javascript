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

let fruits = ["apple", "orange", "mango", "grapes", "banana"];

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
                let arr2 = arr.map((item)=>{
                        let value = item*2;
                        return value;
                })
                console.log(arr2);
                console.log(arr);
