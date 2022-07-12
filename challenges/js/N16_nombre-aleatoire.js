console.log("Fichier N16_nombre-aleatoire.js importé ✅");

let test = 1;
console.log(!test);

document.getElementById("min").addEventListener("input", function() {
    checkNumbers();
});

document.getElementById("max").addEventListener("input", function() {
    checkNumbers();
});

function checkNumbers() {
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    if(isNaN(min) || isNaN(max)) {
        document.getElementById("alert").textContent = "Les deux valeurs doivent être renseignées !";
        document.getElementById("buttonRandom").setAttribute("disabled", "");
    } else if (min >= max) {
        document.getElementById("alert").textContent = "Le minimum est supérieur ou égal au maximum :c";
        document.getElementById("buttonRandom").setAttribute("disabled", "");
    } else {
        document.getElementById("alert").textContent = "";
        document.getElementById("buttonRandom").removeAttribute("disabled", "");
    }}

document.getElementById("buttonRandom").onclick = function () {
    document.getElementById("res").value = Math.floor(Math.random() * (parseInt(document.getElementById("max").value)-parseInt(document.getElementById("min").value))) + parseInt(document.getElementById("min").value);
}