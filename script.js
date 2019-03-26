// var firstName = 'John';
// console.log(firstName);
// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// type coercion
/************** 
*/
/******** 
var firstName = 'John'
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried ='false';

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

//  Basic operators
 
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark; 
console.log(yearJohn);

console.log(now + 2);
console.log(now + 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John')
var x;
console.log(x);
*/

/****
 *operator precedence
 

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);
/******
 * coding challenge
 
var markMass = 50;
var markHeight = 180;
var johnMass = 60;
var johnHeight = 170;

var johnBmi = johnMass / (johnHeight*johnHeight);
var markBmi = markMass / (markMass*markMass);

var markHigherBmi = markBmi > johnBmi;
console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBmi);
*/
/****** 
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markMass = 50;
var markHeight = 180;
var johnMass = 60;
var johnHeight = 170;

var johnBmi = johnMass / (johnHeight*johnHeight);
var markBmi = markMass / (markMass*markMass);
if (markBmi > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\' BMI is higher than Marks\'s.');
}


// var markHigherBmi = markBmi > johnBmi;
// console.log('Is Mark\'s BMI higher than John\'s?' + markHigherBmi);
*/

/************
 * Boolean logic
 

var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {//between 13 and 20}
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 age <30) {
    console.log(firstName + 'is a young man.');
} else {
    console.log(fistName + ' is a man.');
}
*/

/************
 * The Ternary Operator and Switch Statements
 

var firstName = 'John';
var age = 10;


age >= 18 ? console.log(firstName + 'drinks beer.')
: console.log(firstName + 'drinks juice.');

var drink = age >= 18 ? 'beer': 'juice';
console.log(drink);

/*if (age >= 18) {
    var drink = 'beer';
} else{
    var drink = 'juice';
}*/
/****** 
// switch statement
var job = 'teacher';
switch(job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + 'does something else');
}
age = 20;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
    break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
    break;
    default:
        console.log(firstName + ' is a man.');
    
}
*/

/*****
 * Truthy and Falsy values and equality operators
 */
// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values
/************ 
var height;

height = '23';
if (height || height === 0){
    console.log('Variable is defined');
} else {
    console.log('Variable has Not been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}

/*********
 coding challenge 2
 

 var AvgJohn = (89 + 120 + 103) / 3;
 var AvgMike = (116 + 94 + 123) / 3;
 var AvgMary = (97 + 134 + 105) /3;
 console.log(AvgJohn, AvgMike, AvgMary);

 if (AvgJohn > AvgMike && AvgJohn > AvgMary);
 {
     console.log('John\'s team wins with ' + AvgJohn + 'points');
 }
            

 if ( AvgJohn > AvgMike){
     console.log('John' + AvgJohn);
 } else if(AvgMike > AvgJohn) {
     console.log('Mike ' + AvgMike);
 } else{
     console.log('There is a draw');
 }

 */
/************
 * functions
 
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

//  functions can call other functions
function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
     var retirement = 65 - age;

    if(retirement > 0) {
        console.log(firstName + 'retires in'+ retirement + ' years');
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike'); 
yearsUntilRetirement(1969, 'Jane');
*/
/*******
 * Function statements and Experssions
 
// Fuction declaration
// function whatDoYouDo(job, firstName){ }
//Fuction expression
var whatDoYouDo = function(job, firstName){
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' dirves a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + 'does somethin else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));

// the difference between expressions and statement
// value 가 있으면 expressions
// 2 + 3  = 5
// typeof 23 은 expression value 를 가지고 오기 때문에
//else if -> statement
*/

/*****
 * Arrays
 * /
 
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);
console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names); 

// different data types
var john = ['John', 'Smith', '1990', 'teacher', false];

john.push('blue');
john.unshift('Mr.')
console.log(john);
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesinger = john.indexOf('designer') === -1 ? 'John is Not a designer' : 'John Is a designer';
console.log(isDesinger);


/****
 * coding challenge
 

function tipCalculator(bill){
    var percentage;
    if (bill < 50){
        percentage = .2;
    } else if (bill >= 50 &&bill < 200){
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage  * bill;
}

console.log(tipCalculator(100));

var bills = [124, 48, 268]
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
console.log(tips);

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
 */

 /*********
  * objects and properties
  
// object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john, firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = 'true';
console.log(john);

// new object syntx
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1960;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/********
 * 
 
// this.birthYear => john.birthYear
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    clacAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};

john.clacAge();
console.log(john);
*/
/*******
 * coding challenge
 

var john = {
    fullName: 'John Smith',
    mass: 50,
    height: 180,
    clacBMI: function(){
       this.bmi = this.mass /(this.height * this.height);
       return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 70,
    height: 1.69,
    clacBMI: function(){
       this.bmi = this.mass /(this.height * this.height);
       return this.bmi;
    }
}

john.clacBMI();
mark.clacBMI();

if (john.clacBMI > mark.clacBMI){
    console.log(john.fullName + ' has a higner BMI of' + jhon.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + 'has a higher BMI of ' +  mark.bmi);
} else {
    console.log('They hav the same BMI');
}
*/

/************
 * Loops and iteration
 */

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1, 10 true, log i to the console i++
// ..
// i = 10, i< 10 False, exit the loop!
/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i <john.length; i++) {
    console.log(john[i]);
}

var i = 0;
while(i < john.length) {
    console.log(john[i]);
}
*/
// continue and break statements
/****** 
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i <john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i< john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length -1; i >= 0; i--){
    console.log(john[i]);
}
*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    clacTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // Detemine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else (bill >= 50 && bill < 200)  {
                percentage = .15;
            } else {
                percentage = .1;
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
