//Define 10 students JSON
//store itr in an array
//find the female students
//find the students who are following IT caurse 
//find the Max and Average GPA among the students 


// Step 1: Define 10 students in a JSON-like array
let students = [
    { name: "Alice", gender: "Female", course: "IT", gpa: 3.8 },
    { name: "Bob", gender: "Male", course: "Business", gpa: 3.2 },
    { name: "Charlie", gender: "Male", course: "IT", gpa: 3.6 },
    { name: "Diana", gender: "Female", course: "Engineering", gpa: 3.9 },
    { name: "Eva", gender: "Female", course: "IT", gpa: 3.7 },
    { name: "Frank", gender: "Male", course: "Medicine", gpa: 3.1 },
    { name: "Grace", gender: "Female", course: "IT", gpa: 3.5 },
    { name: "Henry", gender: "Male", course: "IT", gpa: 3.3 },
    { name: "Ivy", gender: "Female", course: "Business", gpa: 3.4 },
    { name: "Jack", gender: "Male", course: "IT", gpa: 3.9 }
];

// Step 2: Find female students
let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

// Step 3: Find students in IT course
let itStudents = students.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);

// Step 4: Find Max and Average GPA
let maxGPA = Math.max(...students.map(student => student.gpa));

let avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2)); // Rounded to 2 decimal places
