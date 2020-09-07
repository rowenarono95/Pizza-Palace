$(document).ready(function () {
    $("#text-center").submit(function (event) {
        function flavor() {
            var pizzaFlavour = document.getElementById("flavor").value;
            return parseInt(pizzaFlavour);
        }