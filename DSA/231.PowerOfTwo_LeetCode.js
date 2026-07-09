// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

function powerOfTwo(num){
    if(num<1)return false;
    for(let i= 0; i<=num;i++){
        
        let power = 2**i;
        if(power>num){
            return false;
        }
        if(power===num){
            return true;
        }
    }
}

console.log(powerOfTwo(16));
