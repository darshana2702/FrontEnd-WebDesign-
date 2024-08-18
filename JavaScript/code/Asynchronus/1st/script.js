let a=20;
const myInterval=setInterval(function()   //settimer  it running the fun after a specific time
{                         //setinterval will keep on runing the fun in interval of time repeat again & again
    a++;
    console.log(a);
    if(a>=25){
        clearInterval(myInterval);
    }
},1000)
console.log("Hello World")
//there are 2 timer in JS ,this timer provided by browser