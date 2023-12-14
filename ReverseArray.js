let a = [1,2,3,5,6,7];

let array = [];

function ReverseArray(){
    for(let i=a.length-1 ; i>=0 ; i--){
        array = array + " " + a[i];
    }
    console.log(array);
}
ReverseArray();