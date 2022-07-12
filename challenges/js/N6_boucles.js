console.log("Fichier N6_boucles.js importé ✅");

let fruits = ["goyave", "papaye", "mangue", "banane", "pastèque"];

console.log("Boucle for sur chaque élément du tableau : ")
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("Boucle while d'ajout : ")
while (fruits.length < 50 ) {
    fruits.push("goyave");
    console.log("Ajout d'un élément")
}

console.log("Longueur du tableau : " + fruits.length);