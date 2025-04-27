//Insert one 
db.students.insertOne(
	{
		"regNo":"2021ICT26",
		"name":"Ranuja",
		"age":23,
		"degree":"IT",
		"gpa":3.4,
		"skills":["Node","C++","Java"],
		"gender":"Male"
		
	}
)


//Insert Many
db.students.insertMany(
	[
		{
			"regNo":"2021ICT123",
			"name":"Punya",
			"age":23,
			"degree":"IT",
			"gpa":3.62,
			"skills":["Node","C++","Graphics"],
			"gender":"Female"
			
		},
		{
			"regNo":"2021ICT71",
			"name":"Safia",
			"age":23,
			"degree":"IT",
			"gpa":3.98,
			"skills":["Node","MongoDB","Java"],
			"gender":"Female"
			
		},
		
	]
);



//Find Male Students
db.students.find({"gender":"Male"})

//Find age above 24
db.students.find({age:{$gt:24}})


//Find those who know C++
db.students.find({skills:{$in:["C++"]}})

//Sorting
	Go to "Option" > Sort
	1. Min to Max -  {gpa:1}
	2. Max to Min -  {gpa:-1}
	
	
//Sort male students by age
db.students.find({"gender":"Male"}).sort({age:1})