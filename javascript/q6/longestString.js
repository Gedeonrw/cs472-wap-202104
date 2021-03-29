function longestString(str){
    let longest = str[0];
for(let i=1; i<str.length; i++){
    if(str[i].length > longest.length){
        longest = str[i];
    }
   
}
return longest.length;
}
let st = ["jane", "johnaa","namess","maharishi","asdfghjklzxc"];
console.log(longestString(st));