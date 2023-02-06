//Exercise(Complex Data type):
/*1.What are the complex data type in JavaScript? 

Answer:
In JavaScript, there are two complex data types:

Object: An object is a collection of key-value pairs, which can store multiple values of different data types, including other objects.

Array: An array is an ordered list of values, which can store multiple values of the same or different data types. Arrays are zero-indexed and can be manipulated using various array methods.
*/

/*2.When and why to use Array vs object (Mention 3 point) 

Answer:
  Use Arrays when:

You need to store multiple values with a sequential index/key.
The order of elements is important.
You need to perform operations like iteration, mapping, or filtering.

Use Objects when:

You need to store key-value pairs, where each key is unique and is used to access its corresponding value.
The order of elements is not important.
You need to associate metadata with data.
*/

/*3.Create an profile object that has your firstName, lastName, and occupation as keys.

Access each value from your object and console using both dot notation and bracket notation.
Add a key for hobby to your existing object. Remove the key and value for occupation. - 2*/

const profile = {
  firstName: "Anamul",
  lastName: "Haque",
  occupation: "Student",
};

// Access values using dot notation
console.log(profile.firstName);
console.log(profile.lastName);
console.log(profile.occupation);

// Access values using bracket notation
console.log(profile["firstName"]);
console.log(profile["lastName"]);
console.log(profile["occupation"]);

// Add a key for hobby
profile.hobby = "Learning JavaScript";

// Remove the key and value for occupation
delete profile.occupation;

console.log(profile);

//4.when to use dot notation vs bracket notation to access data from object?
/*
Dot notation: Use dot notation if you know the name of the property you want to access and it is a valid identifier name (it contains spaces or special characters or cotation).
Bracket notation: Use bracket notation if the property name is not a valid identifier name (it contains spaces or special characters or cotation).
*/

const person = {
  firstName: "Anamul",
  lastName: "Haque",
  age: 30,
  "phone number": "01735547549",
};

// Use dot notation to access values
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

// Use bracket notation to access values with non-valid identifier name (Example: For use caotation "")
console.log(person["phone number"]);

//5.Write down the multiple ways to define an array and object

//Using square brackets define Array
const fruits = ["apple", "banana", "cherry"];

//Using the Array constructor define Array
const vegetables = new Array("tomato", "carrot", "potato");

//Using curly braces {} define object
const student = {
  firstName: "Anamul",
  lastName: "Haque",
  age: 30,
};
//Using the Object constructor define object
const student2 = new Object();
student2.firstName = "Anamul";
student2.lastName = "Haque";
student2.age = 30;

/*5.Nested data access from array and object 
Access university name from the object and array */

const userObj = {
  name: "samim",
  address: {
    city: "Dhaka",
    university: {
      name: "Dhaka University",
    },
  },
};

const userArr = ["samim", ["Dhaka", ["Dhaka university"]]];

//Access university name from object
console.log(userObj.address.university.name);

//Access university name from Array
console.log(userArr[1][1]);
