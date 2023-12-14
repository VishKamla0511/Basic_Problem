let a = [1,-2,5,3,4,-99,0,-11];

function FindPositiveNegativeNumber(){
    for(let i=0; i<a.length; i++){
        if(a[i]>0){
            console.log("positive number =>",a[i]);
        }
        else if(a[i]<0){
            console.log("Negative Number =>",a[i]);
        }
        else{
            console.log("Equal Number =>",a[i]);
        }
    }
}

FindPositiveNegativeNumber();