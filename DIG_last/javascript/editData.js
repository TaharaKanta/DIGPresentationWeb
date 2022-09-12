function addNewCSVToStockData(csvArray) {
    const stockArray = [];
    stockArray[0] = csvArray[0].slice(0, 2);
    for (let i = 1; i < csvArray.length; i++) {
        stockArray[i] = [];
        stockArray[i][0] = csvArray[i][0].slice(1);
        stockArray[i][1] = Number(csvArray[i][1].replace(/,/g, ""));
    }
    return filterDataByStartYear(stockArray);
}

function addMoreStockData(nowArray, addArray) {
    const stockArray = [];

    stockArray[0] = nowArray[0].concat(addArray[0][1]);

    const nLength = nowArray.length;
    const aLength = addArray.length;

    for (let i = 1; i < aLength; i++) {
        addArray[i][1] = Number(addArray[i][1].replace(/,/g, ""));
    }

    if (nLength >= aLength) {
        const slicedNowArray = nowArray.slice(nLength - aLength);
        for (let i = 1; i < aLength; i++) {
            stockArray[i] = [];
            stockArray[i] = slicedNowArray[i].concat(addArray[i][1]);
        }
    } else {
        const slicedAddArray = addArray.slice(aLength - nLength);
        for (let i = 1; i < nLength; i++) {
            stockArray[i] = [];
            stockArray[i] = nowArray[i].concat(slicedAddArray[i][1]);
        }
    }
    return stockArray;
}


function culPerStockValueData(stockArray,asset,columnNum,per){
    columnNum++;
    
    const odds = asset * (per / 100) / stockArray[1][columnNum];
    for(let i=1;i<stockArray.length;i++){
        stockArray[i][columnNum] *= odds;
    }
    return stockArray;
}

function getSumAssetdata(stockArray){
    const sumAssetArray=[];
    sumAssetArray[0]=stockArray[0].slice(0,2);
    for(let i=1;i<stockArray.length;i++){
        let stockSum = 0;
        sumAssetArray[i]=[];
        sumAssetArray[i][0]=stockArray[i][0];
        for(let j=1;j<stockArray[i].length;j++){
            stockSum += stockArray[i][j];
        }
        sumAssetArray[i][1] = Math.floor(stockSum);
    }
    return sumAssetArray;
}

function filterDataByStartYear(stockArray){
    const startYear = Number($("#start-year").val());
    let titleArray = [];
    titleArray[0]=stockArray[0];
    for(let i = 1;i<stockArray.length;i++){
        if(startYear <= Number(stockArray[i][0].slice(-4))){
            return titleArray.concat(stockArray.slice(i));
        }
    }
    return stockArray;
}