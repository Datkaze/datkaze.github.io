const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameRe = document.getElementById("username-re");
const passwordRe = document.getElementById("password-re");
const confirm = document.getElementById("confirm-password-re");
const showEye = document.getElementById("show-eye");
const hideEye = document.getElementById("hide-eye");
let showEye1 = document.getElementById("show-eye1");
let hideEye1 = document.getElementById("hide-eye1");

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

function showPassword1() {
  if (confirm.type === "password-re") {
    confirm.type = "text";
    hideEye1.style.display = "block";
    showEye1.style.display = "none";
  }
}
function hidePassword1() {
  if (confirm.type === "text") {
    confirm.type = "password-re";
    hideEye1.style.display = "none";
    showEye1.style.display = "block";
  }
}


function check() {
  if (username.value.length < 8 || username.value.length > 20) {
    document.getElementById("username-error").style.display = "block";
  } else {
    document.getElementById("username-error").style.display = "none";
  }
  if (password.value.length < 6 || password.value.length > 20) {
    document.getElementById("password-error").style.display = "block";
  } else {
    document.getElementById("password-error").style.display = "none";
  }
  if (
    username.value.length >= 8 &&
    username.value.length <= 20 &&
    password.value.length >= 6 &&
    password.value.length < 20
  ) {
    document.getElementById("dntc").style.display = "block";
  } else{
    document.getElementById("dntc").style.display = "none";
  }
}


function checkRegister() {
  if (usernameRe.value.length < 8 || usernameRe.value.length > 20) {
   document.getElementById("username-error-re").style.display = "block";
 } else{
   document.getElementById("username-error-re").style.display = "none";
 }  if (passwordRe.value.length < 6 || passwordRe.value.length > 20) {
   document.getElementById("password-error-re").style.display = "block";
 } else {
   document.getElementById("password-error-re").style.display = "none";
 } if (confirm.value == passwordRe.value) {
   document.getElementById("confirm-error-re").style.display = "none";
 } else {
   document.getElementById("confirm-error-re").style.display = "block";
 } if (usernameRe.value.length >= 8 &&
       usernameRe.value.length <= 20 &&
       passwordRe.value.length >= 6 &&
       passwordRe.value.length < 20 &&
       confirm.value == passwordRe.value){
        document.getElementById("dntc1").style.display = "block";
      } else{
        document.getElementById("dntc1").style.display = "none";
      }
      
} 

