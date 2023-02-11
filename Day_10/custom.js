/*
Exercise-3:
Use both if and switch statement (6)
====================================================
age: less then 10  
output: stay home under your mom supervision

age: more and equal then 10 and less then 15 
 output: Try to gain knowledge from outside of home

age: more then and equal to 15 and less than 18
output: prepare to cast vote

age: more or equal then 18 
 output: cast you vote

age: unknown
  output: You are out of range
*/

//Use if  statement
// let age = 10;
// if (age < 10) {
//   console.log("stay home under your mom supervision");
// } else if (age >= 10 && age < 15) {
//   console.log("Try to gain knowledge from outside of home");
// } else if (age >= 15 && age < 18) {
//   console.log("prepare to cast vote");
// } else if (age >= 18) {
//   console.log("cast you vote");
// } else {
//   console.log("You are out of range");
// }

//use switch statement

let age = 10;

switch (true) {
  case age < 10:
    console.log("Stay home under your mom's supervision.");
    break;
  case age >= 10 && age < 15:
    console.log("Try to gain knowledge from outside of home.");
    break;
  case age >= 15 && age < 18:
    console.log("Prepare to cast your vote.");
    break;
  case age >= 18:
    console.log("Cast your vote.");
    break;
  default:
    console.log("You are out of range.");
}

/*
Exercise-5:
Choose the correct conditional (ternary) operator to console  "Too young" if age is less than 18, otherwise alert "Old enough" (2)
*/
let yourAge = 17;
yourAge < 18 ? console.log("Too young") : console.log("Old enough");

//Other Answer in README.MD
