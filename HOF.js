// pythagorus theorm

// let a=10;
// let b=11;
// let c=12

function pythagorus(a,b,c){
    let d = a*a + b*b;
    let e = c*c
    console.log("a square and b square is " + d);
    console.log("c square " + e);
    // return d;
} 
// pythagorus(10,11,12);

// The semi-perimeter of triangle ABC = s = (a + b + c)/2
// Then, the area of triangle ABC = √[s × (s – a) × (s – b) × (s – c)]

function area(a,b,c){
    let semiPerimeter = (a+b+c)/2 ;

    let areaOfTriangle = semiPerimeter * (semiPerimeter - a) * (semiPerimeter-b) * (semiPerimeter-c);

    let squareRoot = Math.sqrt(areaOfTriangle);

    console.log("Area of triangle" + squareRoot);

}
// area(10,11,12);

function check(a,b,c){
    if((a+b)==c){
        console.log("It is equal")
    }
    else{
        console.log("it is not equal");
    }
}
// check(10,11,12)


function test(logic, a, b, c) {
    return logic(a,b,c)
}

test(area, 1,2,3)
test(pythagorus,1,10,23);
test(check,20,10,90)