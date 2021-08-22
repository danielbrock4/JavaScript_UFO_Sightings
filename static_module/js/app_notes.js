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
    // 1. create a variable to import the data from data.js
        // 1a. use const because we dont want the variable to be reassined or resued at all in our program
const tableData = data; 
// Reference the HTML table using d3 to tell JavaScript what type of element the data will be displayed in use as a table in this case 
    // 1. Declare a variable, tbody 
        // tbody is an example of standard table tag that is used often in HTML, with or without JavaScript enhancements.
    // 2. Use "d3.select" to tell JavaScript to look for the <tbody> tags in the HTML
        // d3 is a JavaScript library that produces sophisticated and highly dynamic graphics in an HTML webpage adds interactive functionality, such as when users click a button to filter a table
            // It is often used by data professionals to create dashboards, or a collection of visual data (such as graphs and maps), for presentation.      
var tbody = d3.select('tbody');

// Iterate through the array of objects in our data file and then append them to a table row. All of this will happen within a function, which makes the code self-contained.
    // Creating self-contained code makes it easier to reuse the code and keeps us organized: the code in this function will be used to fill the table with data only.

// Step 1: Create a function, name it and add parameters in (). Typically, functions are named after what they do. We're building a table, so we'll name the function "buildTable."
    // 1.a () parathesis hold the parameters in the function. We'll also pass in "data" as the argument parameter, which imported eariler data.js with  = const tableData = data; 
// Step 2: Use tbody.html("") to clear the data. This code tells JS to use an empty string when creating the table AKA a blank canvas. This is a standard way to clear data. 
// If we didn't clear existing data first then we would find be reinserting data that already exists, thus creating duplicates. It's good practice to clear the existing data first to give ourselves a clean slate.
    // 2.a tbodb.html references the table, pointing JavaScript directly to the table in the HTML page we're going to build.
    // 2.b The parentheses with empty quotes (("");) is an empty string.
// Step 3. Use forEach to loop through the array. forEach only works on arrays and can be combined with an arrow function. This callback function will performed on each element in the array
    // 3.a data references the object being imported from data.js
    // 3.b forEach is the keywords to create a for loop in JS
    // 3.c dataRow is the a parameter/element that will be used as value when the function is called. This will represent each row of the data as we iterate through the array
    // 3.d Define the logic we want to apply to each element on the array. We want to create a variable that will append a row to the table body
        // 3.d.1 Use "let" instead of var to declare the row variable. That's because this variable is limited to just this block of code.
        // 3.d.2 tbody.append("tr") tells JS find the <tbody> tag within the HTML and add a table row ("tr"). Each object, or UFO sighting, in the array will be wrapped in a <tr> tag.
    // 3.e Add code to loop through each field in the dataRow argument.These fields will become table data and will be wrapped in <td> tags when they're appended to the HTML table.
        // 3.e.1 Object.values tells JS to reference one object from the array of UFO sightings from data.js
        // 3.e.2 Adding (dataRow) as the argument says that we want the values to go into the dataRow.
        // 3.e.3 forEach((val) specifies that we want one object per row telling our code put each sighting onto its own row of data
            // 3.e.2.a The "val" argument represents each item in the object, such as the location, shape, or duration.
            // 3.e.2.b Append each value of the object to a cell in the table by creating a variable cell to append data into a table data tag (<td>)
            // 3.e.2.c Chain .text(value) to the variable cell, we are extracting only the text of the value.
function buildTable(data) {
            // First, clear out any existing data
    tbody.html("");        
    // Next, loop through each object in the data and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}; 
// Add Filters
// D3 library(adds highly dynamic graphics in an HTML) to add button to our HTML page to filter the table. d3 listens for the button is clicked, detect the click & react accordingly. 
    // Step 1: Create standard function using the traditional syntax followed by the name of the function, opening and closing parentheses, and curly brackets. 
    // Step 2: Add a date function, we need to create a couple of variables to hold our date data, both filtered and unfiltered.
        // 2.a .select() will select the very first element that matches our selector string: "#datetime". The selector string is the item we're telling D3.js to look for.
        // 2.b d3.select("#datetime") tells D3 to look for the #datetime id in the HTML tags. We haven't created our HTML yet, but we know that the date value 
        // will be nested within tags that have an id of "datetime."
        // 3.c Chain.property("value") to the d3.select function tells d3 not only to look for where our date values are stored on the webpage, but to grab that info 
        // & hold it in the "date" variable.
    // Step 3: Set default filter & save it to a new variable. Use TableData original because table data because we want users to refine their search on their own terms
        // By setting the filteredData variable to our raw data, we're basically using it as a blank slate. The function we're working on right now 
        // will be run each time the filter button is clicked on the website. If no date has been entered as a filter, then all of the data will be returned instead.
// If Statement to Filter Date [if (condition){code to execute}] or pseudocode [if (a date is entered) {Filter the default data to show only the date entered};]
    // Step 4: Apply a filter method taht will match the dateime value to filtered date vaule "Show only the rows where the date is equal to the date filter we created above."
        // === The triple equal signs test for stricted equality, meaning that the date in the table has to match our filter exactly and perfecttly. == would be loose equality 
// Call Previous function to build table
    // Step 5. buildTable(filterData) we are passing in our filteredData variable as our argument so that only the data that matches the filter is displayed. 
    // Step 6. Use d3 to listen for events that occur on a webpage, such as a button click. 
        // 6a. Our selector string contains the id for another HTML tag. (We'll assign a unique id to a button element in the HTML called "filter-btn".)  By adding this, we're linking our code directly to the filter button
        // 6b. .on("click", handleClick); tells D3 to execute our handleClick() function when the button with an id of filter-btn is clicked.
    // Step 7. Build the table when the page loads it will create a basic table filled with row upon row of unfiltered data pulled straight from our array          
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datatime").property("value");
    let filterData = tableData; // calls imported data from data.js
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value        
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data. @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filterData)
}    
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
//  Build the table when the page loads
buildTable(tableData);


