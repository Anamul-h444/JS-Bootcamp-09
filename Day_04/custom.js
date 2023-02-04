// Mathmatical Operation
//Modulas
console.log(10 % 2); //0
console.log(10 % 3); //1

//Exponential Operation
console.log(2 ** 3); //8
console.log(3 ** 5); //3x3x3x3x3=243

//Exercise:
/*1.Suppose you are presenting yourself to a interview Board.Write down some information about yourself Create the following variables(5):

name, which is a string set to your current name ex: samim, Adnan, Jhair
email, which is a string set to your current email. ex: samimfaz@gmail.com
age, which is a number set to your current age. ex: 30, 40, 25
isDeveloper, which is a boolean set to developer status. ex: true ,false
goingToBeDesigner, set value to absolute negative. ex: null, undefined

Note: Follow Best practices during defining variable
*/

let name = "Anamul";
let email = "anam@gmail.com";
let age = 30;
let isDeveloper = true;
let goingToBeDesigner;
goingToBeDesigner = "Of Web design.";

/* 2. Form a sentence and print on console by using above variable.<variableName> part will be replaced by variable value(6):
Hey it's me "<name>". I am <age>.you can contact me by this <email>.I am a Developer and it's <isDeveloper>. I am going to be a Designer-<goingToBeDesigner>
Note- Use Both string concatenation format and template string format
*/
//By string concatenation
let myData =
  "Hey it's me " +
  name +
  "." +
  " I am " +
  age +
  "." +
  "You can contact me by this " +
  email +
  "." +
  " I am a Developer and it's " +
  isDeveloper +
  "." +
  " I am going to be a Designer " +
  goingToBeDesigner;
console.log(myData);

// By template string format

const myData2 = `Hey it's me ${name}. I am ${age}.you can contact me by this ${email}.I am a Developer and it's ${isDeveloper}. I am going to be a Designer ${goingToBeDesigner}`;

console.log(myData2);

//3.See what happens when you have multiple variables of the same name. Which one takes precedence?(2)

//The last declared variable of the same name takes precedence. The earlier declared variables with the same name will be overridden
var a = 10;
var a = 20;
console.log(a); // 20

//4.What is the difference between null and undefined? (3)

/* The main difference between null and undefined is that null is a value that is explicitly set by the programmer, whereas undefined is a value that is assigned by JavaScript when a variable is declared but has not been given a value. In below example undefined represents an uninitialized value, while null represents an intentional non-value. */

let x;
console.log(x); // undefined

let y = null;
console.log(y); // null

//5.What is NaN in JavaScript? What is the typeof NaN? (2)
/*
NaN stands for Not-a-Number in JavaScript. It is a special value that represents an undefined or unrepresentable value in a numerical context.
For example, the result of dividing 0 by 0 or trying to parse an invalid string as a number will result in NaN.
The typeof NaN is number. This can be surprising, since NaN means "Not-a-Number", but it is still considered a numeric value in JavaScript.
*/

let number = 0 / 0;
number = "string" / 4;
console.log(number); //NaN
console.log(typeof number); //Number

//6.You can declare a variable by typing let thing;. What is the value of thing?(2)

/*When you declare a variable let thing;, it is automatically assigned a value of undefined by JavaScript.This means that the variable thing has been declared, but no value has been assigned to it.*/

let thing;
console.log(thing); // undefined
