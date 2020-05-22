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

// Select the table
var tbody = d3.select("#ufo-table").select("tbody");

// use button "on" to attach the search function
d3.selectAll(".filter").on("change", updateFilters)

filter_btn.on("click", function() {
    search();
})

//define functions to update filters chosen by users.

var filters = {};

function updateFilters() { 

    filters = {};

    var changeElement = d3.select(this).select("input");
    var elementValue = changeElement.property("value");
    var filterID = changeElement.attr("id");

    if (elementValue) {
        filters[filterID] = elementValue;
    }
    else {
        delete filters[filterID];
    }
}

// Define the search function to filter date based on filters input.
function search() {
  
    // Use the form input to filter the data by date
    Object.entries(filters).forEach(([key, value]) => {
        results =  data.filter(ufo => ufo[key] === value);
    })
    
    // Clear previous search result
    tbody.html("");

    updateTable();

}

// define function to populate table based on filter results. 
function updateTable() {
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
