//Exercise:

//1.When and why function is needed?
/*
Functions in JavaScript are used to:

- Organize and structure code into smaller, reusable pieces.
- Improve code readability and maintainability.
- Manage scope and variables.
- Performs a specific task and can be executed whenever it is called.
*/

/* 2.write down and recap the difference between console and Return

console.log() and return are both used to output values in JavaScript, but they serve different purposes and are used in different contexts.

1. console.log() is a method used to log values to the browser console. It is often used for debugging purposes and to print the values of variables or expressions to the console for inspection. The values logged using console.log() are temporary and disappear when the program ends.

2. return is used to specify the value that a function should return when it is called. The value returned by a function can be used in other parts of the code or assigned to a variable. The value returned by a function is a permanent value that can be stored and used later.
*/

/*3.write this function takes in two parameters and returns the difference of the two; 
difference(10,2); // 8
difference(0,2); // -2 */

function difference(num1, num2) {
  return num1 - num2;
}
console.log(difference(10, 2));
console.log(difference(0, 2));

/*4. Write a function that takes a value as argument and return the type of value
myFunction(1) //'number'
myFunction(false) //'boolean'
myFunction({}) // 'object'
myFunction(null) // 'object'
myFunction('string') //'string'
myFunction(['array']) //'object'*/

function myFunction(value) {
  return typeof value;
}

console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction(null));
console.log(myFunction("string"));
console.log(myFunction(["array"]));

/*5.Write Down this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is saturday, 2 is Sunday, 3 is Monday etc.). If the number is less than 1 or greater than 7, the function should return undefined; Hint: you can use array to track down day of the week:) 
printDay(4); // "Tuesday"
printDay(7); // "Friday"
printDay(41); // undefined */

function printDay(num) {
  let day = [
    "saturday",
    "sunday",
    "monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
  ];
  return day[num - 1];
}

console.log(printDay(4));
console.log(printDay(7));
console.log(printDay(41));

/*6.Write down this function takes in one parameter (an array) and returns the last value in the array
It should return undefined if the array is empty.
N.B: count last element index dynamically :) -4
lastElement([1,2,3,4]); // 4
lastElement([1,2,3,10]); // 10
lastElement([1,2,3,'hi']); // 'hi'
lastElement([]); // undefined */

function lastElement(data) {
  let lastElementIndex = data.length - 1;
  let lastElement = data[lastElementIndex];
  return lastElement;
}
console.log(lastElement([1, 2, 3, 4]));
console.log(lastElement([1, 2, 3, 10]));
console.log(lastElement([1, 2, 3, "hi"]));
console.log(lastElement([]));

/*7. write a function that return a object based on passed arguments 
Returned object key must be x , y, z in order and value will be passed arguments order
createObj(1, 2, 3) //{x: 1, y: 2, z:3}
createObj('a','b', 'c') //{x: 'a', y: 'b', z:'c'}
createObj('ab','bc', 'ca') //{x: 'ab', y: 'bc', z:'ca'}*/

function createObj(val1, val2, val3) {
  let createObject = { x: val1, y: val2, z: val3 };
  return createObject;
}
console.log(createObj(1, 2, 3));
console.log(createObj("a", "b", "c"));
console.log(createObj("ab", "bc", "ca"));
