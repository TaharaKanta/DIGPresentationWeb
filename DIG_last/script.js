var request = require('request'); // npm install request --save
var cheerio = require('cheerio'); // npm install cheerio --save
var options = {
  url: 'https://kabuoji3.com/stock/1557/',
  method: 'GET'
}
request(options, function (error, response, body) {
  try {
    const $ = cheerio.load(body);
    $(".stock_data_table > tbody > tr").each((i, elem) => {
      var item_count = $(elem).find("td").length;
      if (item_count == 7) {
        $(elem).find("td").each((n, td_elem) => {
          var value = $(td_elem).text();
          console.log(n, value);
        });
      }
      console.log(item_count);
    })
 } catch (e) {
     console.error(e);
 }
});