// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

function buildTable(data1) {
    tbody.html(""); 
    data1.forEach((dataRow) => {
        var row = tbody.append("tr");
        Object.entries(dataRow).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });

}

function processClick() {   
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate)
    var filteredData = tableData 
    if (inputDate) {
        filteredData = filteredData.filter(row => row.datetime == inputDate);
        console.log(filteredData)
    }
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", processClick);


buildTable(tableData)
