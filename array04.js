let a = [2, 4, 6, 7, 4, 5, 3, 4];
let b = [1, 6, 8, 3, 2, 4, 5, 5];

let commonElements = a.filter((value) => b.includes(value));

// To remove duplicates
commonElements = [...new Set(commonElements)];

console.log(commonElements); // Output: [2, 4, 6, 3, 5]
