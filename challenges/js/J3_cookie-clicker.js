console.log("Fichier J3_cookie-clicker.js importé ✅");

let countCookies = 0;
let prices = ['50','150','500'];

document.getElementById('cookie').addEventListener("click", function() {
    addCookies(1);
});

document.getElementsByClassName('store__products_product').addEventListener("click", function() {

});

function addCookies(nb) {
    countCookies += nb;
    document.getElementById('nbCookie').textContent = Math.floor(countCookies);
}

function buyProduct(product) {

}