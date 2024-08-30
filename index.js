console.log('Hello World');

//declaring variables
let firstName = 'John';
let lastName = 'Smith';
let age = 30;
let color = null;
let city = undefined;
let isMale = true;

//declaring objects

let user = {
    fname: 'John',
    lname: 'Smith',
    age: 30
};

// Dot Notation - To change properties in an object

//user.fname= 'Moses';

//bracket notation

//user[fname] = 'Moses';

console.log('My name is ' + firstName + ' ' + lastName)
console.log('My name is ' + user.fname )

// array is a data structure used to represent a list of items

let selectedColors = ['red', 'blue']
console.log(selectedColors[0]);

// Declaring Function
// function name() {
 //   console.log('print statement')

// }
//Functions perform a task or return a value

function sum(a, b) {
    return (a + b);
}
console.log(sum(5,7))


// Arithmetic Operators
let x = 10
let y = 5
console.log(x + y); //addition
console.log(x - y); //subtraction
console.log(x * y); //multiplication
console.log(x / y); // division
console.log(x % y); // modulus/ remainder
console.log(x ** y); // raised to the power

//increment or decrement operator
console.log(++x || x++);
console.log (--x || x--);

// Assignment operators
console.log (x += 5);
console.log (x -= 5);

//Relational operators: >, < , >=, <=
console.log(x > 0);

// strict equality operators
console.log(x === 1); //equal to
console.log(x !== 1); //not equal to

//logical operators: Logical AND (&&), Logical OR (//)
//bitwise operators: bitwise OR (/), bitwise AND (&)

 //conditionals: if and switchcase
let genitals = undefined;

if (genitals === 'penis') {
    console.log("Baby is male");
}
else if (genitals === 'vagina') {
    console.log("Baby is female") 
} 
else 
    console.log("Baby is defective")

//Swith case

let role;

switch(role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;
    
    default:
        console.log('Unknown User');
}

// Loops : For, While, Do While 

// for (initialexpression; condition; incrementexpression;)

for (let i= 200; i >= 1; i--) {  
    console.log('Number of tickets avaialable:', i);
}

//let i = 200;
//while (i>=1) {
  //  if (i % 2 !== 0) console.log('Number of tickets avaialable:', i);
//    i--;
//}

// Do while loop evaluates at least once even if the set condition is false
// For in loop: to iterate over properties of an object or elements in an array
//For of loop: Iterate over elements or items in an array
// Break keyword: Is used to jump out of a loop
// Continue keyword: used to jump to the next iteration in a loop.

let num = max(30, 35);
//let num2= 10;

function max(num1, num2){ 
    if (num1 >= num2) {
        console.log('The maximum number is' + ' ' + num1);
    }
    else 
    console.log ('The maximum number is' + ' ' + num2);
} 

let numy= maxi(30,15);

function maxi(numy1, numy2){
    return (numy1 >= numy2) ?
        console.log('The maximum number is ' + numy1) :
    console.log('The maximum number is ' + numy2)
}

// let size = isLandscape(20, 30) 

// function isLandscape(width, height) {
//    if  (width > height)  {
//        console.log ('The image is Landscape') } 
//    else
//    console.log('The image is portrait')
//}

let size = isLandscape(20, 30) 

function isLandscape(width, height) {
    return (width > height)  ?
        console.log ('The image is Landscape') :
    console.log('The image is portrait')
}

const output = fizzBuzz(15);
//console.log(output);

function fizzBuzz (input) {
    if (typeof input !== 'number'){
        console.log('Not a number')
    }  
    else if (input % 3 !== 0 && input % 5 !== 0) {
        console.log (input)
    }  
    else if ((input % 5 === 0) &&  (input % 3 === 0)) {
        console.log ('FizzBuzz')
    }
     else if (input % 5 === 0) {
        console.log('Buzz')
    }
    else (input % 3 === 0) 
        console.log('Fizz') 
}


/* const result = fizzBuzz(12);
console.log(result);

function fizzBuzz (input) {
    if (typeof input !== 'number')
        return ('Not a number') ;
      
    if (input % 3 !== 0 && input % 5 !== 0) 
        return (input) ;
    
    if ((input % 5 === 0) &&  (input % 3 === 0)) 
       return ('FizzBuzz') ;
    
    if (input % 5 === 0) 
        return ('Buzz') ;
    
    if (input % 3 === 0) 
        return ('Fizz') ;   
} */

let currentSpeed = checkSpeed(71);

function checkSpeed (speed) {
    const speedlimit = 70;
    const kmPerPoint = 5;

    if (speed < speedlimit + kmPerPoint) {
        console.log ('Ok')
    }
    else {
        const points = Math.floor((speed - speedlimit) / kmPerPoint);
        if (points >= 12){
            console.log('License Suspended')}
        else {
            console.log('Point:', points)}
        } 
    }
 
let number = showNumbers(10)

function showNumbers(limit) {
    for (let i= 0; i <= limit; i++) {  
        if (i % 2 === 0) {
            console.log(i + ' is' + ' ' + 'EVEN');}
        else {
            console.log (i, 'is' + ' ' + 'ODD');
        } 
    }
}

const array = [0, 1, 2, 3, 4, 5, false, null, NaN, undefined];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
        count++;
        return count;
}
    
const employee = {
    name: 'John Smith', 
    age: 40 ,
    department: 'Operations',
    yearOfExperience: 5,
    degree: 'Engineering Management'
};

showData(employee);

function showData(obj) {
    for (let key in obj)
        if (typeof obj[key] === "string")
            console.log(key + ": " + obj[key])
}

let value = sumOf(10)

//console.log(sumOf());

function sumOf(limit) {
   let sum = 0;

   for (let i=0; i <= limit; i++ )
    if (i % 3 === 0 || i % 5 === 0){
       //console.log (sum+=i)
       sum += i;}

    return sum;
}

let vame = prompt();
   console.log (alert('Welcome ' + vame))
//console.log(sumOf(10))
