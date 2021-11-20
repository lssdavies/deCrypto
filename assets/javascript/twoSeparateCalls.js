var coinLibKey = "c06378ec9fc1b93c"
var symbols = ""
var today = ""
var price = ""

//*   VARIABLES  broken out for creating Coin Cards 
//We are calling data for the top 5 coins; Each card will have:
//Name, Symbol, rank, marketCap, price, percent change in 24 hr, high 24 hr, low 24hr
var currentCoinDataCard = document.createElement("div")
//card
var dashboard = document.querySelector(".card-container")
dashboard.classList = "card-container";
dashboard.appendChild(currentCoinDataCard)
//card-body
var currentCoinDataCardBody = document.createElement("div")
dashboard.appendChild(currentCoinDataCardBody)
//Title
var currentCoinDataTitle = document.createElement("h2")
currentCoinDataTitle.classList = "card-title"
currentCoinDataTitle.innerHTML = "Top 5 Coins"
currentCoinDataCardBody.appendChild(currentCoinDataTitle)
//Ul
var currentCoinDataListUl = document.createElement("ul")
currentCoinDataListUl.classList = "list-group coin-list"
currentCoinDataCardBody.appendChild(currentCoinDataListUl)


//First Fetch Call: GETS OUR CARD DATA POINTS AND CALCULATES  PURCHASE POWER
var getTop5 = function () {
  var apiUrl = "https://coinlib.io/api/v1/coinlist?key=c06378ec9fc1b93c&page=1&pref=USD&order=rank_asc";

  var InputValue = document.querySelector("input").value

  fetch(apiUrl)
    .then(function (response) {
      return response.json()
        .then(function (data) {
          console.log(data);

          for (var i = 0; i <= 2; i++) {
            //define Var for cards
            var name = data.coins[i].name
            var symbol = data.coins[i].symbol
            var rank = data.coins[i].rank
            var market = data.coins[i].market_cap
            var percentChange24 = data.coins[i].delta_24h
            var priceRound = (Math.round(data.coins[i].price * 100) / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            });
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
            //Market Cap
            var currentCoinMarketLi = document.createElement("li")
            currentCoinMarketLi.classList = "list-group-item market-item"
            currentCoinMarketLi.textContent = "Market Cap USD: " + market
            currentCoinDataListUl.appendChild(currentCoinMarketLi)
            //percent Change
            var coinPercentChangeLi = document.createElement("li")
            coinPercentChangeLi.classList = "list-group-item market-item"
            coinPercentChangeLi.textContent = "Percent Change(24 hr): " + percentChange24
            currentCoinDataListUl.appendChild(coinPercentChangeLi)
            //purchase
            var currentCoinPurchaseLi = document.createElement("li")
            currentCoinPurchaseLi.classList = "list-group-item purchase-item"
            currentCoinPurchaseLi.textContent = "Purchase Power: " + purchase
            currentCoinDataListUl.appendChild(currentCoinPurchaseLi)

            calculate(InputValue, data.coins[i].price)

            // setTimeout(function () {
            //   calculate(price)
            // }, 2000)
          };
        })
    })
}

//input function card - PURCHASE POWER
var calculate = function (InputValue, phone) {
  purchase = InputValue / phone;
  console.log(price)
}

// // //Second Fetch Call: GETS NEWS FOR PAGE
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

          for (var i = 0; i < 8; i++) {
            console.log(data.Data[i].title)
            console.log(data.Data[i].url)
            // console.log(data.coins[i].name)

            var articleTitle = data.Data[i].title
            var articleLink = data.Data[i].url

            var articleImgEl = document.createElement("img")
            var articleImgSrc = data.Data[i].source_info.img
            articleImgEl.src = articleImgSrc
            articleImgEl.style.width = '10em'
            // articleImg.setAttribute("src", articleImg)
            var linkContainer = document.querySelector(".link-container")
            linkContainer.appendChild(articleImgEl)


            $(".link-container").append(`<a href="${articleLink}" target="_blank">${articleTitle}</a>`)
            // $(".link-container").append(`${articleImgSrc}`)
          }
        })
    })
}
getNews()


//Modal Pop-Up control
var aboutPopUp = document.querySelector("#aboutBtn");
var aboutModalContainer = document.querySelector("#modalContainer1");
var close = document.querySelector("#closeBtn");

aboutPopUp.addEventListener("click", function() {
    aboutModalContainer.classList = "modalContainer open";
   });
   
close.addEventListener("click", function() {

    aboutModalContainer.classList = "modalContainer";

});


// Modal FAQ-PopUp control
var faqPopUp = document.querySelector("#faqBtn");
var faqModalContainer = document.querySelector("#modalContainer2");
var close = document.querySelector("#closeBtn2");

faqPopUp.addEventListener("click", function() {
    faqModalContainer.classList = "modalContainer open";
   });


close.addEventListener("click", function() {

    faqModalContainer.classList = "modalContainer";

});

// Modal Glossary-PopUp control
var glossPopUp = document.querySelector("#glossBtn");
var glossModalContainer = document.querySelector("#modalContainer3");
var close = document.querySelector("#closeBtn3");

glossPopUp.addEventListener("click", function() {
        glossModalContainer.classList = "modalContainer open";
   });


close.addEventListener("click", function() {

    glossModalContainer.classList = "modalContainer";

});


//START LISTENER :  Start App Fetch and Open Modal
// <!--Modal Pop-Up control-->
var popUp = document.querySelector("#myBtn");
var modalContainer = document.querySelector("#modalContainer");
var close = document.querySelector("#closeBtn");

popUp.addEventListener("click", function () {
  modalContainer.classList = "modalContainer open";
  getTop5()

});

close.addEventListener("click", function () {
  modalContainer.classList = "modalContainer";










//  *************************     Items for possible use later ****************************

//News DOM Creation
// News Container
// var news = document.querySelector(".news")
//     //card
// var newsCard = document.createElement("div")
// news.appendChild(newsCard)

//newsCard.appendChild(newsCard)
// //Title
// var newsCardTitle = document.createElement("h2")
// newsCardTitle.classList = "card-title news-title"
// newsCardTitle.innerHTML = "Latest News"
// newsCard.appendChild(newsCardTitle)
// // New List
// var newsCard = document.querySelector(".card-container")
// var newsListUl = document.createElement("ul")
// newsListUl.classList = "list-group news-list"
// newsCard.appendChild(newsListUl)

  // //    var today = data.data.timestamp
  // //     var date = new Date(today * 1000);
  // //        var dateCoin = date.textContent = (moment().format("MMMM Do YYYY, h:mm:ss a"));
  // //         console.log(dateCoin);
  //this Var will need to use in 2nd Fetch API
  //hiLowCoinArr defined globally
  // (2nd fetch gets us the hi & lo data pts)
 // hiLowCoinArr.push(data.data[i].symbol)
 // console.log(hiLowCoinArr);

  //var for inserting/calling 2nd Fetch Call (hiLowCall)
//   var symbolsForApi = hiLowCoinArr.join(" ").replace(/\s/g, ',');
//   console.log(symbolsForApi)

//   //* Set timeout for  2nd Fetch Call hiLowCall(), otherwise  2nd fetch runs too soon & data comes back null/undefined (these are async)
//   setTimeout(function () {
//     hiLowCall(symbolsForApi, data.data[i].id);
//   }, 2000)

// }
//         }
//     })

/*  for testing: 
// $("#myBtn").click(function () {
//   //   alert( "Handler for .click() called." );
//   console.log("testBtn")
//   getTop5()
// });
// getNews()*/

//possible code  for dom creation
//https://medium.com/@tforward/get-html-to-the-dom-fast-with-js-template-literals-insertadjacenthtml-24b8aa4e8807