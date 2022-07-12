console.log("Fichier P2_disco.js importé ✅");

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
let isDisco = false;
let inter;

function DiscoGo() {
    document.getElementById("boowomp").pause();
    document.getElementById("boowomp").currentTime = 0;
    let randNum = Math.floor(Math.random() * colors.length);
    let newColor = colors[randNum];
    console.log(newColor);
    if(newColor == document.body.style.backgroundColor) {
        DiscoGo();
    } else {
        document.getElementById("boowomp").play();
        document.body.style.backgroundColor = newColor;
    }
}

document.getElementById("discoGo").onclick = function() { DiscoGo() };

document.getElementById("discoReset").onclick = function() {
    clearInterval(inter);
    isDisco = false;
    document.body.style.backgroundColor = "white";
    document.getElementById("boowomp").pause();
    document.getElementById("boowomp").currentTime = 0;
    document.getElementById("boris").pause();
    document.getElementById("boris").currentTime = 0;
};

document.getElementById("discoAuto").addEventListener("click", function() {
    if(!isDisco) {
        isDisco = true;
        inter = setInterval(DiscoGo, 50);
        document.getElementById("boris").play();
    } else {
        isDisco = false;
        clearInterval(inter);
        document.getElementById("boris").pause();
    }
});