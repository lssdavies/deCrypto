var cripto = {};
//pull and validation input
var InputValue = document.querySelector("input").value;
var inputValidation = parseInt(function(InputValue) {
    if (InputValue == null || InputValue == "") {
        window.alert("Please Enter The amount")
    } else if (InputValue > 0) {
        return InputValue
    } else {
        window.alert("Please Enter a Correct Amount")
    }
});
//Math

var Calculate = function(CrptoPrice) {
        cryptoAmount = InputValue / CrptoPrice;
        return cryptoAmount;
    }
    //create list element

var createlist = function(criptoApi, cryptoAmount, criptoList) {
        var criptoLi = $("<li>");
        var criptoSpan = $("<span>").text(cryptoAmount);
        var criptodata = $("<p>").text(criptoApi);

        //append span and p to perant li

        criptoLi.append(criptoSpan, criptodata)

        // append to ul list on the page

        $("#list-" + criptoList).append(criptoLi)
    }
    // save function
var savecripto = function() {
        localStorage.setItem("tasks", JSON.stringify(cripto));
    }
    // modal was triggered
$("#input-box").on("show.bs.modal", function() {
    // clear values
    $("#inputDescriptin").val("");
});

// modal is fully visible
$("#input-box").on("shown.bs.modal", function() {
    // highlight textarea
    $("#input-box").trigger("focus");
});

//activate the button
$(".button").on("click", function() {
            var vinput = inputValidation();
            if (vinput) {
                for (i = 0; i < 10; i++) {
                    var criptoAmont = Calculate(criptoPrice)
                    createlist(criptoApi, criptoAmont, criptoList)
                    savecripto();
                };

            };
        };