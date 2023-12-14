let string = "madam";

let length = string.length

for(let i =0 ; i<length/2 ; i++){
    if(string[i]==string[length-1-i]){ 
        console.log("it is same",string[i],string[length-1-i]);
     }
     else {
        console.log("it is not same" , string[i],string[length-1-i]);
       }
}

// console.log(string.length);