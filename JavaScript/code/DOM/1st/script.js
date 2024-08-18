console.log(document)
//DOM Selection
const x1=document.getElementsByTagName('p')
console.log(x1[0])
const x2=document.getElementsByClassName('para')
console.log(x2[0])

const x3=document.getElementById('pa')
console.log(x3)
const x4=document.querySelector('p') //it return only the 1st element
console.log(x4)
const x5=document.querySelectorAll("p")
console.log(x5)

//DOM MANIPULATION
function fun()
{
    //x3.textContent= "Byeeeeeeee"
    //x3.innerText //it consider css
    x3.innerHTML=`<b>Bye Byy</b>`
    x3.style.backgroundColor="red"
    x3.style.display="none"
}