function getCSV(symbol) {
    let srt = new XMLHttpRequest();
    srt.open("GET", "csv/"+ symbol +" Historical Data.csv", false);
    srt.send();
    return csvArr(srt.responseText);
}

function csvArr(dataArr) {
    let arr = [];
    let list = dataArr.split('\n');

    for (let i = 0; i < list.length; i++) {
        arr[i] = list[i].split('","');
    }
    return arr;
}