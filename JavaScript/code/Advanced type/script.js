//set - set is used to store or maniplute the unique data type
let s=new Set()

console.log(s)
s.add(5)       //use to add value
s.add(2)
s.add(2)
console.log(s)
//delete is used to for deleting,clered is used to cler whole set and has will check whether the element existed or not


//Map----is used to take values whose key values are unique
let m=new Map()
m.set('name','Darshana')
m.set('name','raj')
console.log(m.get('name'),m)

//date---
let dt=new Date()
console.log(dt)
console.log(dt.getTime())//give time in ms from mid night
//let newTime=dt.getTime()+(20*60*1000)
console.log(dt.toLocaleString())
dt.setDate(25)
console.log(dt)


//Regex(Regular expression)==used to create pattern
let re=/[A-Za-z]{3}/
console.log("hai bye".match(re))





