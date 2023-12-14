let a = [1,2,3,4,5,6,7,8,9,10];

// let count_even = 0
// let count_odd = 0

function evenodd() {
    for(let i=0; i<a.length; i++){
        if(a[i]%2==0){
            console.log(a[i], "even");
            // count_even ++;
        }
        else if(a[i]%2!==0){
            console.log(a[i], "odd");
            // count_odd ++ ;
        }
    }

    // console.log(count_even, "even count");
    // console.log(count_odd,"odd count");

    // console(c + "  " + d);
    
}

evenodd()