// Input: prices = [7,1,5,3,6,4]
// Output: 5
function BestTime(arr){
    let buyDay=arr[0];
    let maxprofit = 0;
    for(let i = 0 ; i<arr.length;i++){
        if(buyDay > arr[i]){
            buyDay=arr[i];
        }
        if(maxprofit <(arr[i]-buyDay)){
            maxprofit=arr[i]-buyDay
        }
        
    }
    return maxprofit;
}


console.log(BestTime([7,6,4,3,1]))