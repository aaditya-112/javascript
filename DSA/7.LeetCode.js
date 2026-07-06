// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Input: x = 123
// Output: 321
function reverseInteger (input){
    let rev = 0;

    let num = Math.abs(input);
    while(num>0){
        let lastDigit = num % 10;
        rev= rev*10+lastDigit;
        if (rev > (2**31)-1 )return 0;
        num= Math.floor(num/10);
    }
    if(input<0){       
        if(-rev < Math.pow(-2,31)){return 0}
        else return -rev;
    }
    else return rev;
   
}

console.log(reverseInteger(2147483647))
//  console.log(Math.pow(2,31)-1)