let a = 10;
let b = 11;

let temp;

function swapNumber(){
    temp = a;
    a = b;
    b = temp;
    

    console.log("a",a);
    console.log("b",b);
}

swapNumber();