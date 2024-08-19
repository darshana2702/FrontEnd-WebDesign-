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