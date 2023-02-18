//total Number-20
//Exercise-1: (3)
// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function checkInclude(a, b) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
}
console.log(checkInclude("cheese", "cake"));
console.log(checkInclude("lips", "s"));
console.log(checkInclude("Java", "script"));
console.log(checkInclude(" think, therefore I am", "I"));

//Exercise-2:(3)
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
// function myFunction(a, b) {}
// myFunction("1234567", "."); //'1.234.567'
// myFunction("abcde", "$"); //'ab$cde'
// myFunction("zxyzxyzxyzxyzxyz", "w"); //'zwxyzwxyzwxyzwxyzwxyz'

//Exercise-3:(3)
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
// function myFunction(str) {
//   return;
// }
// myFunction("bnchmf"); //'coding'
// myFunction("bgddrd"); //'cheese'
// myFunction("sdrshmf"); //'testing'

//Exercise-4:(3)
// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a
//make sure you don't mutate original array
// function myFunction(a, n) {
//   return;
// }
// myFunction([1, 2, 3, 4, 5], 2); //[ 4, 5 ]
// myFunction([1, 2, 3], 6); //[ 1, 2, 3 ]
// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3); //[ 6, 7, 8 ]

//Exercise-5:(3)
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
// function myFunction(a, b) {
//   if (a < b) {
//     return a / b;
//   } else {
//     return a * b;
//   }
// }
// myFunction(10, 100); // 0.1
// myFunction(90, 45); //4050
// myFunction(8, 20); //0.4
// myFunction(2, 0.5); //1

// Exercise-6:(5)
// For each of the exercises below, assume you are starting with the following people array.

let people = ["samim", "Anis", "Adnan", "Karim"];
// 1.Using a loop, iterate through this array and console.log all of the people one by one.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// 2.Write the command to remove "samim" from the array.
// people.shift()
// console.log(people)

// 3.Write the command to remove "Karim" from the array.
// people.pop()
// console.log(people)

// 4.Write the command to add "Ifat" to the front of the array.
// people.unshift("Ifat")
// console.log(people)
// 5.Write the command to add your name to the end of the array.

// 6.Using a loop, iterate through this array and after console.logging "Anis", exit from the loop.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);

  if (people[i] === "Anis") {
    break;
  }
}

// 7.Write the command to make a copy of the array using slice. The copy should NOT include "Anis" or "Ifat".

let peopleCopy = people.slice();

// Remove "Anis" and "Ifat" from the copy
peopleCopy = peopleCopy.filter(
  (person) => person !== "Anis" || person !== "Ifat"
);

console.log(people); // Output: ["Samim", "Anis", "Adnan", "Ifat", "Karim"]
console.log(peopleCopy); // Output: ["Samim", "Adnan", "Karim"]

// 8.Write the command that gives the indexOf where "Anis" is located.
console.log(people.indexOf("Anis"));

// 9.Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"));

// 10.Redefine the people variable with the value you started with. Using the splice command, remove "Adnan" from the array and add "Elizabeth" and "Bob". Your array 1.should look like this when you are done ["samim", "Anis", "Elizabeth", "Bob", "Karim"].
// Find the index of "Adnan" in the array
let index = people.indexOf("Adnan");

// Remove "Adnan" and insert "Elizabeth" and "Bob" in its place
people.splice(index, 1, "Elizabeth", "Bob");

console.log(people);

// 11.Create a new variable called withMiraz and set it equal to the people array 1.concatenated with the string of "Miraz".

// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) == -1) {
//       newArr.push(arr[i]);
//     }
//   }
//   // Only change code above this line
//   return newArr;
// }

// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 3, 9],
//     ],
//     3
//   )
// );
