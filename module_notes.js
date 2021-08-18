// Case Sensitivity
    // JavaScript is case sensitive. Case sensitivity means that JavaScript considers upper- and lower-case words to be different. 
    // For example, if we were to assign the words "data" and "Data" as variables, we would be able to save different information in each word.

// Case Style
 // Different languages utilize different methods to link words without using spaces, which is called a case style
 // Python = snake_case each word is separated by an underscore e.g. case_style
 // JavaScipt = camelCase the first letter of first word is lowercase, but first letter of every other word is uppercase. e.g caseStyle
    // Note: Camel case is the preferred naming convention in JavaScript. This is especially helpful in cases where Python data is used. 
    // For example, we would know that variables named with snake case originated from the Python side of things.

    
//Semicolons
    // Much like SQL, when coding in JavaScript it's good practice to end statements with a semicolon. 
    // Technically, they are optional when it comes to executing your code, but they are helpful because they tell JavaScript that a particular line or block of code is complete.

// Printing a string with JavaScript
    //  In JavaScript, a print statement is called a console log.
console.log("hello world");

// Statements and Expressions
    // Statements perform actions. Assigning a variable is an example of a statement
    // Expressions create values. Using arithmetic to create a new value is an expression.

// Code Blocks  {} 
    // Code blocks, which we will see more often as we start writing functions, are denoted by curly brackets. 
    //Code inside the curly brackets are typically indented two to four spaces. This isn't required to run the code, but it does make reading it easier and follows the coding guidelines.

// Variables
    // var - Pre ES6. Does not need to be in a block. Var is is global, meaning it applies to the program instead of being contained in a block of code.
        // In Javascipt you need to add var before the variable, and then add a semicolon after the value, like this: var y = 2; 
        // In Javascipt, a vrable is assiged by first declaring it. Complete fo state is indicated by semicolon
        // It's more appropriate to use var when we want the variable to be available globally, or throughout all of the code.
var y = 2;
console.log(y);
    // let & const - Post ES6. Need to be in a block {}. If you called a variable outside those brases you would get an error.  So could use the same varible in and outside the braces but the could equal different things.
    // let - Value mean to be used in code block but could be redefined later in the program
        // When a developer chooses to use let, it basically means "I might want to use this variable again later to hold different data, but in this code block I'll only use it once." 
    // const - Value meant to be used once and is constant and unchanged throughout the program
        // The const declaration is more specific than let. 
        // Instead of being contained within a block of code, const tells JavaScript that the variable won't be reassigned or redeclared, either in a block of code or within the program as a whole


// Arrays
    // When coding in Python, data can be grouped together in a list. The same is true of JavaScript. 
    // In data.js file The structure of the array begins much like a Python list: with a square bracket. But the data inside is arranged a bit differently.
    // In this particular JavaScript array, we're not recording a single item and moving on to the next, much like a simple list (such as [1, 2, 3]). 
    // However, here we're recording an entire event: date, location, type, and even comments are saved inside a single array.
    // Unlike a Python dictionary, the key value in a JavaScript object does not need to be in quotes. 
    // Not only that, but multiple events are recorded. Because we have so much information, the array looks more like a Python dictionary than a simple Python list
    // Within a set of curly brackets, we can see the key-value pairs such as the date, city, and state.
    // While this looks somewhat similar to a Python dictionary, there is one key difference. The completed block of code is signaled by a semicolon. 
var data = [ // data is the Array
    {
        datetime: "1/1/2010",
        city: "benton",
        state: "ar",
        country: "us",
        shape: "circle",
        durationMinutes: "5 mins.",
        comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
      }
];
// Objects
    // In this code snippet, everything within the curly brackets is considered to be properties of a JavaScript object. The object is our variable: data.
    // There are several ways we can access the properties, also called key-value pairs or objects, in the array.   
    // Also, objects are not limited to being contained within an array. In fact, an array itself is an object. 
    //  Dates are also objects, as are functions; and Booleans can be objects.
    //  Basically, many things can be—or are—objects.

// Functions 
    // Store some kind of logic that used over again so we dont have rewrite the same type of code over again
    // Step 1: Use the keyword function to create a function
    // Step 2: name funcion after "function" and add parenthesis. Typically, functions are named after what they do.  
        // () parathesis hold the parameters you want to use in the function. Parameters are  placeholders for the values we will add later,
        // IMPORTANT: However, from a practical standpoint, it's not a good idea to have more than two parameters per function. 
            // Too many arguments can significantly slow down and even crash your code.
    // Step 3: {} curly braces hold the function we are writing
    // Unlike Python indenation is not required and could be written on the same line
    // Functions can also call other functions.     
function hello(name) {
    console.log("Hello" + name);
};
// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
};
// Functions can call other functions
    // This function takes two arguments(c,d) and incorporates the orginal function we wrote earlier (addition) to multiply the sum of two numbers by 2
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
};

// clear() 
    // If the code and output in your console is getting cluttered, type clear() and press Enter to clear the working area of your console.
    // Once cleared, you won't be able to see the code anymore, but you can still access what you've written by using the up arrow key on your keyboard. 
    // This allows you to cycle through the different lines of code you've already executed.
    // Clearing existing data is important because we’ll be appending data from the array in the following code. Without clearing it, the users will end up with pre-filtered data.

// Arrow Functions
    // Arrow functions complete the same functions as regular functions, but they use a more compact and concise syntax that makes a code script shorter and easier to read 
    // Functions in JavaScript can easily become bulky and difficult to understand. Thankfully, any standard function in JavaScript can be refactored into an arrow function. 
    // Arrow functions are also known as fat arrow functions because they are introduced with a "fat arrow": =>  
        // Summary
            // there is no return statement. The return keyword and console.log() are removed because with this new syntax, JavaScript inherently knows what will be returned.
            // the function keyword is missing. The function keyword is not part of the arrow function. 
                // This is because the arrow symbol (=>) indicates that this block (or line) of code is a function.
            // consule.log(); isnt included. When the function is called, our statement will be printed to the console.
let square = (num) => num**2; 
        // variable as anonmys function instead of "function"
        // => fat arrow instead of curly braces {} and return
// Orginal Function Example to Arrow Function
    // Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  };
// New Function Example to Arrow Function
printHello = () => "Hello there!";
// Orginal Function Example to Arrow Function
    // Original addition function
function addition(a, b) {
    return a + b;
  };
// New Function Example to Arrow Function
  // Converted to an arrow function
addition2 = (a, b) => a + b;
// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  };
// New doubleAddition function
doubleAddition2 = (c, d) => addition(c, d) * 2;   


// For Loops
  // In JavaScript, this process is initiated by the keyword "for" and works in the same manner as a Python for loop
  // Like Python, JavaScript uses zero-based indexing. This means that the first item in an array will be assigned an index placement of 0.
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  // As soon as you press Enter, the words "undefined" will appear directly below your line of code. 
  // This is how you know that you've successfully executed the line of code and the array has been saved locally.
  // As soon as you press Enter, the words "undefined" will appear directly below your line of code. This is how you know that you've successfully executed the line of code and the array has been saved locally.

// Step 1: Create a function, name it and add parameters in (). Typically, functions are named after what they do.
// Step 2: Create for loop using 'for' this keyword for is the trigger that indicates we'll be iterating through a list
// Step 3: When the length of i is equal to the total number of items in the list, the for loop will complete its iterations and the next line of code will be executed
    // 3a. var i = 0 We assign an iterable variable and set its value to zero. In this loop, think of the letter 'i' to mean 'iterate.' 
        // When we assign a zero value, we're starting a counter from the beginning. 
        // You can also think of it in terms of list comprehension–the first name of the list has an index value of zero, for example.
    // 3b. i < userList.length means "If this iterable (i) is still smaller than the total number of iterables in the list (userList), then move on to the next step."
        // So if we're on the second name, but the list is four names long, the for loop will continue to loop through it.
    // 3c. i++, increases the iterable by 1. We're using list comprehension here; the for loop knows to iterate to the next name because the index number has increased by 1. 
// Step: Print list using console.log Since our code says to log, or print, each iteration, the names in the array are printed to the console one at a time.
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 };

 // 1. Define list with vegatable variable
 // 2. Create for loop
    // 2a. var i = 0 assign an iterable variable and set its value to zero which tells our counter we are starting from 0 on our list index
    // 2b. i < vegatable.length If this iterable (i) is still smaller than the total number of iterables in the list (userList), then move on to the next step
        // 2.b.1 .length counts list length. You could put a number here instead
    // 3c. 3c. i++, increases the iterable by 1. We're using list comprehension here; the for loop knows to iterate to the next name because the index number has increased by 1
// 3. Print list using console.log and add string " I love " to print statement     
 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

 for (var i = 0; i < vegetables.length; i++) {
     console.log("I love " + vegetables[i]);
 };
 
// Creating self-contained code makes it easier to reuse the code and keeps us organized: 

// forEach
    // Use a forEach function, which loops through the array in the same way as a for loop. This callback function will performed on each element in the array
    // The difference is that forEach works only with arrays
    // Another benefit is that forEach can be combined with an arrow function, once again making the code more concise and easy to read.
let numbers = [1,2,3,4,5,6]; // array of numbers
numbers.forEach(function(element) {
    console.log(elements**2);
});    