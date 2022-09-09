function editCSVToStockData(csvArray){
    const stockArray = [];
    stockArray[0]=csvArray[0].slice(0,2);
    for(let i = 1;i<csvArray.length;i++){
        stockArray[i] = [];
        stockArray[i][0]=csvArray[i][0].slice(1);
        stockArray[i][1]=Number(csvArray[i][1].replace(/,/g,""));
    }
    return stockArray;
}
