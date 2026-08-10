function Balancedsing(s){
    let subsing=[];
    let arrOfsubsings = [];
    let R = 0;
    let L = 0;
    for(let i =0; i<s.length;i++){
        if(s[i]=="R"){
             R++;  
             subsing.push(s[i]); 
        }else{
            L++;
            subsing.push(s[i]);
        }
        if(R==L){
            arrOfsubsings.push(subsing.join(''));
            subsing = [];
            R=0;
            L=0;
        }     
    }
    return arrOfsubsings.length;
}

// console.log(Balancedsing("LLLLRRRR"));

function LeetcodeSolution (s){
    let count =0;
    let R = 0;
    for(let c of s){
        if(c=="R"){
            R++;
        }else{
            R--;
        }
        if(R == 0){
            count++;
        }
    }
    return count;

}
console.log(LeetcodeSolution("LLLLRRRR"));