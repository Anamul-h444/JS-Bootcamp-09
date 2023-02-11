Total Number-20

# Exercise-1: Answer the following questions about this code block: (2)

```js
const isLearning = true;
if (isLearning) {
  console.log("Keep Learning");
} else {
  console.log("I hope you are learning....");
}
```

What should the above code console.log?

```
Answer: Keep Learning (Because isLearning condition is true )
```

# Exercise-2:Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own? (2)

```js
In JavaScript, the if statement evaluates any expression inside the parentheses to a Boolean value (true or false). When the expression is a Boolean variable or literal, it is already either true or false, so there is no need to compare it with true or false again.
```

# Exercise-4:

```js
let var1;
const var2 = "";
const var3 = 1;
const secretMessage = "secret!";

if (var1) {
  console.log("first");
} else if (var1 || var2) {
  console.log("second");
} else if (var1 || var3) {
  console.log("third");
} else {
  console.log("fourth");
}
```

### What should the above code console.log? Why? (2)

Answer: third; Because var3 is true.1

### What is the value of var1 when it is initialized? (1)

Answer: undefine

### Is the value of var1 a "truthy" value? Why? (1)

Answer: No, it is falsy value because its undefine.

### Is the value of var2 a "truthy" value? Why? (1)

Answer: No, it is falsy value because its ""

### Is the value of var3 a "truthy" value? Why?(1)

Answer: yes, its truthy value because its a number.

Exercise-6:When to Use if else vs ternary vs switch? (2)

- Use if/else statements when you need to evaluate a condition and execute one or more statements based on the result. This is the most flexible option, as you can use any expression as the condition and execute any number of statements in each branch of the statement.

- Use the ternary operator (condition ? exprIfTrue : exprIfFalse) when you have a simple binary condition and want to return one of two expressions based on the result. This can be a more concise and readable alternative to an if/else statement, especially when the expressions are short.

- Use switch statements when you need to evaluate a single expression against multiple possible values and execute different code blocks based on the matching value. This can be a more efficient and readable alternative to a long chain of if/else if statements, especially when the number of cases is high.
