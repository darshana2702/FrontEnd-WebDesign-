arr=[2,3,1,4,3,5]
console.log(arr.indexOf(3),arr.lastIndexOf(3),arr[2]);
console.log(arr.reverse());
arr=[1,5,4,11]
console.log(arr.sort())          //it consider 1st element in js like in 11 is bigest but it consider 1st index as 1 
console.log(arr.concat(1,2,3))




//=============================================
//FOREACH METHOD


arr=[5,8,7,1,6]
function display(x,y)   //x=element and y=index of the element
{ 
    console.log(x*2,y)
}
arr.forEach(display)



//=======================================================
//sq of number using for each
arr=[5,8,7,1,6]
function sq(x,y){
    console.log(x*x,y)
}
arr.forEach(sq)

//OR
arr.forEach(function (x){
    console.log(x*x)         //array cannot be store in another variable and for each not allow to return 
}
)



// map return the value but for each cann't
arr=[1,2,3,4,5]
console.log(arr)
let arr2=arr.map(function (x){
    return x*x 
}
)
console.log(arr2)



//MAP =================================================


let res=arr.map(function (ele)
{
    return ele%2==0;
})
console.log(res)

//=======================================FILTER

let res2=arr.filter(function (ele)
{
    return ele%2==0;
})
console.log(res2)


//REDUCE=====================================

arr=[5,4,8,1,4]
let result=arr.reduce(function(prev,curr)
{
return prev+curr;
},10)
console.log(result)
