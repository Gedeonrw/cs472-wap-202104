let sum=0;
let summ=[];
for (let i=0; i<arr.length; i++){
    summ[i] = function(){
    sum=sum+arr[i]
    return sum;
}
}
let arr=[1,2,3,4,5];
console.log(summ(arr));