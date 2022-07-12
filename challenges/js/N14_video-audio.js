console.log("Fichier N14_video-audio.js importé ✅");

// hover sur la vidéo
document.getElementById("vid1").addEventListener("mouseenter", function() {
    document.getElementById("vid1").play();
});
document.getElementById("vid1").addEventListener("mouseleave", function() {
    document.getElementById("vid1").pause();
});

// play pause
// document.getElementById("playButton1").addEventListener("click", function() {
//     document.getElementById("vid1").play();
// });
// document.getElementById("pauseButton1").addEventListener("click", function() {
//     document.getElementById("vid1").pause();
// });

// son
document.getElementById("muteButton1").addEventListener("click", function() {
    document.getElementById("vid1").volume = 0;
});
document.getElementById("upButton1").addEventListener("click", function() {
    document.getElementById("vid1").volume = 1;
});

// activer et désactiver les boutons
document.getElementById("enableButton").onclick = function() {
    document.getElementById("playpauseButton1").removeAttribute("disabled", '');
    document.getElementById("muteButton1").removeAttribute("disabled", '');
    document.getElementById("upButton1").removeAttribute("disabled", '');
    document.getElementById("disableButton").removeAttribute("disabled", '');
    document.getElementById("enableButton").setAttribute("disabled", '');
};

document.getElementById("disableButton").onclick = function() {
    document.getElementById("playpauseButton1").setAttribute("disabled", '');
    document.getElementById("muteButton1").setAttribute("disabled", '');
    document.getElementById("upButton1").setAttribute("disabled", '');
    document.getElementById("enableButton").removeAttribute("disabled", '');
    document.getElementById("disableButton").setAttribute("disabled", '');
};

// un seul bouton pour controler
document.getElementById("playpauseButton1").addEventListener("click", function() {
    if(document.getElementById("iconChange").classList.contains("fa-play")) {
        document.getElementById("iconChange").classList.add("fa-pause");
        document.getElementById("iconChange").classList.remove("fa-play");
        document.getElementById("iconName").textContent =  "Pause";
        document.getElementById("vid1").play();
    } else {
        document.getElementById("iconChange").classList.remove("fa-pause");
        document.getElementById("iconChange").classList.add("fa-play");
        document.getElementById("iconName").textContent = "Play";
        document.getElementById("vid1").pause();
    }
});


// play pause
// document.getElementById("playButton2").addEventListener("click", function() {
//     document.getElementById("audio2").play();
// });
// document.getElementById("pauseButton2").addEventListener("click", function() {
//     document.getElementById("audio2").pause();
// });

// un seul bouton pour controler
document.getElementById("playpauseButton2").addEventListener("click", function() {
    if(document.getElementById("iconChange2").classList.contains("fa-play")) {
        document.getElementById("iconChange2").classList.add("fa-pause");
        document.getElementById("iconChange2").classList.remove("fa-play");
        document.getElementById("iconName2").textContent =  "Pause";
        document.getElementById("audio2").play();
    } else {
        document.getElementById("iconChange2").classList.remove("fa-pause");
        document.getElementById("iconChange2").classList.add("fa-play");
        document.getElementById("iconName2").textContent = "Play";
        document.getElementById("audio2").pause();
    }
});

// son
document.getElementById("muteButton2").addEventListener("click", function() {
    document.getElementById("audio2").volume = 0;
});
document.getElementById("midButton2").addEventListener("click", function() {
    document.getElementById("audio2").volume = 0.5;
});
document.getElementById("upButton2").addEventListener("click", function() {
    document.getElementById("audio2").volume = 1;
});
document.getElementById("volumeButton2").addEventListener("click", function() {
    document.getElementById("volume").textContent = document.getElementById("audio2").volume*100;
});
