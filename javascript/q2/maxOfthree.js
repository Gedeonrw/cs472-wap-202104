
let funct2 = function(a,b,c){

    if(a>b && a>c) return a;
    else if(b>a && b>c) return b;
    return c;
 }
console.log(funct2(12,2,34));
//using tenary

/*let funct2 = function(a,b,c){
return (a>b)?((n1>n3) ? a1: a3) : ((a2>a3) ? a2 : a3)
 }
console.log(funct2(12,2,34));*/