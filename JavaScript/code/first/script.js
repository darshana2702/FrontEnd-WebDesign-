console.log("Hello World")
var a=20;
var a=30;//redeclaration is posssible using var
a=55//reassinging is allowed using var
console.log(a);
let b=20;
//let a=30; let and const cannot redeclare
b=55;//reassining is allowed using let
console.log(b);
const c=25;
//c=55;cannot reassining const value
function display()
{
    if(true){
        var x=55;
    }
    console.log(x);
}
display()