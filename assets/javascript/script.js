var dataReturn = document.querySelector("#dashboard");





































// // //  VARIABLES ***/
// var coinLibKey = "c06378ec9fc1b93c"
// var symbols = ""
// var today = ""
// hiLowCoinArr = []

// /***   COINCAP API FETCH  *****/
// var getCoinData = function () {
//   var apiUrl = "https://api.coincap.io/v2/assets?limit=6";

//   fetch(apiUrl)
//     .then(function (response) {
//       return response.json()
//         .then(function (data) {
//           console.log(data);

//           for (var i = 0; i < data.data.length; i++) {
//             console.log(data.data[i].name);
//             console.log(data.data[i].symbol);
//             console.log(data.data[i].rank);
//             console.log(data.data[i].priceUsd);
//             console.log(data.data[i].changePercent24Hr);


//             var today = data.data.timestamp
//             var date = new Date(today * 1000);
//             var dateCoin = date.textContent = (moment().format("MMMM Do YYYY, h:mm:ss a"));
//             console.log(dateCoin);

//             //   // //OTHER ITEMS WE DIDN'T SPECIFY:
//             //   // //average price for 24hrs
//             //   // console.log(data.data[i].vwap24Hr);
//             //   // //market cap
//             //   // console.log(data.data[i].marketCapUsd);

//             hiLowCoinArr.push(data.data[i].symbol)
//             console.log(hiLowCoinArr);


//           };
//           var symbolsForApi = hiLowCoinArr.join(" ").replace(/\s/g, ',');
//           console.log(symbolsForApi)

//           setTimeout(function () {
//             hiLowCall(symbolsForApi);
//           }, 1000)


//         })
//     })
// }
// getCoinData()
// function hiLowCall(symbolsForApi) {
//   var hiLowUrl = "https://coinlib.io/api/v1/coin?key=c06378ec9fc1b93c&symbol=" + symbolsForApi + "";

//   console.log(hiLowUrl);


//   fetch(hiLowUrl)
//     .then(function (response) {
//       response.json()
//         .then(function (data) {
//           //console.log as check then display in main card
//           console.log(data);

//           for (var i = 0; i < data.coins.length; i++) {
//           console.log(data.coins[i].name);
//           console.log(data.coins[i].symbol);
//           console.log(data.coins[i].high_24h);
//           console.log(data.coins[i].low_24h);
//           }
//         })
//     })

//   }
// var cripto = {};
// //pull and validation input
// var InputValue = document.querySelector("input").value;
// var inputValidation = parseInt(function(InputValue) {
//     if (InputValue == null || InputValue == "") {
//         window.alert("Please Enter The amount")
//     } else if (InputValue > 0) {
//         return InputValue
//     } else {
//         window.alert("Please Enter a Correct Amount")
//     }
// });
// //Math

// var Calculate = function(CrptoPrice) {
//         cryptoAmount = InputValue / CrptoPrice;
//         return cryptoAmount;
//     }
//     //create list element

// var createlist = function(criptoApi, cryptoAmount, criptoList) {
//         var criptoLi = $("<li>");
//         var criptoSpan = $("<span>").text(cryptoAmount);
//         var criptodata = $("<p>").text(criptoApi);

//         //append span and p to perant li

//         criptoLi.append(criptoSpan, criptodata)

//         // append to ul list on the page

//         $("#list-" + criptoList).append(criptoLi)
//     }
//     // save function
// var savecripto = function() {
//         localStorage.setItem("tasks", JSON.stringify(cripto));
//     }
//     // modal was triggered
// $("#input-box").on("show.bs.modal", function() {
//     // clear values
//     $("#inputDescriptin").val("");
// });

// // modal is fully visible
// $("#input-box").on("shown.bs.modal", function() {
//     // highlight textarea
//     $("#input-box").trigger("focus");
// });

// //activate the button
// $("#myBtn").on("click", function() {
//     var vinput = inputValidation();
//     if (vinput) {
//         for (i = 0; i < 10; i++) {
//             var criptoAmont = Calculate(criptoPrice)
//             createlist(criptoApi, criptoAmont, criptoList)
//             savecripto();
//         };

//     };
// });