function display()                       //function declaration
{
    console.log("hello i'm a function")  //function defination
}
console.log("Hello world")
display();
function add(a,b)                            //parameteries function
{
    console.log("the addition is "+(a+b))
}
add(8,8)
//add("Darshana","Dose")
function add(a,b=10)                            //default parameteris given when the fun call does not contain the value66


{
    console.log("the addition is "+(a+b))
}
add(8)

//function can return a value
function sum(a,b)
{
    return a+b;
}
let x=sum(5,10);
console.log("sum is " +x)

var sum=function(a,b)  //function expression                       //function expression
{
    return a+b
}
console.log(sum)


var sum=(a,b) => a+b;          //arrow function



//write a function that calculate and print se and cube of a no. use arrow fun and fun expression
function sqcube(n)
{
    console.log(n*n)
    console.log(n*n*n)
}
sqcube(5)





//Wite a function to convert 1st and last in upper case
function name(str)
{
    let c=str.length
    return str[0].toUpperCase()+str[7].toUpperCase();
}
let result = name("darshana")
console.log(result)


//callback is fun is passed as a parameter to another function
function mad()
{
console.log("i'm mad")
} 
function bad(a,b)
{
    console.log(b)
console.log("i'm bad"+a);
b();
}
bad(5,mad)
//=====================================================

function addcart()
{
    console.log("item is added successfully")
}
function cart(a)

{
    a()
    console.log("proced to checkout")
}
function checkout(b)
{
b(addcart)
console.log("do the payment")
}
checkout(cart)

//====================================================
function kill()
{
    console.log("i'm kill")
}
function bill()
{
    console.log("bill")
}
function mix(a,b)
{
    a();
    b();
console.log("pandey")
}
mix(kill,bill)
//====================================================

//closure means inner function rember outer function value even after outer function execution ended
function x2()
{
    var count =0;
    function y()
    {
        count++
        console.log(count)
    }
    return y
}
let z=x2()
console.log(z)
z();
z();
z();