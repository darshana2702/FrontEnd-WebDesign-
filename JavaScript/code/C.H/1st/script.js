const names=["Raju","Ravi","Ramya","Ravan","Raghav","Raju","Ravi","Ramya","Ravan"]
const mainDiv=document.getElementById('main')

names.forEach(function(n)
{
const para=document.createElement('p') //<p></p>
para.textContent="Hi" + n;
mainDiv.appendChild(para)
})