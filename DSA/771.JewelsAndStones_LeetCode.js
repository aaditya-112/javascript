function jewelsAndStones (jewels, stones){
     let arrOfJewels = jewels.split('');
     let result =0;
     for(let i =0;i<stones.length;i++){
        if(arrOfJewels.includes(stones[i])){
          result ++;
        }
     }
     return result;
}
console.log(jewelsAndStones("aA","aAAbbbb"))
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3