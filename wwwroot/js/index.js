$(document).ready(function () {

    var x = 0;
    var s = "";

    console.log("Hello Pluralsight");

    var theForm = $("#theForm");
    theForm.hide();

    try {
        var button = $('#buyButton');
        button.on("click", function () {
            console.log("Buying Item");
        });

        var productInfo = $(".product-props li");
        productInfo.on("click", function () {
            console.log("You clicked on " + $(this).text());
        });

        var $loginToggle = $("#loginToggle");
        var $popupForm = $(".popup-form");

        $loginToggle.on("click", function () {
            $popupForm.fadeToggle(1000);
        })

    } catch (ex) {
        console.log(ex);
    }

});

