//Write a code to find all the pairs that sum up to 7
//arr3 =[1,2,3,4,5]
//target 7

let arr3 = [1, 2, 3, 4, 5];
let target = 7;

let pairs = [];

for (let i = 0; i < arr3.length; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
        if (arr3[i] + arr3[j] === target) {
            pairs.push([arr3[i], arr3[j]]);
        }
    }
}

console.log(pairs); 
// Output: [ [2, 5], [3, 4] ]
