const prices =[7,5,4,3,2,1];
//  [7,1,5,3,6,4]
let bestBuy=prices[0];
let maxProfit = 0;

for(let i =0 ;i<prices.length;i++){
    if(bestBuy>prices[i]){
        bestBuy=prices[i]
    }
    
    if( maxProfit<(prices[i]-bestBuy)){
            maxProfit= prices[i]-bestBuy;
        }
    
    
}
console.log(bestBuy);
console.log(maxProfit);

