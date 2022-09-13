// google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);


function drawChart(csvdata) {
    let data = google.visualization.arrayToDataTable(csvdata);
    
    let options = {
        title: 'Portfolio Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart-div'));
    chart.draw(data, options);
}

function addResultTable(csvdata){
    $(".results-table").find("tbody tr th").eq(0).text(csvdata[1][1] + "円");
    $(".results-table").find("tbody tr th").eq(1).text(csvdata[csvdata.length-1][1] + "円");
}