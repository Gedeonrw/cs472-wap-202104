let isVoyel = function(s){
    let ar = ["a","i","e","o","u"]
    for(let i=0; i<5; i++)
    if(s==ar[i] ){
        return true;
    }
    return false;
    
}
console.log(isVoyel("e"));
