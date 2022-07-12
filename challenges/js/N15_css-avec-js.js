console.log("Fichier N15_css-avec-js.js importé ✅");

document.getElementById("buttonRed").onclick = function() {
    if(document.getElementById("box1").style.backgroundColor == "red") {
        document.getElementById("box1").style.backgroundColor = null;
    } else {
        document.getElementById("box1").style.backgroundColor = "red";
    }
};

document.getElementById("buttonHalf").onclick = function() {
    if(document.getElementById("box1").style.width == "50%") {
        document.getElementById("box1").style.width = "100%";
    } else {
        document.getElementById("box1").style.width = "50%";
    }
};

document.getElementById("buttonRadius").onclick = function() {
    if(document.getElementById("box1").style.borderRadius == "50px") {
        document.getElementById("box1").style.borderRadius = "0px";
    } else {
        document.getElementById("box1").style.borderRadius = "50px";
    }
};

document.getElementById("buttonGone").onclick = function() {
    if(document.getElementById("box1").style.opacity == "1") {
        document.getElementById("box1").style.opacity = "0";
    } else {
        document.getElementById("box1").style.opacity = "1";
    }
};

// structure du tableau

document.getElementById("TwoCol").onclick = function() {
    if(document.getElementById("box4").style.display == "none") {
        document.getElementById("alert").textContent = "Vous êtes déjà sur 2 colonnes !"
    } else {
        document.getElementById("box4").style.display = "none";
        document.getElementById("box5").style.display = "none";
        document.getElementById("box6").style.display = "none";
    }
}

document.getElementById("FourCol").onclick = function() {
    if(document.getElementById("box5").style.display == "block" && document.getElementById("box6").style.display == "none") {
        document.getElementById("alert").textContent = "Vous êtes déjà sur 4 colonnes !"
    } else {
        document.getElementById("box4").style.display = "block";
        document.getElementById("box5").style.display = "block";
        document.getElementById("box6").style.display = "none";
    }
}