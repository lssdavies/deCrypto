// //  VARIABLES ***/
// Variables needed to run 1st Fetch Call getCoinData() 
var coinLibKey = "c06378ec9fc1b93c"
var symbols = ""
var today = ""

//Array for storing symbols from first Fetch Call getCoinData()- this Var then used in 2nd Fetch call hiLowCall() in order to get High & low
hiLowCoinArr = []


//*   VARIABLES  broken out for creating Coin Cards 
// We are calling data for the top 6 coins
// Each card will have:
//Name, Symbol, rank, marketCap, price, percent change in 24 hr, high 24 hr, low 24hr
var currentCoinDataCard = document.createElement("div")

var dashboard = document.querySelector(".data-here")
dashboard.appendChild(currentCoinDataCard)


var currentCoinDataCardBody = document.createElement("div")
currentCoinDataCard.appendChild(currentCoinDataCardBody)

var currentCoinDataTitle = document.createElement("h2")
currentCoinDataTitle.classList = "card-title coin-title"
currentCoinDataCardBody.appendChild(currentCoinDataTitle)

var currentCoinDataListUl = document.createElement("ul")
currentCoinDataListUl.classList = "list-group coin-list"
currentCoinDataCardBody.appendChild(currentCoinDataListUl)

// text content for Math Li is Mohammad's formula
//  var currentCoinMathLi = document.createElement("li")
//  currentCoinMathCalcLi.classList = "list-group-item math-item"

// currentCoinDataListUl.appendChild(currentCoinMathCalcLi)

//* check that api fetch works then add these
//  var currentCoinSymbolLi = document.createElement("li")
//  currentCoinSymbolLi.classList = "list-group-item symbol-item"
//  currentCoinDataListUl.appendChild(currentCoinSymbolLi)

//  var currentCoinRankLi = document.createElement("li")
//  currentCoinDataListUl.appendChild(currentCoinRankLi)
//  currentCoinRankLi.classList = "list-group-item rank-item"
//  currentCoinRankLi.textContent = "rank: " + rank

// var currentCoinPriceLi = document.createElement("li")
//  currentCoinDataListUl.appendChild(currentCoinPriceLi)
//  currentCoinPriceLi.classList = "list-group-item price-item"


// var currentCoinPercentLi = document.createElement("li")
// currentCoinDataListUl.appendChild(currentCoinPercentLi)
// currentCoinPercentLi.classList = "list-group-item percent-item"


// var currentCoinHiLi = document.createElement("li")
//  currentCoinDataListUl.appendChild(currentCoinHiLi)
//  currentCoinHiLi.classList = "list-group-item hi-item"

//  var currentCoinLowLi = document.createElement("li")
//  currentCoinDataListUl.appendChild(currentCoinLowLi)
//  currentCoinLowCalcLi.classList = "list-group-item Low-item"




// // /***   COINCAP API FETCH  *****/

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


            var rank = data.data[i].rank

            var currentCoinRankLi = document.createElement("li")
            currentCoinDataListUl.appendChild(currentCoinRankLi)
            currentCoinRankLi.classList = "list-group-item rank-item"
            currentCoinRankLi.textContent = "rank: " + rank


            var currentCoinPriceLi = document.createElement("li")
            currentCoinDataListUl.appendChild(currentCoinPriceLi)
            currentCoinPriceLi.classList = "list-group-item price-item"


            // //    var today = data.data.timestamp
            // //     var date = new Date(today * 1000);
            // //        var dateCoin = date.textContent = (moment().format("MMMM Do YYYY, h:mm:ss a"));
            // //         console.log(dateCoin);

            //this Var will need to use in 2nd Fetch API
            //hiLowCoinArr defined globally
            // (2nd fetch gets us the hi & lo data pts)
            hiLowCoinArr.push(data.data[i].symbol)
            console.log(hiLowCoinArr);
          };

          //var for inserting/calling 2nd Fetch Call (hiLowCall)
          var symbolsForApi = hiLowCoinArr.join(" ").replace(/\s/g, ',');
          console.log(symbolsForApi)

          //* Set timeout for  2nd Fetch Call hiLowCall(), otherwise  2nd fetch runs too soon & data comes back null/undefined (these are async)
          setTimeout(function () {
            hiLowCall(symbolsForApi);
          }, 1000)
        })
    })
}
// getCoinData()


//Second Fetch Call: gets us the hi & low data pts
function hiLowCall(symbolsForApi) {
  var hiLowUrl = "https://coinlib.io/api/v1/coin?key=c06378ec9fc1b93c&symbol=" + symbolsForApi + "";
  //too confirm hiLowCall is formated properly:
  console.log(hiLowUrl);

  //
  fetch(hiLowUrl)
    .then(function (response) {
      response.json()
        .then(function (data) {
          //console.log as check then display in main card
          console.log(data);

          for (var i = 0; i < data.coins.length; i++) {
            //name & symbol just to confirm that we are pulling data from the same coins as from the 1st call
            console.log(data.coins[i].name);
            console.log(data.coins[i].symbol);
            //need these 2 data points for our Coin Cards
            console.log(data.coins[i].high_24h);
            console.log(data.coins[i].low_24h);

            var hi = data.coins[i].high_24h
            var currentCoinHiLi = document.createElement("li")
            currentCoinDataListUl.appendChild(currentCoinHiLi)
            currentCoinHiLi.classList = "list-group-item hi-item"


          }
        })
    })
}


var cripto = {};
//pull and validation input
var InputValue = document.querySelector("input").value;
var inputValidation = parseInt(function (InputValue) {
  if (InputValue == null || InputValue == "") {
    window.alert("Please Enter The amount")
  } else if (InputValue > 0) {
    return InputValue
  } else {
    window.alert("Please Enter a Correct Amount")
  }
});
//Math

//we would use  - data.data[i].priceUsd - from the first call for this
var Calculate = function (CrptoPrice) {
  cryptoAmount = InputValue / CrptoPrice;
  return cryptoAmount;
}


//create list element
// var createlist = function(criptoApi, cryptoAmount, criptoList) {
//         var criptoLi = $("<li>");
//         var criptoSpan = $("<span>").text(cryptoAmount);
//         var criptodata = $("<p>").text(criptoApi);

//         //append span and p to perant li

//         criptoLi.append(criptoSpan, criptodata)

//         // append to ul list on the page

//         $("#list-" + criptoList).append(criptoLi)


// save function
var savecripto = function () {
  localStorage.setItem("tasks", JSON.stringify(cripto));
}
// modal was triggered
$("#input-box").on("show.bs.modal", function () {
  // clear values
  $("#inputDescriptin").val("");
});

// modal is fully visible
$("#input-box").on("shown.bs.modal", function () {
  // highlight textarea
  $("#input-box").trigger("focus");
});

// //activate the button
// $("#myBtn").on("click", function() {
//     var vinput = inputValidation();
//      if (vinput) {
//     //     for (i = 0; i < 10; i++) {
//     //         var criptoAmont = Calculate(criptoPrice)
//     //         createlist(criptoApi, criptoAmont, criptoList)
//     //         savecripto();
//     //     };
// console.log("clicked")
//  };
//     // getCoinData()
// });


// To Test Btn functionality
$("#myBtn").click(function () {
  //   alert( "Handler for .click() called." );
  console.log("testBtn")
  getCoinData()
});

