console.log("----- Parse Int ------");
console.log(parseInt(9/2));
console.log(parseInt(10/2));

console.log("----- Print reverse numbers pattern ------")
let number=10;

let div = parseInt(number/2)

for(let i=(div-1); i>0; i--)
{
	console.log(i);
}

console.log(div);

for(let i=number; i>div; i--)
{
	console.log(i);
}