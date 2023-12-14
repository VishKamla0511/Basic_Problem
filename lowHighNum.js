let a = [11,567,234567,0,12,98];

let min = a[0];
let max = a[0];

function LowestHighestNumber(){
    for(let i=0; i<a.length; i++){
        if(a[i]>max){
            max = a[i];
        }
        else if(a[i]<min){
            min = a[i];
        }
    }
    console.log("min value in array =>" , min);
    console.log("max value in array =>" , max);
}

LowestHighestNumber();