// // /***   COINCAP API FETCH  *****/
// var getCoinData = function () {
//   var apiUrl = "https://api.coincap.io/v2/assets?limit=6";

//   fetch(apiUrl).then(function (response) {
//     return response.json()
//   })
//     .then(function (data) {
//       console.log(data);
//       for (var i = 0; i < data.data.length; i++) {
//         console.log(data.data[i].name);
//         console.log(data.data[i].symbol);
//         console.log(data.data[i].rank);
//         console.log(data.data[i].priceUsd);    
//         console.log(data.data[i].changePercent24Hr);

//         //OTHER ITEMS WE DIDN'T SPECIFY:
//         //average price for 24hrs
//         console.log(data.data[i].vwap24Hr);
//         //market cap
//         console.log(data.data[i].marketCapUsd);

//       }
//     });
// }
// getCoinData()



// /*** COIN CAP CANDLES  FETCH  FOR OPEN &  CLOSE 24 hr*****/
// var getCoinCapCandles = function () {
//   var apiUrl = "https://api.coincap.io/v2/candles?exchange=poloniex&interval=h8&baseId=ethereum&quoteId=bitcoin";

//   fetch(apiUrl).then(function (response) {
//     return response.json()
//   })
//     .then(function (data) {
//       console.log(data.data);
//       // for (var i = 0; i < data.length; i++) {
//       //   // console.log(data[i].id);
//       // }
//     });
// }
// getCoinCapCandles()


var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://yfapi.net/v11/finance/quoteSummary/AAPL',
  params: {modules: 'defaultKeyStatistics,assetProfile'},
  headers: {
    'x-api-key': 'YOUR-PERSONAL-API-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
       


// /***   coinGECKO API FETCH  *****/

// var getGeckoData = function () {
//   var apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";

//   fetch(apiUrl).then(function (response) {
//     return response.json()
//   })
//     .then(function (data) {
//       for (var i = 0; i < data.length; i++) {
//         console.log(data);
//         console.log(data[i].id);
//       }
//     });
// }
// getGeckoData()

