//Find the maxium array
let a=[1,5,8,9,12]
let max = 0
a.forEach((n)=>{
	(max<n)&&(max=n)
})
console.log("Maxium number is : " +max)