console.log("Fichier P5_progress-bars.js importé ✅");

document.getElementById("updateBar").addEventListener("click", function() {
    let input = document.getElementById("newPercent");
    let percent = parseInt(input.value);
    console.log(percent);
    if(percent <= 100 && percent >= 0) {
        document.getElementById("percentBar").style.width = percent+"%";
        document.getElementById("percentValue").textContent = percent+"%";
    }
});


