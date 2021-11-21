//var coinLibKey = "c06378ec9fc1b93c"
var coinLibKey = "d47e0f39792a9fa3"
var symbols = ""
var today = ""
var price = ""


//*   VARIABLES  broken out for creating Coin Cards 
//We are calling data for the top 5 coins; Each card will have:
//Name, Symbol, rank, marketCap, price, percent change in 24 hr, high 24 hr, low 24hr

var dashboard = document.querySelector("#dashboard")


/*************  FIRST FETCH CALL: GETS OUR CARD DATA POINTS AND CALCULATES  PURCHASE POWER ************/
function getTop5(InputValue) {
  var apiUrl = "https://coinlib.io/api/v1/coinlist?key=d47e0f39792a9fa3&page=1&pref=USD&order=rank_asc";

  const validInput = isValidInput(InputValue);

  fetch(apiUrl)
    .then(function (response) {
      return response.json()
        .then(function (data) {
          console.log(data);

          for (var i = 0; i <= 4; i++) {
            //define Var for cards
            var name = data.coins[i].name
            var symbol = data.coins[i].symbol
            var rank = data.coins[i].rank
            var market = data.coins[i].market_cap
            var marketRound = (Math.round(data.coins[i].market_cap * 1) / 1).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            });

            var percentChange24 = data.coins[i].delta_24h
            var priceRound = (Math.round(data.coins[i].price * 100) / 100).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            });

            const purchase = calculate(InputValue, data.coins[i].price);

            //card-body
            var cardContainer = document.createElement("div")
            cardContainer.classList = "card-container";
            dashboard.appendChild(cardContainer)

   
            //Ul
            var currentCoinDataListUl = document.createElement("ul")
            currentCoinDataListUl.classList = "list-group coin-list"

            cardContainer.appendChild(currentCoinDataListUl)


            // Rank
            var currentCoinRankLi = document.createElement("li")
            currentCoinRankLi.classList = "list-group-item rank-item"
            currentCoinRankLi.textContent = "Rank: " + rank
            currentCoinDataListUl.appendChild(currentCoinRankLi)
            // ID - Name - 
            var currentCoinNameLi = document.createElement("li")
            currentCoinNameLi.classList = "list-group-item name-item"
            currentCoinNameLi.textContent = name
            currentCoinDataListUl.appendChild(currentCoinNameLi)
            // Symbol
            var currentCoinSymbolLi = document.createElement("li")
            currentCoinSymbolLi.classList = "list-group-item symbol-item"
            currentCoinSymbolLi.textContent = "Symbol: " + symbol
            currentCoinDataListUl.appendChild(currentCoinSymbolLi)
            //Price
            var currentCoinPriceLi = document.createElement("li")
            currentCoinPriceLi.classList = "list-group-item price-item"
            currentCoinPriceLi.textContent = "Price (USD): " + priceRound
            currentCoinDataListUl.appendChild(currentCoinPriceLi)
            // //Market Cap
            // var currentCoinMarketLi = document.createElement("li")
            // currentCoinMarketLi.classList = "list-group-item market-item"
            // currentCoinMarketLi.textContent = "Market Cap USD: " + marketRound
            // currentCoinDataListUl.appendChild(currentCoinMarketLi)
            //percent Change
            var coinPercentChangeLi = document.createElement("li")
            coinPercentChangeLi.classList = "list-group-item market-item"
            coinPercentChangeLi.textContent = "Percent Change(24 hr): " + percentChange24
            currentCoinDataListUl.appendChild(coinPercentChangeLi)
            //purchase
            var currentCoinPurchaseLi = document.createElement("li")
            currentCoinPurchaseLi.classList = "list-group-item purchase-item"

            if (validInput) {
              currentCoinPurchaseLi.textContent = "Purchase Power: " + purchase;
            }
            currentCoinDataListUl.appendChild(currentCoinPurchaseLi)
          }
        })
    })
}
// getTop5()


//    *******INPUT VALIDAITON    ****
var isValidInput = function (InputValue) {
  if (InputValue == null || InputValue == "") {
    return false;
  } else {
    if (isNaN(InputValue)) {
      // window.alert("Please Enter a Correct Number");
      return false;
    }
    if (InputValue < 0) {
      // window.alert("Please enter a positive number");
      return false;
    }
  }
  return true;
}


//  we would use  - data.data[i].priceUsd - from the first call for this
var calculate = function (InputValue, price) {
  cryptoAmount = InputValue / price;
  // return cryptoAmount.toFixed(2);
  return cryptoAmount;
};


/************* SECOND FETCH CALL:  Fetch News ************/
function getNews() {

  var newsUrl = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=Market,trading&excludeCategories=Asia&sortOrder=popular&page=1&items$top=10&api_key=2bca4c4c3a2b4a0f3b91b3b8b668b8c2951f5d39944fa806eeabf1804ed13eca"


  fetch(newsUrl)
    .then(function (response) {
      response.json()
        .then(function (data) {
          //console.log as check then display in main card
          console.log(data);
          // console.log(data.Data[i].url)

          for (var i = 0; i < 8; i++) {

            var articleTitle = data.Data[i].title
            var articleLink = data.Data[i].url

            var articleImgEl = document.createElement("img")
            var articleImgSrc = data.Data[i].source_info.img
            articleImgEl.src = articleImgSrc

            //articleImgEl.style.width = '10em'
            // articleImg.setAttribute("src", articleImg)
            var linkDiv = document.createElement("div")
            linkDiv.classList = "news-card"

            var linkContainer = document.querySelector(".link-container")
            linkContainer.appendChild(linkDiv)
            linkDiv.appendChild(articleImgEl)
            $(linkDiv).append(`<a href="${articleLink}" target="_blank">${articleTitle}</a>`)



          }
        })
    })
}

setTimeout(function () {
  getNews()
}, 1000)





/**********NAV BAR MODAL POP UPS***************/
/************* Modal 1:  ABOUT  Pop-Up control ************/
var aboutPopUp = document.querySelector("#aboutBtn");
var aboutModalContainer = document.querySelector("#modalContainer1");
var close = document.querySelector("#closeBtn");

aboutPopUp.addEventListener("click", function () {
  aboutModalContainer.classList = "modalContainer open";
});
close.addEventListener("click", function () {
  aboutModalContainer.classList = "modalContainer";
});


/************* Modal 2:  FAQ  Pop-Up control ************/
var faqPopUp = document.querySelector("#faqBtn");
var faqModalContainer = document.querySelector("#modalContainer2");
var close = document.querySelector("#closeBtn2");

faqPopUp.addEventListener("click", function () {
  faqModalContainer.classList = "modalContainer open";
});
close.addEventListener("click", function () {
  faqModalContainer.classList = "modalContainer";
});


/************* Modal 3: GLOASSARY  Pop-Up control ************/
var glossPopUp = document.querySelector("#glossBtn");
var glossModalContainer = document.querySelector("#modalContainer3");
var close = document.querySelector("#closeBtn3");

glossPopUp.addEventListener("click", function () {
  glossModalContainer.classList = "modalContainer open";
});
close.addEventListener("click", function () {
  glossModalContainer.classList = "modalContainer";
});




//START LISTENER :  Start App Fetch and Open Modal

// <!--Modal Pop-Up control-->
var popUp = document.querySelector("#myBtn");
//var coinDashboard = document.querySelector("#dashboard");

popUp.addEventListener("click", function (event) {
  event.preventDefault();
  var InputValue = document.querySelector(".input-value").value
  getTop5(InputValue)
})
