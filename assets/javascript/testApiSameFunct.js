
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
currentCoinDataCardBody.appendChild(currentCoinDataTitle)
//Ul
var currentCoinDataListUl = document.createElement("ul")
currentCoinDataListUl.classList = "list-group coin-list"
currentCoinDataCardBody.appendChild(currentCoinDataListUl)

hiLowCoinArr = []

//First Fetch Call: gets the majority of our data points 
var getCoinData = function () {
  var apiUrl = "https://api.coincap.io/v2/assets?limit=6";

  fetch(apiUrl)
    .then(function (response) {
      return response.json()
        .then(function (data) {
          console.log(data);

          for (var i = 0; i < data.data.length; i++) {
            console.log(data.data[i].symbol);
            console.log(data.data[i].rank);
            console.log(data.data[i].marketCapUsd);
            console.log(data.data[i].priceUsd);
            console.log(data.data[i].changePercent24Hr);

            //var to be brought into the second fetch
            // var symbol = data.data[i].symbol
            // var rank = data.data[i].rank
            // var price = data.data[i].priceUsd
            // var market = data.data[i].marketCapUsd


            // //    var today = data.data.timestamp
            // //     var date = new Date(today * 1000);
            // //        var dateCoin = date.textContent = (moment().format("MMMM Do YYYY, h:mm:ss a"));
            // //         console.log(dateCoin);

            //this Var will need to use in 2nd Fetch API
            //hiLowCoinArr defined globally
            // (2nd fetch gets us the hi & lo data pts)
            hiLowCoinArr.push(data.data[i].symbol)
            console.log(hiLowCoinArr);

            // priceArr.push(data.data[i].priceUsd)
          };

          //var for inserting/calling 2nd Fetch Call (hiLowCall)
          var symbolsForApi = hiLowCoinArr.join(" ").replace(/\s/g, ',');
          console.log(symbolsForApi)

          //* Set timeout for  2nd Fetch Call hiLowCall(), otherwise  2nd fetch runs too soon & data comes back null/undefined (these are async)
          // setTimeout(function () {
          //   hiLowCall(symbolsForApi);
          // }, 2000)


          var hiLowUrl = "https://coinlib.io/api/v1/coin?key=c06378ec9fc1b93c&symbol=" + symbolsForApi + "";
          //too confirm hiLowCall is formated properly:
          console.log(hiLowUrl);


          fetch(hiLowUrl)
            .then(function (response) {


              response.json()
                .then(function (data) {
                  //console.log as check then display in main card
                  console.log(data);

                  for (var j = 0; j < data.coins.length; j++) {
                    //name & symbol just to confirm that we are pulling data from the same coins as from the 1st call
                    console.log(data.coins[j].name);
                    console.log(data.coins[j].symbol);
                    //need these 2 data points for our Coin Cards
                    console.log(data.coins[j].high_24h);
                    console.log(data.coins[j].low_24h);
                  }
                })
            })

        })
    })
}


// To Test Btn functionality
$("#myBtn").click(function () {
  //   alert( "Handler for .click() called." );
  console.log("testBtn")
  getCoinData()
});

                    // // var rank = data.data[i].rank
                    // // var price = data.data[i].priceUsd
                    // var hi = data.coins[i].high_24h
                    // var lo = data.coins[i].low_24h


                    // check that api fetch works then add these
                    // var currentCoinSymbolLi = document.createElement("li")
                    // currentCoinSymbolLi.classList = "list-group-item symbol-item"
                    // currentCoinDataListUl.appendChild(currentCoinSymbolLi)
                    // // // currentCoinSymbolLi.innerHTML("angke")
                    // var currentCoinRankLi = document.querySelector("#rank")
                    // // var currentCoinRankLi = document.createElement("li")
                    // currentCoinDataListUl.appendChild(currentCoinRankLi)
                    // currentCoinRankLi.classList = "list-group-item rank-item"
                    // currentCoinRankLi.textContent = "Rank: " + rank

                    // var currentCoinPriceLi = document.createElement("li")
                    // currentCoinDataListUl.appendChild(currentCoinPriceLi)
                    // currentCoinPriceLi.classList = "list-group-item price-item"
                    // currentCoinPriceLi.textContent = "Price (USD): " + price

                    // var currentCoinMarketLi = document.createElement("li")
                    // currentCoinDataListUl.appendChild(currentCoinMarketLi)
                    // currentCoinMarketLi.classList = "list-group-item market-item"
                    // currentCoinMarketLi.textContent = "Market Cap USD: " + market



                    // //second fetch
                    // var currentCoinHiLi = document.createElement("li")
                    // currentCoinDataListUl.appendChild(currentCoinHiLi)
                    // currentCoinHiLi.classList = "list-group-item hi-item"
                    // currentCoinHiLi.textContent = "High Price: " + hi

                    // var currentCoinLoLi = document.createElement("li")
                    // currentCoinDataListUl.appendChild(currentCoinLoLi)
                    // currentCoinLoLi.classList = "list-group-item lo-item"
      //               // currentCoinLoLi.textContent = "Lo Price: " + lo
      //             })
      //       })
      //   }
      // }