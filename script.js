const password = document.querySelector("#password");
const confirmedPassword = document.querySelector("#conf_password");
const match = document.querySelector("#match");

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
