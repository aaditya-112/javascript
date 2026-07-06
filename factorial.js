// method 1 :- using for loop

function factorialForLoop (n){
    if(n<0) return "go to hell"

    if(n===0 || n===1)return 1

    let answer =1 ;
    for(let i = 2 ; i<=n;i++){
        answer *= i
    }
    return answer;
}

console.log(factorialForLoop(5))

function factorialRecursion (n){
    if(n<0)return "no way"
    if(n===0 || n===1) return 1

    return n*factorialRecursion(n-1);
}
console.log(factorialRecursion(2))