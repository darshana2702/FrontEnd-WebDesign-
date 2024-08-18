//simple if
let a=5
if(a>0)
{
    console.log("a is greater then zero")
}

//if--else
if(a>=0)
{
    console.log("a is greater than or equal to zero")
}
else{
    console.log("a is not greater")
}

//positive or negTIVE

if(a>0)
{
    console.log("positive")
}
else if(a<0)
{
    console.log("negative0")
}
else{
    console.log("neither -ve nor +ve")
}

//let x=5,y=20,z=1; which is greater

let x=5,y=20,z=1;
if(x>y && x>z)
{
    console.log("x is greater")
}
else if(y>z)
{
    console.log("y is greater ")
}
else{
    console.log("z is greater")
}

//let x=5,y=20,z=1;
let max=((x>y)&&(x>z))?x:(y>z)?y:z
console.log(max)


