// // //call for list of coin names

// // function hiLowCall(symbolsForApi, rank) {
// //   var hiLowUrl = "https://coinlib.io/api/v1/coin?key=c06378ec9fc1b93c&symbol=" + symbolsForApi + "";
// //   //too confirm hiLowCall is formated properly:
// //   console.log(hiLowUrl);
// //   var rank = rank

// //   fetch(hiLowUrl)
// //     .then(function (response, rank) {
// //       var rank = rank
// //       response.json()
// //         .then(function (data, rank) {
// //           //console.log as check then display in main card
// //           console.log(data, rank);
// //           var rank = rank

// //           for (var i = 0; i < data.coins.length; i++) {
// //             //name & symbol just to confirm that we are pulling data from the same coins as from the 1st call
// //             console.log(data.coins[i].name);
// //             console.log(data.coins[i].symbol);
// //             //need these 2 data points for our Coin Cards
// //             console.log(data.coins[i].high_24h);
// //             console.log(data.coins[i].low_24h);



// //             // var rank = data.data[i].rank
// //             // var price = data.data[i].priceUsd
// //             var hi = data.coins[i].high_24h
// //             var lo = data.coins[i].low_24h



// var currentCoinDataCard = document.createElement("div")
// //card
// var dashboard = document.querySelector(".data-here")
// dashboard.appendChild(currentCoinDataCard)
// //card-body
// var currentCoinDataCardBody = document.createElement("div")
// currentCoinDataCard.appendChild(currentCoinDataCardBody)
// //Title
// var currentCoinDataTitle = document.createElement("h2")
// currentCoinDataTitle.classList = "card-title coin-title"
// currentCoinDataCardBody.appendChild(currentCoinDataTitle)
// //Ul
// var currentCoinDataListUl = document.createElement("ul")
// currentCoinDataListUl.classList = "list-group coin-list"
// currentCoinDataCardBody.appendChild(currentCoinDataListUl)

//combin data from 2 api calls into 2 array
var firstCall = [1,2,3,4,5]
var secondCall = [6,7,8,9]

// firstCall.push.apply(firstCall, secondCall)
// console.log(firstCall);// [1, 2, 3, 2, 3, 4, 5]

combinedCalls = firstCall.concat(secondCall)
console.log(combinedCalls)


//take new array and for loop to create DOM el
var createGlobalDom = function (combinedCalls) { 
  console.log(combinedCalls)

// for (var i =0; i <= firstCall.length; i++ ) {
// console.log(firstCall);
//   var currentCoinRankLi = document.createElement("li")
//   // var currentCoinRankLi = document.createElement("li")
//   currentCoinDataListUl.appendChild(currentCoinRankLi)
//   currentCoinRankLi.classList = "list-group-item rank-item"
//   currentCoinRankLi.textContent = "Rank: " + firstCall[0]

//   var currentCoinPriceLi = document.createElement("li")
//   currentCoinDataListUl.appendChild(currentCoinPriceLi)
//   currentCoinPriceLi.classList = "list-group-item price-item"
//   currentCoinPriceLi.textContent = "Price (USD): " + firstCall[1]

//   var currentCoinMarketLi = document.createElement("li")
//   currentCoinDataListUl.appendChild(currentCoinMarketLi)
//   currentCoinMarketLi.classList = "list-group-item market-item"
//   currentCoinMarketLi.textContent = "Market Cap USD: " + firstCall[2]
// }

}
// To Test Btn functionality
$("#myBtn").click(function () {
  //   alert( "Handler for .click() called." );
  console.log("testBtn")
 createGlobalDom()
});
