
let sum = function(ar){
let summ =0;
for (let i=0; i<arr.length; i++){
    summ+=arr[i]
    
}
return summ;  
}

let mult = function(ar){
    let times =1;
    for (let i=0; i<arr.length; i++){
        times*=arr[i]
        
    }
    return times;  
    }

let arr=[1,2,3,4,5];
console.log(sum(arr));
console.log(mult(arr));