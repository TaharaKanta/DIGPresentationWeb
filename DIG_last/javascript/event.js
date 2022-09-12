$("#submit-button").click(function () {
    if ($(".per-sum-text").val() == 100 && isAssetDataSet === true) {
        let isFirstData = true;
        $(".asset-row").each((i, element) => {
            symbol = $(".symbol").eq(i).val();
            if (symbol === "") {
                return true;
            } else {
                if (isFirstData) {
                    csvdata = getCSV(symbol);
                    csvdata = addNewCSVToStockData(csvdata);
                    isFirstData = false;
                } else {
                    csvdata = addMoreStockData(csvdata, getCSV(symbol))
                }
                return true;
            }
        });
        $(".asset-row").each((i, element) => {
            per = $(".per-value").eq(i).val();
            if (per === "") {
                return true;
            } else {
                const initialAsset = $("#initial-asset").val();
                csvdata = culPerStockValueData(csvdata, initialAsset, i, per);

            }
        });
        
        csvdata = getSumAssetdata(csvdata);
        
        $(".results").css("display", "");
        drawChart(csvdata);
        addResultTable(csvdata);
        
    } else {
        $(".results").css("display", "none");
    }
});

$(".symbol").change(function () {
    if (isDatalistSymbol($(this).val()) === false && $(this).val() !== "") {
        $(this).css('background-color', '#fa9696');
        isAssetDataSet = false;
    } else if ($(this).parent().next().find('.per-value').val() === "" && $(this).val() !== "") {
        $(this).parent().next().find('.per-value').css('background-color', '#fa9696');
        isAssetDataSet = false;
    } else if ($(this).val() === "" && $(this).parent().next().find('.per-value').val() !== "") {
        $(this).css('background-color', '#fa9696');
        isAssetDataSet = false;
    } else {
        $(this).css('background-color', '#ffffff');
        $(this).parent().next().find('.per-value').css('background-color', '#ffffff');
        isAssetDataSet = true;
    }
});

$(".per-value").change(function () {
    isHandredPer();
    if ($(this).parent().prev().find('.symbol').val() === "" && $(this).val() !== "") {
        $(this).parent().prev().find('.symbol').css('background-color', '#fa9696');
        isAssetDataSet = false
    } else if ($(this).val() === "" && $(this).parent().prev().find('.symbol').val() !== "") {
        $(this).css('background-color', '#fa9696');
        isAssetDataSet = false;
    } else {
        $(this).css('background-color', '#ffffff');
        $(this).parent().prev().find('.symbol').css('background-color', '#ffffff');
        isAssetDataSet = true;
    }
});

$("#start-year").change(function () {
    if (isNaN(Number($(this).val()))) $(this).val(2000);
});

function isDatalistSymbol(symbol) {
    let isSymbol = false;
    $("#stocks-symbols").find("option").each((i, e) => {
        if (e.value === symbol) {
            isSymbol = true;
            return false;
        }
    });
    return isSymbol;
}

function isHandredPer() {
    let sum = 0;
    $(".per-value").each((i, e) => {
        if (isNaN(Number(e.value))) e.value = "";
        sum += Number(e.value);
    });
    $(".per-sum-text").val(sum)
    if (sum > 100 || sum < 100) {
        $(".per-sum-text").css('background-color', '#fa9696');
    } else if (sum === 100) {
        $(".per-sum-text").css('background-color', '#96fa96')
    }
}