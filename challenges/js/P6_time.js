console.log("Fichier P6_time.js importé ✅");

let btn = document.getElementById("btn");
let alert = document.getElementById("alert");
let input, tmp, sec, min, hour, day, mon, year;
sec = min = hour = day = mon = year = 0;

document.getElementById("input").addEventListener("input", function() {
    checkInput();
});

btn.addEventListener("click", function() {
    sec = input % 60;
    tmp = Math.floor(input / 60);
    min = tmp % 60;
    tmp = Math.floor(min / 60);
    hour = tmp % 24;
    tmp = Math.floor(hour / 24)
    console.log( sec +" ; " + min + " ; " + hour);
});

function checkInput() {
    input = parseInt(document.getElementById("input").value);
    if(isNaN(input)) {
        alert.textContent = "La valeur doit être un nombre.";
        btn.setAttribute("disabled", "");
    } else if(input < 0) {
        alert.textContent = "La valeur doit être positive.";
        btn.setAttribute("disabled", "");
    } else {
        alert.textContent = "";
        btn.removeAttribute("disabled", "");
    }
}