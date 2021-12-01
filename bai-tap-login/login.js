const username = document.getElementById("username");
const password = document.getElementById("password");
let showEye = document.getElementById("show-eye");
let hideEye = document.getElementById("hide-eye");

function showPassword() {
  if (password.type === "password") {
    password.type = "text";
    hideEye.style.display = "block";
    showEye.style.display = "none";
  }
}
function hidePassword() {
  if (password.type === "text") {
    password.type = "password";
    hideEye.style.display = "none";
    showEye.style.display = "block";
  }
}
function check() {
  if (username.value.length < 8 || username.value.length > 20) {
    document.getElementById("username-error").style.display = "block";
  } else {
    document.getElementById("username-error").style.display = "none";
  }
  if (password.value.length < 6 || password.value.length > 32) {
    document.getElementById("password-error").style.display = "block";
  } else {
    document.getElementById("password-error").style.display = "none";
  }
  if (
    username.value.length >= 8 &&
    username.value.length <= 20 &&
    password.value.length >= 6 &&
    password.value.length < 32
  ) {
    document.getElementById("dntc").style.display = "block";
  } else{
    document.getElementById("dntc").style.display = "none";
  }
}