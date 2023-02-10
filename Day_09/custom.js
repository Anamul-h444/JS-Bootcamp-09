/*# Exercise - 1 (What will be the result and explain why?) -3
const x = 10;
const y = "a"
y === "b" || x >= 10 


Answer: The result is true. Because In OR (||) operator if any side is true he return true.
*/

/*# Exercise - 2 (What will be the result and explain why?)-3

const x = 3;
const y = 8;

!(x == "3" || x === y) && !(y != 8 && x <= y)


Answer: The result is false. Because this is short circuit.

*/

/*# Exercise - 3(Check the value ans show output whether it's truthy or falsy ).What are the truthy and falsy value in Javascript -3

"Hello World" //true

"" //false

null //false

0 //false

-1 //true

NaN //false*/

//Check value
console.log(Boolean("Hello World"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(NaN));

//What are the truthy and falsy value in Javascript
//Falsy Value:
//" "
//Undefine
//Nan
//null
//0

//Truthy Value
//Without upper falsy value all are truthy value.

/* # Exercise - 4 (What will be the result and explain why?) Explain short circuit -4

const str = "haha!"
const msg = ""
const isFunny = "false"

!(( str || msg ) || isFunny)


Answer:
The result of the expression !(( str || msg ) || isFunny) is false.

Here's how the expression is evaluated:

- The expression str || msg evaluates to str since str is truthy.
- The expression str || isFunny evaluates to str since str is truthy.
- The expression !(str) is evaluates false.

*/

// # Exercise-5: when to use == vs === ? //1
/*The == operator performs type coercion, meaning it tries to convert the data type of the values being compared to a common type before making the comparison. For example, the expression "5" == 5 is true because the string "5" is automatically converted to the number 5 before the comparison is made.

On the other hand, the === operator performs strict equality comparison, meaning it only returns true if the operands have the same data type and the same value. The expression "5" === 5 is false because the operands have different data types (string and number). */

/*# Exercise-6: operands++ vs ++operands //2

const a = 10
a++
++a
what are the differences between a++ and ++a */

let a = 10;
console.log(a++); // result=10 because he executed next line
console.log(++a); // result=12 because he executed same line

/* # Exercise-7: What will be the result? and explain why? //2

10 / 2 * 5 
what to do if I want to get the result of 1 after calculation? */

console.log((10 / 2) * 5); // result is 25 because same presendency and execute left to right
console.log(10 / (2 * 5)); // result is 1 because This () is high presedency.

/*# Exercise-8: 
Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console //2

2 == "2"
2 === 2
10 % 3
10 % 3 === 1
true && false
false || true
true || false
*/
console.log(2 == "2");
console.log(2 === 2);
console.log(10 % 3);
console.log(10 % 3 === 1);
console.log(true && false);
console.log(false || true);
console.log(true || false);

/*
    2 == "2" returns true. This is because the == operator performs type coercion, so the number 2 is automatically converted to the string "2" before the comparison is made.

    2 === 2 returns true. This is because the === operator performs strict equality comparison, so it only returns true if the operands have the same data type and the same value. In this case, both operands are of type number and have the same value, so the expression returns true.

    10 % 3 returns 1. The modulo operator % returns the remainder of dividing the first operand by the second operand. In this case, the result of 10 / 3 is 3 with a remainder of 1, so the expression returns 1.

    10 % 3 === 1 returns true. This expression compares the result of 10 % 3 (which is 1) to the value 1. Since they are equal, the expression returns true.

    true && false returns false. The && operator returns true only if both operands are truthy. In this case, the first operand true is truthy, but the second operand false is falsy, so the expression returns false.

    false || true returns true. The || operator returns the first truthy operand, or the last operand if neither are truthy. In this case, the first operand false is falsy, but the second operand true is truthy, so the expression returns true.

    true || false returns true. The || operator returns the first truthy operand, or the last operand if neither are truthy. In this case, the first operand true is truthy, so the expression returns true and does not evaluate the second operand.
*/
