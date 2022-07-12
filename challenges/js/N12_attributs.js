console.log("Fichier N12_attributs.js importé ✅");

document.getElementById("AttrRemove").onclick = function() {
    document.getElementById("input").removeAttribute("disabled")
};

document.getElementById("AttrAdd").onclick = function() {
    document.getElementById("input").setAttribute("placeholder", "Coucou");
};