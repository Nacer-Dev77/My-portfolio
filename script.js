// Menu burger
// Sélection de l'élément burger
function toggleMenu() {
    document.querySelector('.menu-links').classList.toggle('active');
}


// Sélection des éléments
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// Ouvrir la modale
btn.onclick = function() {
    modal.style.display = "block";
}

// Fermer la modale en cliquant sur "X"
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fermer en cliquant en dehors de la modale
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


