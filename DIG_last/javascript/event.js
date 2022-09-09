$("#submit-button").click(function(){
    symbol = $(".symbol").eq(0).val();
    csvdata = getCSV(symbol);
    csvdata = editCSVToStockData(csvdata);
    console.log(csvdata)
    drawChart(csvdata)
});