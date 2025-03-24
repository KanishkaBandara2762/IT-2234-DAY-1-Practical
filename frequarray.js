//[4,8,3,4,3,2,1,8,4]
//find the most frequent in the array

let arr = [4, 8, 3, 4, 3, 2, 1, 8, 4];

let frequencyMap = {};
let maxFreq = 0;
let mostFrequentElement;

arr.forEach(num => {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;

    if (frequencyMap[num] > maxFreq) {
        maxFreq = frequencyMap[num];
        mostFrequentElement = num;
    }
});

console.log(`Most Frequent Element: ${mostFrequentElement}`);
// Output: Most Frequent Element: 4
