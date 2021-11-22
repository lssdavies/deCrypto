//var coinLibKey = "c06378ec9fc1b93c"
var coinLibKey = "d47e0f39792a9fa3"
var symbols = ""
//var today = ""
var price = ""
var arrayinloop = [];
var InputValue = document.querySelector(".input-value").value

var savecripto = function () {
  localStorage.setItem("cripto", JSON.stringify(arrayinloop));
}

var dashboard = document.querySelector("#dashboard")

var loadCripto = function () {
  var savedCripto = localStorage.getItem("cripto")
  if (!savedCripto) {
    return false
  }

  savedCripto = JSON.parse(savedCripto)
  for (var i = 0; i < savedCripto.length; i++) {

    const validInput = isValidInput(InputValue);

    var name = savedCripto[i].Name
    var symbol = savedCripto[i].Symbol
    var rank = savedCripto[i].Rank
    //var market = data.coins[i].market_cap
    var symbolLower = symbol.toLowerCase()
    var percentChange24 = savedCripto[i].PercentChange24
    var priceRound = savedCripto[i].Price
    var purchase = savedCripto[i].Purchase

    //Card Container
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

    // Icons
    var iconContainer = document.createElement("div")
    iconContainer.setAttribute("id", "icon-container")
    var iconEl = document.createElement("i")
    iconEl.classList = "coin-icon"
    currentCoinDataListUl.appendChild(iconContainer)
    iconContainer.appendChild(iconEl)
    iconEl.innerHTML = "<img src='https://cryptoicon-api.vercel.app/api/icon/" + symbolLower + "'>"
    console.log(iconEl.innerHTML)

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
    //Market Cap
    // var currentCoinMarketLi = document.createElement("li")
    // currentCoinMarketLi.classList = "list-group-item market-item"
    // currentCoinMarketLi.textContent = "Market Cap USD: " + marketRound
    // currentCoinDataListUl.appendChild(currentCoinMarketLi)
    //percent Change
    var coinPercentChangeLi = document.createElement("li")
    coinPercentChangeLi.classList = "list-group-item market-item"
    coinPercentChangeLi.textContent = "% Change (24 hr): " + percentChange24
    currentCoinDataListUl.appendChild(coinPercentChangeLi)

    //purchase
    var currentCoinPurchaseLi = document.createElement("li")
    currentCoinPurchaseLi.classList = "list-group-item purchase-item"

    //if (validInput) {
    currentCoinPurchaseLi.textContent = "Purchase Power: " + purchase;
    // }
    currentCoinDataListUl.appendChild(currentCoinPurchaseLi)
  }
}


/*************  FIRST FETCH CALL: GETS OUR CARD DATA POINTS AND CALCULATES  PURCHASE POWER ************/
function getTop5(InputValue) {
  var apiUrl = "https://coinlib.io/api/v1/coinlist?key=c06378ec9fc1b93c&page=1&pref=USD&order=rank_asc";

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
            var symbolLower = symbol.toLowerCase()
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

            // Icons
            var iconContainer = document.createElement("div")
            iconContainer.setAttribute("id", "icon-container")
            var iconEl = document.createElement("i")
            iconEl.classList = "coin-icon"
            currentCoinDataListUl.appendChild(iconContainer)
            iconContainer.appendChild(iconEl)
            iconEl.innerHTML = "<img src='https://cryptoicon-api.vercel.app/api/icon/" + symbolLower + "'>"
            console.log(iconEl.innerHTML)

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
            //*** Market Cap - may use this data point later ***/
            // var currentCoinMarketLi = document.createElement("li")
            // currentCoinMarketLi.classList = "list-group-item market-item"
            // currentCoinMarketLi.textContent = "Market Cap USD: " + marketRound
            // currentCoinDataListUl.appendChild(currentCoinMarketLi)

            //Percent Change
            var coinPercentChangeLi = document.createElement("li")
            coinPercentChangeLi.classList = "list-group-item market-item"
            coinPercentChangeLi.textContent = "% Change (24 hr): " + percentChange24
            currentCoinDataListUl.appendChild(coinPercentChangeLi)

            //Purchase
            var currentCoinPurchaseLi = document.createElement("li")
            currentCoinPurchaseLi.classList = "list-group-item purchase-item"

            if (validInput) {
              currentCoinPurchaseLi.textContent = "Purchase Power: " + purchase;
            }
            currentCoinDataListUl.appendChild(currentCoinPurchaseLi)

            var coin = {
              Rank: rank,
              Name: name,
              Symbol: symbol,
              Price: priceRound,
              MarketCap: marketRound,
              PercentChange24: percentChange24,
              Purchase: purchase,
            }
            arrayinloop[i] = coin
          }
          console.log(arrayinloop)

          savecripto()
        })
    })
}


//    ******* INPUT VALIDATION    ****
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
}

var savecripto = function () {
  localStorage.setItem("cripto", JSON.stringify(arrayinloop));
}

function clearCoinCards() {
  while (dashboard.firstChild) {
    dashboard.removeChild(dashboard.firstChild);
  };
}




/************* SECOND FETCH CALL:  Fetch News ************/
function getNews() {

  var newsUrl = "https://min-api.cryptocompare.com/data/v2/news/?lang=EN&categories=Market,trading&excludeCategories=Asia&sortOrder=popular&page=1&items$top=10&extraParams=decrypto&api_key=2bca4c4c3a2b4a0f3b91b3b8b668b8c2951f5d39944fa806eeabf1804ed13eca"

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

            $(articleImgEl).each(function () {
              var currentImg = $(this);
              currentImg.wrap("<a target='_blank' href='" + articleLink + "'</a>");
            })
          }
     })
})
}

setTimeout(function () {
  getNews()
}, 500)


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
//save function


//START LISTENER :  Start App Fetch and Open Modal
// <!--Modal Pop-Up control-->
var text = document.querySelector("#introP")
$("#myBtn").one('click', function (event) {
  event.preventDefault();
  var InputValue = document.querySelector(".input-value").value

  $("#dollar-input").hide();
  getTop5(InputValue);
  text.textContent = "If you want to put Another Amount please press the button again"
  clearCoinCards()
  
})
loadCripto();


// var popUp = document.querySelector("#myBtn");
// //var coinDashboard = document.querySelector("#dashboard");

// popUp.addEventListener("click", function (event) {
//   event.preventDefault();
//   var InputValue = document.querySelector(".input-value").value
//   getTop5(InputValue)
// })