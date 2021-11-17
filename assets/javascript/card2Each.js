var coinLibKey = "c06378ec9fc1b93c"
var symbols = ""
var today = ""
var price = ""

//Array for storing symbols from first Fetch Call getCoinData()- this Var then used in 2nd Fetch call hiLowCall() in order to get High & low
hiLowCoinArr = []

//*   VARIABLES  broken out for creating Coin Cards 
//We are calling data for the top 6 coins
//Each card will have:
//Name, Symbol, rank, marketCap, price, percent change in 24 hr, high 24 hr, low 24hr
var currentCoinDataCard = document.createElement("div")
//card
var dashboard = document.querySelector(".data-here")
dashboard.appendChild(currentCoinDataCard)
//card-body
var currentCoinDataCardBody = document.createElement("div")
currentCoinDataCard.appendChild(currentCoinDataCardBody)
//Title
var currentCoinDataTitle = document.createElement("h2")
currentCoinDataTitle.classList = "card-title coin-title"
currentCoinDataTitle.innerHTML = "Top 5 Coins"
currentCoinDataCardBody.appendChild(currentCoinDataTitle)
//Ul
var currentCoinDataListUl = document.createElement("ul")
currentCoinDataListUl.classList = "list-group coin-list"
currentCoinDataCardBody.appendChild(currentCoinDataListUl)



//First Fetch Call: gets the majority of our data points 
var getTop5 = function () {
  var apiUrl = "https://coinlib.io/api/v1/coinlist?key=c06378ec9fc1b93c&page=1&pref=USD&order=rank_asc";

  // var apiUrl = "https://coinlib.io/api/v1/coin?key=c06378ec9fc1b93c"
  // console.log(data)

  fetch(apiUrl)
    .then(function (response) {
      return response.json()
        .then(function (data) {
          console.log(data);

          for (var i = 0; i <= 4; i++) {
            console.log(data.coins[i].name)
            console.log(data.coins[i].symbol);
            console.log(data.coins[i].rank);
            // console.log(data.coins[i].market_cap);
            // var price = data.coins[i].price

            //   console.log(data.data[i].changePercent24Hr);

            //define Var for cards
            var name = data.coins[i].name
            var symbol = data.coins[i].symbol
            var rank = data.coins[i].rank
            var priceRound = (Math.round(data.coins[i].price * 100) / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',      });
            var purchase = (Math.round((100 / data.coins[i].price) * 10) / 10)

            // Rank
            var currentCoinRankLi = document.createElement("li")
            currentCoinRankLi.classList = "list-group-item rank-item"
            currentCoinRankLi.textContent = "Rank: " + rank
            currentCoinDataListUl.appendChild(currentCoinRankLi)
            // ID - Name - 
            var currentCoinNameLi = document.createElement("li")
            currentCoinNameLi.classList = "list-group-item name-item"
            currentCoinNameLi.textContent = "Name: " + name
            currentCoinDataListUl.appendChild(currentCoinNameLi)
            // Symbol
            var currentCoinSymbolLi = document.createElement("li")
            currentCoinSymbolLi.classList = "list-group-item symbol-item"
            currentCoinSymbolLi.textContent = "Trading Symbol: " + symbol
            currentCoinDataListUl.appendChild(currentCoinSymbolLi)
            //Price
            var currentCoinPriceLi = document.createElement("li")
            currentCoinPriceLi.classList = "list-group-item price-item"
            currentCoinPriceLi.textContent = "Price (USD): " + priceRound
            currentCoinDataListUl.appendChild(currentCoinPriceLi)
            //purchase
            var currentCoinPurchaseLi = document.createElement("li")
            currentCoinPurchaseLi.classList = "list-group-item purchase-item"
            currentCoinPurchaseLi.textContent = "Purchase Power: " + purchase
            currentCoinDataListUl.appendChild(currentCoinPurchaseLi)


            // setTimeout(function () {
            //   calculate(price)
            // }, 2000)


          };
        })
    })
}







// //Second Fetch Call: gets us the hi & low data pts
// function hiLowCall(symbolsForApi, id) {
//   var hiLowUrl = "https://coinlib.io/api/v1/coin?key=c06378ec9fc1b93c&symbol=" + symbolsForApi + "";
//   //too confirm hiLowCall is formated properly:
//   console.log(hiLowUrl);


//   fetch(hiLowUrl)
//     .then(function (response) {


//       response.json()
//         .then(function (data) {
//           //console.log as check then display in main card
//           console.log(data);

//           for (var i = 0; i < data.coins.length; i++) {
//             //name & symbol just to confirm that we are pulling data from the same coins as from the 1st call
//             console.log(data.coins[i].name);
//             console.log(data.coins[i].symbol);
//             //need these 2 data points for our Coin Cards
//             console.log(data.coins[i].high_24h);
//             console.log(data.coins[i].low_24h);

//             // // var rank = data.data[i].rank
//             // // var price = data.data[i].priceUsd
//             var hi = data.coins[i].high_24h
//             // var lo = data.coins[i].low_24h


//             // Var from first fetch
//             // ID - Name - 
//             var currentCoinIdLi = document.createElement("li")
//             currentCoinIdLi.classList = "list-group-item id-item"
//             currentCoinIdLi.textContent = "Name: " + id
//             currentCoinDataListUl.appendChild(currentCoinIdLi)


//             // //second fetch
//             var currentCoinHiLi = document.createElement("li")
//             currentCoinDataListUl.appendChild(currentCoinHiLi)
//             currentCoinHiLi.classList = "list-group-item hi-item"
//             currentCoinHiLi.textContent = "High Price: " + hi

//             // var currentCoinLoLi = document.createElement("li")
//             // currentCoinDataListUl.appendChild(currentCoinLoLi)
//             // currentCoinLoLi.classList = "list-group-item lo-item"
//             // currentCoinLoLi.textContent = "Lo Price: " + lo
//           }
//         })
//     })
// }



$("#myBtn").click(function () {
  //   alert( "Handler for .click() called." );
  console.log("testBtn")
  getTop5()
});

















//  *************************     Items for possible use later ****************************


//   // //    var today = data.data.timestamp
//   // //     var date = new Date(today * 1000);
//   // //        var dateCoin = date.textContent = (moment().format("MMMM Do YYYY, h:mm:ss a"));
//   // //         console.log(dateCoin);
//   //this Var will need to use in 2nd Fetch API
//   //hiLowCoinArr defined globally
//   // (2nd fetch gets us the hi & lo data pts)
//   hiLowCoinArr.push(data.data[i].symbol)
//   console.log(hiLowCoinArr);


//   //   //Market Cap
//   //   var currentCoinMarketLi = document.createElement("li")
//   //   currentCoinMarketLi.classList = "list-group-item market-item"
//   //   currentCoinMarketLi.textContent = "Market Cap USD: " + market
//   //   currentCoinDataListUl.appendChild(currentCoinMarketLi)


//   //var for inserting/calling 2nd Fetch Call (hiLowCall)
//   var symbolsForApi = hiLowCoinArr.join(" ").replace(/\s/g, ',');
//   console.log(symbolsForApi)

//   //* Set timeout for  2nd Fetch Call hiLowCall(), otherwise  2nd fetch runs too soon & data comes back null/undefined (these are async)
//   setTimeout(function () {
//     hiLowCall(symbolsForApi, data.data[i].id);
//   }, 2000)

// }
//         }
//     })
// }