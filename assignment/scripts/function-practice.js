console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log(`Hello, ${helloName('Stacy!')}`);


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log(`Adding 5 and 9: ${addNumbers(5,9)}`);

// 4. Function to multiply three numbers & return the result
function multiplyThree(first,second,third){
  return first * second * third;
}
console.log(`Multiplying 3 by 6 by 9 yields: ${multiplyThree(3,6,9)}`);

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  return array.pop();
}
console.log(`Returning the last element in the array: ${getLast([2,5,9,10,999,20,15])}`);
console.log(`Returning the last element in an empty array: ${getLast([])}`);

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
 for(let element of array){
   if(value === element)
     return true;
 }
 return false;
}
let numArray = [1, 9, 16, 12, 100];
const result1 = find( 9, numArray );
const result2 = find ( 6, numArray);
console.log(result1);
console.log(result2);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for(let character = 0; character < string.length; character++){
    return letter === string[0];
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array ) {
  let sum = 0;
  // TODO: loop to add items
  for(let number of array){
    sum += number;
  }
  return sum;
}
console.log(`Returning sum of the array: ${sumAll([1, 9, 16, 12, 100])}`)
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function newPossArray(array){
  let newArr = [];
  for (let num of array) {
    if (num > 0)
      newArr.push(num);
  }
    return newArr;
}
console.log(newPossArray([1, 9, 16, 12, 100]))
console.log(newPossArray([-1, -9, -16, -12, 100]))
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// Create a function which returns the number of true values there are in an array.
// Examples
// countTrue([true, false, false, true, false]) ➞ 2
//
// countTrue([false, false, false, false]) ➞ 0
//
// countTrue([]) ➞ 0

function countTrue(array){
  let count = 0;
  for (let element of array) {
  count += element === true;
  }
  return count;
}
console.log(`The count is: ${countTrue([true, false, false, true, false])}`);
console.log(`The count is: ${countTrue([false, false, false, false])}`);
