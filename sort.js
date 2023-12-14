// // Write a JavaScript conditional statement
// // to sort three numbers. Display an alert box to show the results.

// if(a>b){
//     console.log(b,a)
// }
// else{
//     console.log(a,b)
// }

// let a = 4;
// let b = 0;
// let c =-1;

// if(a>b && a>c){
//     if(b<c){
//         console.log(a,b,c)
//     }
//     else{
//         console.log("error");
//     }
// }

let a = [2,3,1,4];
let temp ;

for(let i=0; i<a.length-1; i++){
    for(let j=i+1; j<a.length; j++){
        // console.log("j", a[j], "i", a[i]);
        if(a[j]<a[i]){
            temp = a[j];
            a[j] = a[i];
            a[i] = temp    
        }
        // console.log("i", a[i])
        // console.log("j", a[j])
        // console.log(i,j,a[j]);
    }
}
console.log(a);
// // let start = a[0];
// let temp =0;

// let newA = [];

// for(let i=0; i<a.length ; i++){
//     if(a[i+1] < a[i]){
//         temp = a[i+1];
//         console.log(temp);

//         // a[i+1] = a[i];
//         // a[i] = temp; 
//     }
//     // newA.push(temp);

// }
// console.log(temp);

