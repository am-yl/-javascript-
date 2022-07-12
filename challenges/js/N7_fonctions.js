console.log("Fichier N7_fonctions.js importé ✅");

function checkNumber(num) {
    console.log("Fonction checkNumber lancée avec la valeur " + num + " : ");
    if(num > 0) {
        console.log("Le nombre est positif");
    } else if(num == 0) {
        console.log("C'est égal à zero :)");
    } else if (num < 0) {
        console.log("Le nombre est négatif")
    } else if (num == undefined) {
        console.log("Le nombre n'est pas défini");
    }
}

let pos = 25;
let neg = -5;
let zero = 0;
let ud;

checkNumber(pos);
checkNumber(neg);
checkNumber(zero);
checkNumber(ud);