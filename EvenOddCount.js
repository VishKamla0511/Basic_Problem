let a = [1,2,3,4,5,6,7];

let len = a.length;

let even_count = 0;

let odd_count = 0;

function EvenOddCount(){
    for(let i = 0 ; i<len ; i++){
        if(a[i]%2==0){
            even_count = even_count + 1;
        }
        else{
            odd_count = odd_count + 1;
        }
    }
    console.log("even count", even_count);
    console.log("odd count",odd_count);
}

EvenOddCount();