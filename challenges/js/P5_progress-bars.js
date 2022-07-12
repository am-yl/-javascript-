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

// PROGRESS BAR
let finished;
let toFinish
let btn = document.getElementById("btnProgress");
document.getElementById("finishedEle").addEventListener("input", function() { checkValues(); });
document.getElementById("numberEle").addEventListener("input", function() { checkValues(); });

btn.addEventListener("click", function() { blocProgress(); });

function checkValues() {
    finished = parseInt(document.getElementById("finishedEle").value);
    toFinish = parseInt(document.getElementById("numberEle").value);
    let alert = document.getElementById("alert");
    if(isNaN(finished) || isNaN(toFinish)) {
        alert.textContent = "Les deux valeurs doivent être renseignées !";
        btn.setAttribute("disabled", "");
    } else if(finished > toFinish){
        alert.textContent = "Le nombre d'éléments complétés ne peut pas être supérieur au nombre d'élément total !";
        btn.setAttribute("disabled", "");
    } else if(finished < 0 || toFinish < 0) {
        alert.textContent = "Les 2 valeurs doivent être positives!";
        btn.setAttribute("disabled", "");
    } else {
        alert.textContent = "";
        btn.removeAttribute("disabled", "");
    }
}

function blocProgress() {
    for(let i = 0; i < 20; i++) {
        document.getElementsByClassName("progressbar__block")[i].classList.remove("filled");
    }
    finished = parseInt(document.getElementById("finishedEle").value);
    toFinish = parseInt(document.getElementById("numberEle").value);
    let percent = finished/toFinish;
    let progress = Math.round(percent * 20);
    console.log(progress);
    for(let i = 0; i < progress; i++) {
        document.getElementsByClassName("progressbar__block")[i].classList.add("filled");
    }
    document.getElementById("progressValue").textContent = Math.round(percent*100)+"%";
}