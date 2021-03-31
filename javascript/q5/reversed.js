function reversed(st){
var newStr = "";
    for (var i=st.length-1; i>=0; i--){
       newStr += st[i];
    }
    return newStr;
}
var a = "abc sx";
console.log(reversed(a));

//reverse in-place
