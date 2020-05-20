// from data.js
var tableData = data;

// Select the button
// Select the filter button
var filter_btn = d3.select("#filter-btn");
// Select dropdown menu buttons
var datetime_btn = d3.select("#datetime-btn");
var city_btn = d3.select("#city-btn");
var state_btn = d3.select("#state-btn");
var country_btn = d3.select("#country-btn");
var shape_btn = d3.select("#shape-btn");

// Select the input element
var inputField = d3.select("#searchInput");

// Declare global variable to store search criteria
var search_info = ""

// Set dropdown button to select search criteria and set variable to store search criteria
datetime_btn.on("click", function(){
    inputField.property("value","");
    inputField.attr("placeholder", "1/1/2010");
    search_info = "datetime";
})

city_btn.on("click", function city(){
    inputField.property("value","");
    inputField.attr("placeholder", "benton");
    search_info = "city";
})

state_btn.on("click", function(){
    inputField.property("value","");
    inputField.attr("placeholder", "ar");
    search_info = "state";
})

country_btn.on("click", function(){
    inputField.property("value","");
    inputField.attr("placeholder", "us");
    search_info = "country";
})

shape_btn.on("click", function(){
    inputField.property("value","");
    inputField.attr("placeholder", "circle");
    search_info = "shape";
})


// Select the table
var tbody = d3.select("#ufo-table").select("tbody");

// use button "on" to attach the search function
filter_btn.on("click", function() {
    search(search_info);
})
//filter_btn.on("click", search(search_info))


// Define the search function
function search(info) {
    var inputField = d3.select("#searchInput");

    // Get the value property of the input element
    var inputValue = inputField.property("value");

    // Use the form input to filter the data by date
    var results = data.filter(ufo => ufo[info] === inputValue);

    // Clear previous search result
    tbody.html("");

    // Add data to table
    results.forEach((item) => {
        var new_tr = tbody.append("tr")
        new_tr.append("td").text(item.datetime);
        new_tr.append("td").text(item.city);
        new_tr.append("td").text(item.state);
        new_tr.append("td").text(item.country);
        new_tr.append("td").text(item.shape);
        new_tr.append("td").text(item.duration);
        new_tr.append("td").text(item.comments);
    })
}

