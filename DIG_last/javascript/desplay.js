// google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

let num = "7203"
let csvdata = getCSV("csv/"+ num +" Historical Data.csv");
csvdata = editCSVToStockData(csvdata);

function drawChart() {
    let data = google.visualization.arrayToDataTable(csvdata);
    
    let options = {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}