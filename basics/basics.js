
//Data Types:

//String
let hello = "Hello World";
//Number
let counter = 10;
//Boolean
let isActive = true;
//Null and Undefined
let empty = null;
let unitialized;
//Array
let array = [0,1,2,3,4,5]
//Object
let person = {
    name: "Nicolas",
    age: 34,
    city: "Viña del Mar"
}

/*
Operators and Expressions
Arithmetics: +, -, *, /, %
Comparison: ==, ===, !=, !==, <, >, <=, >=
Logics: &&, ||, !
*/

//Conditional
if (person.age >= 18) {
    console.log("You can drink a beer")
} else {
    console.log("You can still do it, but illegally")
}
//Switch
switch(isActive) {
    case true:
        console.log("this is active")
        break;
    default:
        console.log("you have to active it!")
}

//For Loop
for (let i = 0; i < 5; i++) {
    console.log("")
}
//While
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//Do...While
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

//Function
function sayHello(name) {
    return "Hi!" + name;
}
//Arrow Function
const sum = (a, b) => a + b;
console.log(sum(2, 3))
