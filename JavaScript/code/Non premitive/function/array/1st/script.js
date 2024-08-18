let arr=[2,5,8,4,1];
console.log(arr[0]+arr[3])
//array have some default method
console.log(arr.length)
console.log(arr.push(5,8,7)) //is used to add value at the end of the array
console.log(arr)
console.log(arr.pop()) 
console.log(arr)         //removed last only one element
console.log(arr.unshift(1,2,3))  //add element in the starting of array
console.log(arr)
console.log(arr.shift())   //shift is used to reove 1st element of the array
console.log(arr)
console.log(arr.splice(3,3,11,12,13))  //splice is used to delete the element from the arr 1st is the arry inde from where to delete 2nd is count to delete 3rd element to add in that index 
console.log(arr)


//let friend=["john","ross","rachel","monica","phoede","brad"]
//remove "brad" add joey
//remove "john" add "chandler"
//between rachel and monica add ursella
let friend=["john","ross","rachel","monica","phoede","brad"]
console.log(friend)
console.log(friend.pop())
console.log(friend.push("joey"))
console.log(friend)
console.log(friend.shift())
console.log(friend.unshift("chandler"))
console.log(friend)
console.log(friend.splice(3,0,"ursella"))
console.log(friend)