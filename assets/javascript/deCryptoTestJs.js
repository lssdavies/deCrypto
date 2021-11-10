
// var getCoinData = function() {
//   var apiUrl = "https://api.coincap.io/v2/assets?limit=10";

//   fetch(apiUrl).then(function(response) {
 
//   response.json()
//   console.log(response)

//    .then(function(data) {
//       console.log(data);
//       console.log(data.rank);
//       })
// });
// }
// getCoinData()




/*****   coinGecko   ******/


var getGeckoData = function() {
  var apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";

  fetch(apiUrl).then(function(response) {
 
  return response.json()
  })

   .then(function(data) {
    for (var i = 0; i < data.length; i++) {
      
      console.log(data);
      console.log(data[i].id);
      }
});
}
getGeckoData()

