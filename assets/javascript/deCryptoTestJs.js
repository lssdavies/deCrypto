//  VARIABLES ***/
var coinLibKey = "c06378ec9fc1b93c"
var today = ""
hiLowCoinArr = []

/***   COINCAP API FETCH  *****/
var getCoinData = function () {
  var apiUrl = "https://api.coincap.io/v2/assets?limit=6";

  fetch(apiUrl)
    .then(function (response) {
      return response.json()
        .then(function (data) {
          console.log(data);

          for (var i = 0; i < data.data.length; i++) {
            console.log(data.data[i].name);
            console.log(data.data[i].symbol);
            console.log(data.data[i].rank);
            console.log(data.data[i].priceUsd);
            console.log(data.data[i].changePercent24Hr);


            var today = data.data.timestamp
            var date = new Date(today * 1000);
            var dateCoin = date.textContent = (moment().format("MMMM Do YYYY, h:mm:ss a"));
            console.log(dateCoin);

            //   // //OTHER ITEMS WE DIDN'T SPECIFY:
            //   // //average price for 24hrs
            //   // console.log(data.data[i].vwap24Hr);
            //   // //market cap
            //   // console.log(data.data[i].marketCapUsd);

            hiLowCoinArr.push(data.data[i].symbol)
            console.log(hiLowCoinArr);
          };
          var symbolsForApi = hiLowCoinArr.join(" ").replace(/\s/g, ',');
          console.log(symbolsForApi)

          setTimeout(function () {
            hiLowCall(symbolsForApi);
          }, 1000)

        })
    })
}
getCoinData()

function hiLowCall(symbolsForApi) {
  var hiLowUrl = "https://coinlib.io/api/v1/coin?key=c06378ec9fc1b93c&symbol=" + symbolsForApi + "";

  console.log(hiLowUrl);


  fetch(hiLowUrl)
    .then(function (response) {
      response.json()
        .then(function (data) {
          //console.log as check then display in main card
          console.log(data);

          for (var i = 0; i < data.coins.length; i++) {
          console.log(data.coins[i].name);
          console.log(data.coins[i].symbol);
          console.log(data.coins[i].high_24h);
          console.log(data.coins[i].low_24h);
          }
        })
    })

}


//https://coinlib.io/api/v1/coin?key=XXX&pref=USD&symbol=coin1,coin2,coin3,coin4,coin5,coin6


// var oneCall = function (lat, lon) {
//   var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=299ebedfe3926f8c9e100c54f9104d93";
//   console.log(oneCallUrl)

//   fetch(oneCallUrl)
//     .then(function (response) {
//       response.json()
//         .then(function (data) {
//           //console.log as check then display in main card
//           console.log(data);
//         })
//     })

//   //set up cards dynamically with for loop
// }




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


// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://yfapi.net/v11/finance/quoteSummary/AAPL',
//   params: {modules: 'defaultKeyStatistics,assetProfile'},
//   headers: {
//     'x-api-key': 'YOUR-PERSONAL-API-KEY'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });



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

