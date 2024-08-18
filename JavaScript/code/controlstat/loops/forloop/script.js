for(let i=1;i<=10;i++)
{
    console.log(i)
}

//"prasad"----->"PrAsAd"

let str="prasad"
let str1=''
for(let i=0;i<str.length;i++){
    str1 += (i%2==0)?str[i].toUpperCase():str[i].toLowerCase();
}
console.log(str1)

//for of  default function it check each and every element from the array  . for of is used for visit he value
let arr=[5,8,9,1,2]
for(let k of arr){
    console.log(k)
}


//for in   is used to give the index
for(let k in arr)
{
    console.log(k)
}

//["Ajay Raj","John Doe","Raj Shekhar","Pooja Begum"]--->["AR","JD","RS",PB]

//let arr1=["Ajay Raj","John Doe","Raj Shekhar","Pooja Begum"]
let p=''
p+="Ajay Raj".split(" ").map(ele => ele[0]);
console.log(p)
