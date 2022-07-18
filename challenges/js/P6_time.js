console.log("Fichier P6_time.js importé ✅");

let btn = document.getElementById("btn");
let alert = document.getElementById("alert");
let input, tmp, sec, min, hour, day, mon, year;
sec = min = hour = day = mon = year = 0;

document.getElementById("input").addEventListener("input", function() {
    checkInput();
});

btn.addEventListener("click", function() {
    sec = checkTemps(input, 60);
    min = checkTemps(tmp, 60);
    hour = checkTemps(tmp, 24);
    day = checkTemps(tmp, 30);
    mon = checkTemps(tmp, 12);
    year = tmp;
    setCompteur();
});

function checkTemps (temps, val) {
    tmp = Math.floor(temps/val);
    if(temps % val != 0) {
        return (temps % val);
    } else {
        return 0;
    }
}s

function setCompteur () {
    document.getElementById("seconds").textContent = sec;
    if(sec < 2) { document.getElementById("label_sec").textContent = "seconde" } else { document.getElementById("label_sec").textContent = "secondes" }
    document.getElementById("minutes").textContent = min;
    if(min < 2) { document.getElementById("label_min").textContent = "minute" } else { document.getElementById("label_min").textContent = "minutes" }
    document.getElementById("hours").textContent = hour;
    if(hour < 2) { document.getElementById("label_hour").textContent = "heure" } else { document.getElementById("label_hour").textContent = "heures" }
    document.getElementById("days").textContent = day;
    if(day < 2) { document.getElementById("label_day").textContent = "jour" } else { document.getElementById("label_day").textContent = "jours" }
    document.getElementById("months").textContent = mon;
    document.getElementById("years").textContent = year;
    if(year < 2) { document.getElementById("label_year").textContent = "année" } else { document.getElementById("label_year").textContent = "années" }
}

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