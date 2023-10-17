function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const CloseTrigger = document.querySelector(".close")
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal //
CloseTrigger.addEventListener("click", CloseModal);

function CloseModal() {
  modalbg.style.display = "none";
}

// Condition utilisation required //

document.addEventListener('DOMContentLoaded', function () {
  const checkbox1 = document.getElementById('checkbox1');
  const form = document.forms['reserve'];

  form.addEventListener('submit', function (event) {
    if (!checkbox1.checked) {
      alert("Veuillez lire et accepter les conditions d'utilisation.");
      event.preventDefault(); // Empêche l'envoi du formulaire
    }
  });
});

