//reverse the array using push and pop
//a b c d -> d c b a

let arr5 = ['a', 'b', 'c', 'd'];
let reversedArr = [];  // New array to store reversed elements

while (arr5.length > 0) {  
    let poppedElement = arr5.pop();  // Remove the last element
    reversedArr.push(poppedElement); // Add it to the new array
}

console.log(reversedArr); 
// Output: ['d', 'c', 'b', 'a']
