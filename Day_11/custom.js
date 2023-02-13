//# Exercise-1(what will be the output and explain)-2

// let num = 1;

// while (num <= 10) {
//   console.log(num); //1,3,5,7,9
//   num += 2;
// }

/*
This is because the code initializes the variable num to 1 and then enters a while loop. The loop will continue as long as num is less than or equal to 10.

Inside the loop, the current value of num is printed to the console using console.log(num). Then, num is incremented by 2 using the num += 2 statement.

So on each iteration of the loop, num is incremented by 2, causing the loop to print out the odd numbers from 1 to 9. Once num becomes greater than 10, the loop stops executing.
*/

// Exercise-2(what will be the output and explain)-2

// let num = 1;

// while (num <= 20) {
//   if (num % 4 === 0) {
//     console.log(num); //4,8,12,16,20
//   }
//   num++;
// }
/*
This is because the code initializes the variable num to 1 and then enters a while loop. The loop will continue as long as num is less than or equal to 20.

Inside the loop, an if statement is used to check whether the current value of num is divisible by 4 using the % (modulus) operator. If the remainder is 0, that means num is divisible by 4, and the current value of num is printed to the console using console.log(num).

Regardless of whether the if condition is true or false, the num variable is incremented by 1 using the num++ statement on each iteration of the loop.

So on each iteration of the loop, the code checks whether num is divisible by 4. If it is, the value of num is printed to the console. The loop continues until num becomes greater than 20.
*/

// Exercise-3(what will be the output and why?)-2

// let num = 100;
// while (num < 150) {
//   console.log(num + 1); //101, 101, 101.....
//   num--;
// }
/*
This is because the code initializes the variable num to 100 and then enters a while loop. The loop will continue as long as num is less than 150.

Inside the loop, the code first prints out the value of num + 1 to the console using console.log(num + 1). This means that the first number printed will be 101.

However, after printing out the value, the code decrements num by 1 using the num-- statement. This causes the value of num to become 99 on the next iteration of the loop.

Since the condition in the while loop (num < 150) is still true and num is less than 150, the code will execute the loop again. This time, it will print out num + 1, which is 100, and then decrement num by 1 again.

This process will repeat indefinitely, causing the code to print out 101 repeatedly. Because num is decreasing on each iteration of the loop, it will never reach 150 and the loop will continue indefinitely, resulting in an infinite loop.
*/

//# Exercise-4(what will be the output? it May require if condition inside loop)-4

//Print out all even numbers between 1 and 100. Write two solutions: one with a while loop and one with a for loop.

let num = 0;

while (num <= 100) {
  if (num % 2 === 0) {
    console.log(num); //4,8,12,16,20
  }
  num++;
}

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

/* Exercise-5(Run loop and add $ in each repetition)-4

function repeat(num){
//code
}*/

function repeat(num) {
  let output = "";
  for (let i = 1; i <= num; i++) {
    output += "$".repeat(i) + "\n";
  }
  console.log(output);
}
repeat(3);

/*
# Exercise-6(what will be the output and Let's explain) -3

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz(num){
//code
}

fizzBuzz(100)

<!--
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
... -->

*/

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

/*
The fizzBuzz() function takes a single argument, num, which is the number of iterations to perform. The function uses a for loop to iterate from 1 to num.

Inside the for loop, the code checks whether the current number (i) is a multiple of both 3 and 5, using the % (modulus) operator. If it is, the code prints 'FizzBuzz' to the console.

If the current number is not a multiple of both 3 and 5, the code checks whether it is a multiple of 3, by checking whether i % 3 === 0. If it is, the code prints 'Fizz' to the console.

If the current number is not a multiple of both 3 and 5, and it is not a multiple of 3, the code checks whether it is a multiple of 5, by checking whether i % 5 === 0. If it is, the code prints 'Buzz' to the console.

If the current number is not a multiple of either 3 or 5, the code prints the number to the console.
*/
