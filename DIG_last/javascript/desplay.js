// google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart(csvdata) {
    let data = google.visualization.arrayToDataTable(csvdata);
    
    let options = {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart-div'));
    chart.draw(data, options);
}

function addResultTable(csvdata){
    console.log($(".results-table").find("tbody tr th").eq(0).text(csvdata[1][1] + "円"));
    console.log($(".results-table").find("tbody tr th").eq(1).text(csvdata[csvdata.length-1][1] + "円"));
}