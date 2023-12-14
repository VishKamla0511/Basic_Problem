let a = 73;

let temp = 0;

function primeNumber(){
    for(let i=2; i<=a-1; i++){
       if(a%i==0){
        temp ++;
        // console.log(i,"not prime")
       }
    }

    if(temp > 0){
        console.log("it is not prime number");
    }

    else{
        console.log("it is a prime number");
    }
}

primeNumber();