// google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// let symbol;
// let csvdata=[];
// $("#submit-button").click(function(){
//     symbol = $(".symbol").eq(0).val();
//     csvdata = getCSV(symbol);
//     csvdata = editCSVToStockData(csvdata);
//     console.log(csvdata)
//     drawChart(csvdata)
// });

function drawChart(csvdata) {
    let data = google.visualization.arrayToDataTable(csvdata);
    
    let options = {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}