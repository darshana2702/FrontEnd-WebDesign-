/*function sum(a,...b) //rest operator it only in parameter
{
    console.log(a,b)
}
sum(2,3,5)
*/

/*==============================

let s=0;
function sum(...a)
{
    
    a.forEach((e)=>sum+=e)
}
sum(2,3,6,7,4,1,9,8,5);
console.log(s)
*/



/*=========================
let s=0;
function sum(...a)
{

    const newArr=[4,5,...a,6]
}
sum(2,3,6,7);
console.log(s)
*/



//destructuring
let arr=[5,6,7]
let [x,y,z]=arr;
console.log(x);
let obj={name:"raj",age:20}
console.log(obj.name)
console.log(obj.age)
const{name,age}=obj;
console.log(obj)

function display(a,b,...c)
{
    let arr=[...c]
    console.log(a,b,c)
}
display(5,4,3,5,8)
//============================================================================================
class car
{
name;price;color;
}
let obj1=new car()
obj1.name="kia"
let obj2=new car()
obj2.name="mercedes"
console.log(obj1.name,obj2.name)



//===========================================================================
class electronic
{
    devicename;price;
}
let obje1=new electronic()
obje1.devicename="fan"
let obje2=new electronic()
obje2.devicename="AC"
console.log(obje1.devicename,obje2.devicename)