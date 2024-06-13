const password = document.querySelector("#password");
const confirmedPassword = document.querySelector("#conf_password");
const match = document.querySelector("#match");
const email = document.getElementById("email");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const number = document.getElementById("phone_number");

if (confirmedPassword.value === "" || password.value === "") {
  showMismatchPassword();
}

if (confirmedPassword) {
  confirmedPassword.addEventListener("input", checkPassword);
}

function checkPassword() {
  if (confirmedPassword.value === password.value) {
    matchPassword();
  } else {
    showMismatchPassword();
  }
}

function matchPassword() {
  match.textContent = "";
  confirmedPassword.classList.remove("invalid");
  password.classList.remove("invalid");
}

function showMismatchPassword() {
  match.textContent = "*Passwords do not match";
  confirmedPassword.classList.add("invalid");
  password.classList.add("invalid");
}

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

password.addEventListener("input", (event) => {
  checkPasswordLength(password);
});

confirmedPassword.addEventListener("input", (event) => {
  checkPasswordLength(confirmedPassword);
});

function checkPasswordLength(password) {
  if (password.validity.tooShort) {
    password.setCustomValidity("Password must be minimum 6 characters");
  } else {
    password.setCustomValidity("");
  }
}

function checkEmptyName(name, value) {
  if (value.trim() === "") {
    name.setCustomValidity("The field is empty");
  }
}

firstName.addEventListener("change", (event) => {
  checkEmptyName(firstName, event.target.value);
});

lastName.addEventListener("change", (event) => {
  checkEmptyName(lastName, event.target.value);
});
