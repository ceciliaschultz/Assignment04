// Assignment 04
// Maria Cecilia Schultz
// Practice with Functions

//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. 
// It should log a string like "Half of 5 is 2.5.".
let number1 = parseFloat(prompt('Enter a number: '));
let number2 = parseFloat(prompt('Enter a second number: '));

halfNumber(number1);
squareNumber(number1);
percentOf(number1, number2);
findModulus(number1, number2);

function halfNumber(number) {
    let half = number/2;
    console.log(`Half of ${number} is ${half}`);
    return half;
}

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(number) {
    let square = number*number;
    console.log(`The result of squaring the number ${number} is ${square}`);
    return square;
}

//STEP 3
//Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, 
// and return the result. It should log a string like "2 is 50% of 4."
function percentOf(number1, number2) {
    let percentage = (number1*100)/number2;
    console.log(`${number1} is ${percentage}% of ${number2}`);
    return percentage;
}



//STEP 4
//Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns 
// the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
function findModulus(number1, number2) {
    let remainder = number1 % number2;
    console.log(`${remainder} is the modulus of ${number1} and ${number2}`);
    return remainder;
}



//STEP 5