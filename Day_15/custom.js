// 1. What is the value of the keyword this in the following example: (3)
const data = this;
console.log(data); //Window

// What does this function output? Why?
function logThis() {
  return this;
}

logThis(); //window because this is plain function.

// 2. What does this function output? Why? (2)
const instructor = {
  firstName: "Adnan",
  sayHi() {
    console.log("Hello! " + this.firstName); //Hello! Adnan Because this is method so this mention upper obj
  },
};

instructor.sayHi(); // ?

// 3. What does this function output? Why? (3)
const instructor1 = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: false,
  },
  displayInfo: function () {
    console.log("Cat owner? " + "-" + this.catOwner); //Cat owner? - undefine because catOwner is not his own property
  },
};

instructor1.displayInfo(); // ?

// Bind this to get correct output ex: "Cat owner?-true "
let boundDisplayInfo = instructor1.displayInfo.bind(instructor1.info);
boundDisplayInfo();

// 4.What does this function output? Why? (3)
const instructor2 = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: false,
    displayLocation: function () {
      return `Residing ${this.data.location}`;
    },
    data: {
      location: "Dhaka",
    },
  },
};

console.log(instructor2.info.displayLocation()); //Residing Dhaka ; because displayLocation in method so this indicates objects own property

// 5.What does this function output? Why? (3)
const instructor3 = {
  firstName: "Adnan",
  info: {
    catOwner: true,
    boatOwner: true,
    displayLocation: function () {
      return `Residing ${this.location}`;
    },
    data: {
      location: "Dahaka",
      logLocation: instructor3.info.displayLocation(),
    },
  },
};

console.log(instructor3.info.data.logLocation()); // Why might we be getting an error here?
// When the instructor3 object is defined, the logLocation property is assigned the value of the displayLocation method. However, at the time of its assignment, the this keyword in displayLocation refers to the info object. Therefore, when logLocation is executed, this.displayLocation is not a function, and you get a TypeError.

// 6.What are the ways to deep or shallow copy for array and object? -2
// Shallow copy in Array
let originalArray = [1, 2, 3, [9, 10, 11]];
let shallowCopy = originalArray.slice();
originalArray[3][0] = 10;
shallowCopy[1] = 20;
console.log(originalArray); // Output: [1, 2, 3,[10,10,11]]
console.log(shallowCopy); // Output: [1, 20, 3, [10,10,11]]

//Shallow copy in object
// // let originalObject = { name: "Anamul", age: 30 };
// let shallowCopyObj = Object.assign({}, originalObject);

// originalObject.age = 40;
// shallowCopyObj.name ="Mamun";

// console.log(originalObject);  // Output: { name: "John", age: 40}
// console.log(shallowCopyObj);     // Output: { name: "John", age: 30}

// Deep copy in Obj
let originalObject = {
  name: "Anamul",
  age: 30,
  address: { vill: "Boraitola" },
};
let createStringObj = JSON.stringify(originalObject);
let newObject = JSON.parse(createStringObj);

originalObject.vill = "xxx";
newObject.vill = "yyy";

console.log(originalObject); // name: "Anamul",age: 30,address: { vill: "xxx" }
console.log(newObject); // name: "Anamul",age: 30,address: { vill: "yyy" }

// Deep copy in Array
let originalArray2 = [1, 2, 3, [9, 10, 11]];
let createString = JSON.stringify(originalArray2);
let newArray = JSON.parse(createString);
originalArray2[3][0] = 20;
newArray[3][2] = 100;
console.log(originalArray2); // Output: [1,2,3,[20,10,11]]
console.log(newArray); // Output: [1, 2, 3,[9,10,100]]

// 7. What are the mutable and immutable data in Javascript? -2

// - Mutable means changeable or modifyable.
// - Immutable means not changeable.
// - All primitive data is immutable and other is mutable.

// Mutable data
let myArray = [1, 2, 3];
myArray.push(4);
console.log(myArray); // Output: [1, 2, 3, 4]

// Immutable data
let myString = "hello";
let myNewString = myString.toUpperCase();
console.log(myString); // Output: "hello"
console.log(myNewString); // Output: "HELLO"

// In the above example, we first create an array called myArray and add a new element to it using the push() method. We see that the original array is modified in place.

// Next, we create a string called myString and use the toUpperCase() method to create a new string with all uppercase letters. We see that the original string is not modified, but instead a new string is created with the modified value. This is an example of immutable data, since the original string cannot be modified in place.

// 8. Explain pass by value vs pass by reference with example -2

// Copy by value means that when you make a copy of a variable, you create a new memory space for it and copy the value of the original variable into that new memory space. Changes made to the original variable will not affect the copied variable, and vice versa. This means that the copied variable is completely independent of the original variable.

// Copy by reference, on the other hand, means that when you make a copy of a variable, you create a new reference to the original variable. The copied variable and the original variable both refer to the same memory location. This means that any changes made to the original variable will also be reflected in the copied variable, and vice versa.

// Copy by value
let x = 5;
let y = x;
x = 10;
console.log(y); // Output: 5

// Copy by reference
let a = [1, 2, 3];
let b = a;
a.push(4);
console.log(b); // Output: [1, 2, 3, 4]

// In the first example, we create a variable x and assign it the value of 5. We then create a new variable y and assign it the value of x. When we change the value of x to 10, the value of y remains 5, because y is a completely independent variable.

// In the second example, we create an array a and assign it the values of [1, 2, 3]. We then create a new variable b and assign it the value of a. When we add the value 4 to a using the push() method, the value of b also changes, because b is simply a reference to the same array in memory as a. This means that any changes made to the array through one variable will be reflected in the other variable as well.
