console.log("Fichier N9_valeur-champ.js importé ✅");


// SECTION 1
document.getElementById("button1").onclick = function() {displayValue()};

function displayValue() {
    let input = document.getElementById("input1");
    if(input.value.length == 0) {
        document.getElementById("message1").textContent = "Le champ est vide";
    } else {
        document.getElementById("message1").textContent = "Le champ n'est pas vide";
    }
    console.log("La valeur est : " + input.value);
    console.log("La longueur est : " + input.value.length);
}

// SECTION 2

document.getElementById("button2").onclick = function() {transfertValue()};

function transfertValue() {
    let input = document.getElementById("min");
    if(input.value.length == 0) {
        document.getElementById("message2").textContent = "Veuillez renseigner la première valeur !";
    } else {
        document.getElementById("message2").textContent = "";
    }
    document.getElementById("max").value = input.value;
}

// SECTION 3

let tab = [];
document.getElementById("button3").onclick = function() {addValue()};

function addValue() {
    let input = document.getElementById("input3");
    if(input.value.length == 0) {
        document.getElementById("message3").textContent = "Veuillez renseigner le champ !";
    } else {
        document.getElementById("message3").textContent = "";
        tab.push(input.value);
        console.log("Le tableau contient " + tab.length + " élément(s).");
        let nbCara = 0;
        for(let i=0; i < tab.length; i++) {
            nbCara += tab[i].length;
        }
        console.log("Le nombre de caractères dans le tableau est de : " + nbCara);
        console.log("Rangement du tableau en cours !");
        tab.sort();
        console.log("Le tableau : " + tab);
    }
}