var coinLibKey = "c06378ec9fc1b93c"
var symbols = ""
var today = ""
var price = ""

//*   VARIABLES  broken out for creating Coin Cards 
//We are calling data for the top 6 coins
//Each card will have:
//Name, Symbol, rank, marketCap, price, percent change in 24 hr, high 24 hr, low 24hr
var currentCoinDataCard = document.createElement("div")
//card
var dashboard = document.querySelector(".card-container")
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

//News DOM Creation
// News Container
var news = document.querySelector(".news")
//card
var newsCard = document.createElement("div")
news.appendChild(newsCard)
// //Title
// var newsCardTitle = document.createElement("h2")
// newsCardTitle.classList = "card-title news-title"
// newsCardTitle.innerHTML = "Latest News"
// newsCard.appendChild(newsCardTitle)
// New List
var newsListUl = document.createElement("ul")
newsListUl.classList = "list-group news-list"
newsCard.appendChild(newsListUl)


/*****    Input Form Handling*****/
// let formSubmitHandler = function (event) {
//   event.preventDefault();
//   //confirm desired event
//   // console.log(event);

//   //get city name from input field el
//   // let cityName = cityNameInputEl.value.replace(/\s/g, '');
//   let dollars = dollarsInputEl.value;

//   //console cityName later will be displayed in main card
//   // console.log(cityName);
//   if (dollars) {
//     //get weather data using cityName var in getWeather function
//     console.log(dollars);
//     //clear input field
//     dollarsInputEl.value = "";
//     // forecastCard.innerHTML = ""
//   } else {
//     //update to modal later
//     alert("Please enter a valid US City name.");
//   };
//   console.log(dollars);
//   return dollars;
// }


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
              currency: 'USD',
            });
            // var purchase = (Math.round((100 / data.coins[i].price) * 10) / 10)
            var purchase = 100 / data.coins[i].price
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

            calculate(data.coins[i].price)

            // setTimeout(function () {
            //   calculate(price)
            // }, 2000)


          };

        })
    })
}

//input function card - PURCHASE POWER
var calculate = function (price) {
  purchase = "100" / price;
  console.log(price)
}



// // //Second Fetch Call: gets us the hi & low data pts
var getNews = function () {

  // var newsUrl = "https://min-api.cryptocompare.com/data/news/feeds"
  var newsUrl = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=Market,trading&excludeCategories=Asia&sortOrder=popular&page=1&items$top=10&api_key=2bca4c4c3a2b4a0f3b91b3b8b668b8c2951f5d39944fa806eeabf1804ed13eca"

  console.log(newsUrl);



  fetch(newsUrl)
    .then(function (response) {
      response.json()
        .then(function (data) {
          //console.log as check then display in main card
          console.log(data);
          // console.log(data.Data[i].url)

          for (var i = 0; i < 4; i++) {
            console.log(data.Data[0].title)
            console.log(data.Data[0].url)
            // console.log(data.coins[i].name)

            var articleTitle = data.Data[0].title
            var articleLink = data.Data[0].url


            var articleATag = document.createElement('a');
            articleATag.setAttribute("href", articleLink);
            articleTitle.innerHTML = articleTitle
            //add new link to the DOM
            newsCard.appendChild(articleTitle);


          }

        })
    })
}



// $("#myBtn").click(function () {
//   //   alert( "Handler for .click() called." );
//   console.log("testBtn")
//   getTop5()
// });

getNews()


// <!--Modal Pop-Up control-->
var popUp = document.querySelector("#myBtn");
var modalContainer = document.querySelector("#modalContainer");
var close = document.querySelector("#closeBtn");

popUp.addEventListener("click", function () {
  modalContainer.classList = "modalContainer open";
  getNews()
});

close.addEventListener("click", function () {

  modalContainer.classList = "modalContainer";

})







//LISTENER :  Start App Fetch and Open Modal
// var popUp = document.querySelector("#myBtn");
// var modalContainer = document.querySelector("#modalContainer");

// var close = document.querySelector("#closeBtn");
// popUp.addEventListener("click", function() {
//  modalContainer.classList= "modalContainer open";
//  getTop5()
// });

// close.addEventListener("click", function() {
//  modalContainer.classList = "modalContainer";
// });

// userFormEl.addEventListener("submit", formSubmitHandler);














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

