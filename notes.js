/* Javascript - Arrays */

// var john = ['john','smith', '1996','developer'];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// john.indexOf('designer') === -1 ? 'john is not a designer' : 'john is a designer';

// /*
// John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).

// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// GOOD LUCK 😀


function TipCalculator(bill)
{
	var percentage ;
	if(bill < 50){
		percentage = .2;
	
	} else if(bill >= 50 && bill < 200){
		percentage = .15;
	}else {
		percentage = .1;
	}
return percentage * bill;
}

console.log(TipCalculator(500));

/* Objects and Properties 
Key value pair 
Object Literal Syntax below */

var jane = {
	firstName : 'Jane',
	lastName : 'Sanders',
	birthYear : '1996',
	family : ['Bob', 'billy','john'],
	isMarries : true,
	job : 'developer'
};

console.log(jane);

/* To access the value , we can use dot notations and bracket notations  */

console.log(jane.lastName);
console.log(jane['firstName']);

// we can declare a var 

var x = 'birthYear';
console.log(jane[x]);

// we can mutate or re initialise a new value 

jane.job = 'designer';
// family.push = 'mily'; 
console.log(jane);

// new object syntax

var john = new Object()

john.firstName = 'john';
john.isMarries = false;
john['lastName'] = 'smith';

console.log(john);


/* Objects and methods 
defining a function while defining the objects */

var jane = {
	firstName : 'Jane',
	lastName : 'Sanders',
	birthYear : '1996',
	family : ['Bob', 'billy','john'],
	isMarries : true,
	job : 'developer',
	calcAge : function(birthYear){
		return 2020 - birthYear;
	}
};

console.log(jane.calcAge(1996));

// we can use 'this' method instead of writing 1996 in console, instead of passing 
// birthyear we can use this inside the object 
// this will define the current object 

var jane = {
	firstName : 'Jane',
	lastName : 'Sanders',
	birthYear : '1996',
	family : ['Bob', 'billy','john'],
	isMarries : true,
	job : 'developer',
	calcAge : function(){
		return 2020 - this.birthYear;
	}
};

console.log(jane.calcAge());

//or 

var age = jane.calcAge();
jane.age = age;

//or 

jane.age = jane.calcAge();

// or we can use this in the objects 

var jane = {
	firstName : 'Jane',
	lastName : 'Sanders',
	birthYear : '1996',
	family : ['Bob', 'billy','john'],
	isMarries : true,
	job : 'developer',
	calcAge : function(){
		this.age = 2020 - this.birthYear;
	}
};

jane.calcAge();
console.log(jane);


/*
Let's remember the first coding challenge where Mark and John 
compared their BMIs. Let's now implement the same functionality
ith objects and methods.
1. For each of them, create an object with properties for 
their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).*/

var Mark = {
	firstName : 'Mark',
	lastName : 'Johnson',
	mass : 90,
	height : 1.97,
    calcBmi : function(){
	this.bmi = this.mass / (this.height * this.height);
	return this.bmi;
    
}
}

var John = {
	firstName : 'John',
	lastName : 'Sanders',
	mass : 150,
	height : 1.37,
    calcBmi : function(){
	this.bmi = this.mass / (this.height * this.height);
	return this.bmi;
    
}
}
Mark.calcBmi();
John.calcBmi();
console.log(Mark, John);

if (John.bmi > Mark.bmi){
	console.log(John.firstName + ' has higher BMI than ' + Mark.firstName);
} else if (Mark.bmi > John.bmi) {
	console.log(Mark.firstName + ' has higher BMI than ' + John.firstName);
} else {
	console.log(John.firstName + ' and ' + Mark.firstName + ' have the same BMI ');
}






