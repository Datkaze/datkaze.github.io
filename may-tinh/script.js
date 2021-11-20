const calculation = document.getElementById("show");

function ac(){
  calculation.innerText = "";
  }
  function math(number){
    calculation.innerText += number;
  }
  function equal(){
    let result = calculation.innerHTML.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("^", "**2").replaceAll("%", "/100");
   calculation.innerHTML = eval(result);
  }
