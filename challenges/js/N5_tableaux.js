console.log("Fichier N5_tableaux.js importé ✅");

let fruits = ["goyave", "papaye", "mangue", "banane", "pastèque"];

console.log(fruits);
console.log("La première valeur est : " + fruits[0]);
console.log("Longueur du tableau avant l'ajout : " + fruits.length);

fruits.push("pomme");

if(fruits[fruits.lengh-1] == "pomme") {
    console.log("Pomme a été ajouté au tableau !");
}

console.log("Longueur du tableau avant l'ajout : " + fruits.length);
console.log(fruits);
console.log("Tableau rangé !");
console.log(fruits.sort());
