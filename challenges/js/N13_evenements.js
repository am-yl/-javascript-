console.log("Fichier N13_evenements.js importé ✅");

document.getElementById("input1").addEventListener("click", function() {
    document.getElementById("message1").textContent = "Le champ est sélectionné";
});

document.getElementById("input1").addEventListener("keypress", function() {
    document.getElementById("message1").textContent = "On écrit dans le champ";
});

document.getElementById("box").addEventListener("mouseenter", function() {
    document.getElementById("message2").textContent = "La souris est entrée!";
});

document.getElementById("box").addEventListener("mouseleave", function() {
    document.getElementById("message2").textContent = "Elle est partie :c";
});