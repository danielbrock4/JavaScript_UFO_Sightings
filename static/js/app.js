// The first step in transitioning the data from an array to a table is to create the appropriate variables using var, let, or const.
// Open VS Code and create a file in our repo folder named app.js. This is where we'll keep the code that builds the HTML table and fills it with data from data.js.

// Storyboarding
    // Step 1: Create a Storyboard
        // A storyboard serves as a kind of blueprint for your site and helps with the transition from idea to finished product. Think of it as a map of the webpage.
            // Important becuase:
                // First, knowing how we want the webpage to look before building it will save us time later
                // Second, it helps us make sure we've captured everything we want displayed. 
    // Step 2: Align the Code      
        // When we align our code, we're putting our plans into action, such as when we start transitioning our storyboard into a webpage.
            // 2.a import data
            // 2.b point data to html page

// import the data from data.js
    // 1. create a variable to import the data
        // 1a. use const because we dont want the variable to be reassined or resued at all in our program
const tableData = data; 
// Reference the HTML table using d3 to tell JavaScript what type of element the data will be displayed in use as a table in this case 
    // 1. Declare a variable, tbody 
        // tbody is an example of standard table tag that is used often in HTML, with or without JavaScript enhancements.
    // 2. Use "d3.select" to tell JavaScript to look for the <tbody> tags in the HTML
        // d3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage.
            // It is often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps), for presentation.      
var tbody = d3.select('tbody');            