const username = document.getElementById("username");
      const password = document.getElementById("password");
      const confirm = document.getElementById("confirm-password");
      let showEye = document.getElementById("show-eye");
      let hideEye = document.getElementById("hide-eye");
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
        if (confirm.type === "password") {
          confirm.type = "text";
          hideEye1.style.display = "block";
          showEye1.style.display = "none";
        }
      }
      function hidePassword1() {
        if (confirm.type === "text") {
          confirm.type = "password";
          hideEye1.style.display = "none";
          showEye1.style.display = "block";
        }
      }
      
        function check() {
           if (username.value.length < 8 || username.value.length > 20) {
            document.getElementById("username-error").style.display = "block";
          } else{
            document.getElementById("username-error").style.display = "none";
          }  if (password.value.length < 6 || password.value.length > 32) {
            document.getElementById("password-error").style.display = "block";
          } else {
            document.getElementById("password-error").style.display = "none";
          } if (confirm.value == password.value) {
            document.getElementById("confirm-error").style.display = "none";
          } else {
            document.getElementById("confirm-error").style.display = "block";
          } if (username.value.length >= 8 &&
                username.value.length <= 20 &&
                password.value.length >= 6 &&
                password.value.length < 32 &&
                confirm.value == password.value){
            document.querySelector(".wrapper").innerHTML = `<div style = "height: 200px; text-align: center; padding-top: 30px;"><h2 style = "padding-bottom: 30px; color: green"><i class="fas fa-check-circle"></i>Đăng Kí Thành Công</h2><a href='login.html'><button>Quay Lại Đăng Nhập</button></a></div>`
          }
        } 