console.log("Fichier L2_moment.js importé ✅");

document.getElementById("format").addEventListener("click", function () {

    // input
    let input = document.getElementById("input").value;
    console.log(document.getElementById("input").value);
    let res_1 = moment(input, 'YYYY-MM-DD').format('DD MMMM YYYY');
    let res_2 = moment(input, 'YYYY-MM-DD').fromNow();
    document.getElementById('res_input').textContent = res_1 + ", " + res_2;

});

// temps réel
document.getElementById("res_reel").textContent = moment().format('LLL:ss');

// date
let date_val = document.getElementById('date_val').textContent;
let date_res = moment(date_val, 'DD.MM.YYYY').format('DD MMMM YYYY');
document.getElementById('date_res').textContent = date_res;

// date + heure
let hour_val = document.getElementById('hour_val').textContent;
let hour_res = moment(hour_val, 'DD.MM.YYYY HH:mm').format('DD MMMM YYYY HH:mm');
document.getElementById('hour_res').textContent = hour_res;

// il y a 23 ans
let ago_date = document.getElementById("ago_val").textContent;
let ago_res = moment(ago_date,'DD.MM.YYYY').fromNow();
document.getElementById("ago_res").textContent = ago_res;