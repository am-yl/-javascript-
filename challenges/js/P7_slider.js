console.log("Fichier P7_slider.js importé ✅");

let slider = document.getElementById("slider");
let dots = document.getElementById("dots");
let larr = document.getElementById("larr");
let rarr = document.getElementById("rarr");
let currentSlide = 1;

rarr.addEventListener("click", function() {
    if(currentSlide == slider.childElementCount-1) {
        rarr.style.display="none";
    } else if (currentSlide > 0) {
        larr.style.display = "block";
    }
    let rtrans = "translate("+currentSlide*-100+"%)";
    slider.style.transform = rtrans;
    dots.children[currentSlide-1].classList.remove("is-active");
    dots.children[currentSlide].classList.add("is-active");
    currentSlide += 1;
});

larr.addEventListener("click", function() {
    if(currentSlide == slider.childElementCount-1) {
        rarr.style.display="block";
    } else if (currentSlide <= 2) {
        larr.style.display = "none";
    }
    currentSlide -= 1;
    let ltrans = "translate("+(currentSlide-1)*-100+"%)";
    slider.style.transform = ltrans;
    dots.children[currentSlide].classList.remove("is-active");
    dots.children[currentSlide-1].classList.add("is-active");
});

document.getElementById("dot-1").addEventListener("click", function() {
    if(!document.getElementById("dot-1").classList.contains("is-active")) {
        dots.children[currentSlide-1].classList.remove("is-active");
        slider.style.transform = "translate(0%)";
        currentSlide = 1;
        dots.children[currentSlide-1].classList.add("is-active");
        larr.style.display = "none";
        rarr.style.display = "block";
    }
});

document.getElementById("dot-2").addEventListener("click", function() {
    if(!document.getElementById("dot-2").classList.contains("is-active")) {
        dots.children[currentSlide-1].classList.remove("is-active");
        slider.style.transform = "translate(-100%)";
        currentSlide = 2;
        dots.children[currentSlide-1].classList.add("is-active");
        larr.style.display = "block";
        rarr.style.display = "block";
    }
});

document.getElementById("dot-3").addEventListener("click", function() {
    if(!document.getElementById("dot-3").classList.contains("is-active")) {
        dots.children[currentSlide-1].classList.remove("is-active");
        slider.style.transform = "translate(-200%)";
        currentSlide = 3;
        dots.children[currentSlide-1].classList.add("is-active");
        larr.style.display = "block";
        rarr.style.display = "block";
    }
});

document.getElementById("dot-4").addEventListener("click", function() {
    if(!document.getElementById("dot-4").classList.contains("is-active")) {
        dots.children[currentSlide-1].classList.remove("is-active");
        slider.style.transform = "translate(-300%)";
        currentSlide = 4;
        dots.children[currentSlide-1].classList.add("is-active");
        larr.style.display = "block";
        rarr.style.display = "none";
    }
});