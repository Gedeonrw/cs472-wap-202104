let isVoyel = function(s){
    let sLower = s.toLowerCase();
    let ar = ["a","i","e","o","u"]
    for(let i=0; i<5; i++)
    if(sLower==ar[i] ){
        return true;
    }
    return false;
    
}
console.log(isVoyel("E"));  // for loop uses O(n) its better to use switch case
