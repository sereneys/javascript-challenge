// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
var tbody = d3.select("#ufo-table").select("tbody");

// define function for search
function search() {
    
    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
    
    // Get the value property of the input element
    var inputValue = inputDate.property("value");

    // Use the form input to filter the data by date
    var results = data.filter(ufo => ufo.datetime === inputValue);

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

// use button "on" to attach the search function
button.on("click", search);