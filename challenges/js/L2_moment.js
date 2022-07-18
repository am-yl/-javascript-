console.log("Fichier L2_moment.js importé ✅");

document.getElementById("format").addEventListener("click", function () {

    document.getElementById("res_reel").textContent = moment().format('LLL:s');
});
