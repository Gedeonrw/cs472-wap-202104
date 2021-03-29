function reversed(st){
var newStr = "";
    for (var i=st.length-1; i>=0; i--){
       newStr += st[i];
    }
    return newStr;
}
var a = "betty";
console.log(reversed(a));