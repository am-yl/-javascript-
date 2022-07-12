console.log("Fichier N11_classes.js importé ✅");

document.getElementById("buttonBlue").onclick = function() {
    if(document.getElementById("box1").classList.contains("blue")) {
        document.getElementById("box1").classList.remove("blue");
        document.getElementById("buttonBlue").textContent = "Ajouter la classe .blue";
    } else {
        document.getElementById("box1").classList.add("blue");
        document.getElementById("buttonBlue").textContent = "Retirer la classe .blue";
    }
};

document.getElementById("buttonB").onclick = function() {
    if(document.getElementById("buttonB").classList.contains("is-active")) {
        document.getElementById("buttonB").classList.remove("is-active");
        document.getElementById("box2").classList.remove("blue");
    } else {
        if(document.getElementById("buttonG").classList.contains("is-active")) {
            document.getElementById("buttonG").classList.remove("is-active");
            document.getElementById("box2").classList.remove("green");
        }
        document.getElementById("box2").classList.add("blue");
        document.getElementById("buttonB").classList.add("is-active");
    }
};
document.getElementById("buttonG").onclick = function() {
    if(document.getElementById("buttonG").classList.contains("is-active")) {
        document.getElementById("buttonG").classList.remove("is-active");
        document.getElementById("box2").classList.remove("green");
    } else {
        if(document.getElementById("buttonB").classList.contains("is-active")) {
            document.getElementById("buttonB").classList.remove("is-active");
            document.getElementById("box2").classList.remove("blue");
        }
        document.getElementById("box2").classList.add("green");
        document.getElementById("buttonG").classList.add("is-active");
    }};
