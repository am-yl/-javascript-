console.log("Fichier P4_section-dynamique.js importé ✅");

let dog = document.getElementById("button_dog");
let business = document.getElementById("button_business");
let motorcycle = document.getElementById("button_motorcycle");
let beach = document.getElementById("button_beach");

let img = document.getElementById("img");
let title = document.getElementById("title");
let description = document.getElementById("description");

let infos = [
                ["Ceci est un canidé mignon", "Les créatures canines ont 4 pattes et une jolie bouille, du moins pour la plupart.", "https://javascript.melvin-lemoine.me/assets/images/challenges/P4_section-dynamique/dog.jpg"],
                ["Mon associé et moi on fait masse de thune", "Parce qu'ici il n'y a que des winners, on génère masse pognon et on se met bien.", "https://javascript.melvin-lemoine.me/assets/images/challenges/P4_section-dynamique/business.jpg"],
                ["Une belle bécane comme on dit", "Ca coute moins cher en entretien, en carburant, en tout en fait. Par contre s'il pleut ou qu'il faut transporter des choses et/ou des gens t'es mal.", "https://javascript.melvin-lemoine.me/assets/images/challenges/P4_section-dynamique/motorcycle.jpg"],
                ["Une belle plage pour oublier que le JS c'est facile mais c'est dur au début", "Un beau soleil, une bonne eau transparente, c'est à dire ni chaude ni froide, qui rafraichie sans avoir froid. Et du sable fin.", "https://javascript.melvin-lemoine.me/assets/images/challenges/P4_section-dynamique/beach.jpg"]
            ];

dog.addEventListener("click", function() {
    setMode(infos[0]);
    dog.classList.add('is-success');
    business.classList.remove('is-success');
    motorcycle.classList.remove('is-success');
    beach.classList.remove('is-success');
});

business.addEventListener("click", function() {
    setMode(infos[1]);
    dog.classList.remove('is-success');
    business.classList.add('is-success');
    motorcycle.classList.remove('is-success');
    beach.classList.remove('is-success');
});

motorcycle.addEventListener("click", function() {
    setMode(infos[2]);
    dog.classList.remove('is-success');
    business.classList.remove('is-success');
    motorcycle.classList.add('is-success');
    beach.classList.remove('is-success');
});

beach.addEventListener("click", function() {
    setMode(infos[3]);
    dog.classList.remove('is-success');
    business.classList.remove('is-success');
    motorcycle.classList.remove('is-success');
    beach.classList.add('is-success');
});

function setMode(tab) {
    title.textContent = tab[0];
    description.textContent = tab[1];
    img.style.backgroundImage = "url('" +tab[2]+"')";
}