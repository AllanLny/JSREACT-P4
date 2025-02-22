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
const modalContent = document.querySelector(".content")
const modalBody = document.querySelector(".modal-body")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const CloseTrigger = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal
CloseTrigger.addEventListener("click", CloseModal);

function CloseModal() {
  modalbg.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modalbg) {
    modalbg.style.display = "none";
  }
}

// Fonction pour verifier chaque FormData et valider quand tout est bon 
function validate(event) {
  event.preventDefault();

  const form = document.forms["reserve"];
  const first = form["first"].value;
  const last = form["last"].value;
  const email = form["email"].value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const birthdate = form["birthdate"].value;
  const quantity = form["quantity"].value;
  const location = form["location"];
  const radioCheck = Array.from(location).some(input => input.checked);
  const checkbox = form["checkbox1"].checked;
  const txtValidation = document.querySelector('.validation-txt');
  const btnValidation = document.querySelector('.btn-submit.validation');


  let error = false;
  // Verification pour le prénom
  if (first.length < 2) {
    form["first"].parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    form["first"].parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    form["first"].parentNode.removeAttribute("data-error");
    form["first"].parentNode.removeAttribute("data-error-visible");
  }
  // Verification pour le nom
  if (last.length < 2) {
    form["last"].parentNode.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    form["last"].parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    form["last"].parentNode.removeAttribute("data-error");
    form["last"].parentNode.removeAttribute("data-error-visible");
  }
  // Verification de l'email
  if (!emailRegex.test(email)) {
    form["email"].parentNode.setAttribute("data-error", "Veuillez entrer une adresse e-mail valide");
    form["email"].parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    form["email"].parentNode.removeAttribute("data-error");
    form["email"].parentNode.removeAttribute("data-error-visible");
  }
  // Verification la date de naissance
  if (birthdate.length != 10) {
    form["birthdate"].parentNode.setAttribute("data-error", "Veuillez entrer votre date de naissance");
    form["birthdate"].parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    form["birthdate"].parentNode.removeAttribute("data-error");
    form["birthdate"].parentNode.removeAttribute("data-error-visible");
  }
  // Verification du nombre de tournois
  if (quantity.trim() === "") {
    form["quantity"].parentNode.setAttribute("data-error", "Veuillez entrer le nombre de tournois GameOn auquel vous avez participé");
    form["quantity"].parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    form["quantity"].parentNode.removeAttribute("data-error");
    form["quantity"].parentNode.removeAttribute("data-error-visible");
  }
  // Verification que l'un des radiobtn soit check 
  if (!radioCheck) {
    form["location1"].parentNode.setAttribute("data-error", "Veuillez choisir une ville");
    form["location1"].parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    form["location1"].parentNode.removeAttribute("data-error");
    form["location1"].parentNode.removeAttribute("data-error-visible");
  }

  // Verification que les conditions d'utilisation soit check 
  if (!checkbox) {
    form["checkbox1"].parentNode.setAttribute("data-error", "Veuillez acceptez les conditions d'utilisation.");
    form["checkbox1"].parentNode.setAttribute("data-error-visible", true);
    error = true;
  } else {
    form["checkbox1"].parentNode.removeAttribute("data-error");
    form["checkbox1"].parentNode.removeAttribute("data-error-visible");
  }
  // Si pas d'error afficher le menu de validation  
  if (!error) {
    form.style.display = "none";
    txtValidation.style.display = 'block';
    btnValidation.style.display = 'block';
  }
  // Quand page fermer submit du formulaire   
  btnValidation.addEventListener("click", function () {
    form.submit();
  });
}


const form = document.forms["reserve"];
if (form) {
  form.addEventListener("submit", validate);
}
