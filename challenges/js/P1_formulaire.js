console.log("Fichier P1_formulaire.js importé ✅");

let isprenom, isnom, isemail, istel, isobjet, istextarea;
isprenom = isnom = isemail = istel = isobjet = istextarea = false;

document.getElementById("prenom").addEventListener("input", function() {
    isprenom = checkInputs("prenom");
    checkBtn();
});

document.getElementById("nom").addEventListener("input", function() {
    isnom = checkInputs("nom");
    checkBtn();
});

document.getElementById("email").addEventListener("input", function() {
    isemail = checkInputs("email");
    checkBtn();
});

document.getElementById("tel").addEventListener("input", function() {
    istel = checkInputs("tel");
    checkBtn();
});

document.getElementById("objet").addEventListener("input", function() {
    isobjet = checkInputs("objet");
    checkBtn();
});

document.getElementById("textarea").addEventListener("input", function() {
    istextarea = checkInputs("textarea");
    checkBtn();
});

function checkInputs(id) {
    if(document.getElementById(id).value) {
        document.getElementById(id).classList.remove("error");
        return true;
    } else {
        document.getElementById(id).classList.add("error");
        return false;
    }
}

function checkBtn() {
    if(isprenom && isnom && isemail && istel && isobjet && istextarea) {
        document.getElementById("btn").removeAttribute("disabled", "");
    } else {
        document.getElementById("btn").setAttribute("disabled", "");
    }
}

let load = document.createElement("img");
load.src = "https://askcodez.com/images3/157446935584697.gif";
load.style.height = "25px";

document.getElementById("btn").onclick = function() {
    document.getElementById("btn").innerHTML = "";
    document.getElementById("btn").appendChild(load);
    setTimeout(function() {
        document.getElementById("formulaire").textContent = "Votre message a bien été envoyé !";
    }, 1000);
};