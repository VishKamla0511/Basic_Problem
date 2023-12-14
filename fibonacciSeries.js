let a = 1;

let b = 1

let num ;

console.log(a);
console.log(b);

for(let i=0 ; i<=10 ; i++){
    num = a + b;

    //swap 
    //num = b
    //b = a

    a = b;
    b = num;

    console.log(num);
}

