console.log("Fichier N10_html-content.js importé ✅");

// Recup
document.getElementById("butRecup").onclick = function() { Recup() };

function Recup() {
    console.log("Le titre : " + document.getElementById("RecupTitle").innerHTML);
    console.log("La description : " + document.getElementById("RecupDesc").innerHTML);
    console.log("Le contennu : " + document.getElementById("RecupContent").innerHTML);
}

// Redef
document.getElementById("butRedef").onclick = function() { Redef() };

function Redef() {
    document.getElementById("RedefTitle").innerHTML = "Le nouveau titre";
    document.getElementById("RedefDesc").innerHTML = "La description redéfinie";
    document.getElementById("RedefContent").innerHTML = "<p>Redéfini</p>";
}