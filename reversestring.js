let a = "geetanjali";

let len = a.length;

let reverse = "";

function reverseString(){
    for(let i=len-1 ; i>=0 ; i-- ){
        reverse = reverse + " " + a[i];
    }

    console.log(reverse);

}

reverseString();