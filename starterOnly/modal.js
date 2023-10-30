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

window.onclick = function (event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";

  }
}


//     // Validation du bouton radio
//     const location = document.getElementsByName('location');
//     let isChecked = false;
//     for (let i = 0; i < location.length; i++) {
//       if (location[i].checked) {
//         isChecked = true;
//         break;
//       }
//     }
//     if (!isChecked) {
//       isValid = false;
//       if (error) {
//         form.removeChild(error);
//       }
//       error = document.createElement('p');
//       error.classList.add('error-message');
//       error.textContent = 'Veuillez sélectionner une ville.';
//       form.insertBefore(error, form.firstChild);
//     }

//     return isValid;
//   }

//   form.addEventListener('submit', function (event) {
//     if (!checkbox1.checked || !validate()) {
//       event.preventDefault(); // Empêche l'envoi du formulaire
//     }
//   });
// });

function validate(event) {
  if (event) {
    event.preventDefault(); // Empêche le comportement par défaut de l'événement "submit"
  }
  const first = document.forms["reserve"]["first"].value;
  const last = document.forms["reserve"]["last"].value;
  const email = document.forms["reserve"]["email"].value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const birthdate = document.forms["reserve"]["birthdate"].value;
  const quantity = document.forms["reserve"]["quantity"].value;
  const location = document.forms["reserve"]["location"];
  const radioCheck = Array.from(location).some(input => input.checked);
  const checkbox = document.forms["reserve"]["checkbox1"].checked;

  var error = false;

  if (first.length < 2) {
    document.getElementById("first").parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    document.getElementById("first").parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    document.getElementById("first").parentNode.removeAttribute("data-error");
    document.getElementById("first").parentNode.removeAttribute("data-error-visible", false);
    error = false;
  }
  if (last.length < 2) {
    document.getElementById("last").parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    document.getElementById("last").parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    document.getElementById("last").parentNode.removeAttribute("data-error");
    document.getElementById("last").parentNode.removeAttribute("data-error-visible", false);
    error = false;
  }
  if (!emailRegex.test(email)) {
    document.getElementById("email").parentNode.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide");
    document.getElementById("email").parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    document.getElementById("email").parentNode.removeAttribute("data-error");
    document.getElementById("email").parentNode.removeAttribute("data-error-visible", false);
    error = false;
  }
  if (birthdate.length != 10) {
    document.getElementById("birthdate").parentNode.setAttribute("data-error", "Veuillez entrer votre date de naissance");
    document.getElementById("birthdate").parentNode.setAttribute("data-error-visible", true);
    error = true;
  }
  else {
    document.getElementById("birthdate").parentNode.removeAttribute("data-error");
    document.getElementById("birthdate").parentNode.removeAttribute("data-error-visible", false);
    error = false;
  }
  if (quantity.trim() === "") {
    document.getElementById("quantity").parentNode.setAttribute("data-error", "Veuillez entrer le nombre de tournois GameOn auquel vous avez participé");
    document.getElementById("quantity").parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    document.getElementById("quantity").parentNode.removeAttribute("data-error");
    document.getElementById("quantity").parentNode.removeAttribute("data-error-visible", false);
    error = false;
  }

  if (!radioCheck) {
    document.getElementById("location1").parentNode.setAttribute("data-error", "Veuillez choisir une ville");
    document.getElementById("location1").parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    document.getElementById("location1").parentNode.removeAttribute("data-error");
    document.getElementById("location1").parentNode.removeAttribute("data-error-visible", false);
    error = false;
  }

  if (!checkbox) {
    document.getElementById("checkbox1").parentNode.setAttribute("data-error", "Veuillez acceptez les conditions d'utilisation.");
    document.getElementById("checkbox1").parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    document.getElementById("checkbox1").parentNode.removeAttribute("data-error");
    document.getElementById("checkbox1").parentNode.removeAttribute("data-error-visible", false);
    error = false;
  }

  if (error = false) {
    alert('Sheeesh');
  }
}


const form = document.forms["reserve"];
if (form) {
  form.addEventListener("submit", validate); // Ajoute l'événement "submit" au formulaire
}
