let calculation = document.getElementById("show");

function ac(){
  calculation.innerText = "";
  }
  function number0() {
    calculation.innerText += "0";
  }
  function number1() {
    calculation.innerText += "1";
  }
  function number2() {
    calculation.innerText += "2";
  }
  function number3() {
    calculation.innerText += "3";
  }
  function number4() {
    calculation.innerText += "4";
  }
  function number5() {
    calculation.innerText += "5";
  }
  function number6() {
    calculation.innerText += "6";
  }
  function number7() {
    calculation.innerText += "7";
  }
  function number8() {
    calculation.innerText += "8";
  }
  function number9() {
    calculation.innerText += "9";
  }
  function dot() {
    calculation.innerText += ".";
  }
  function percent() {
    calculation.innerText += "%";
  }
  function square() {
   x = calculation.innerText += "^"
  }
  function especially1() {
    calculation.innerText += "+";
  }
  function especially2(){
    calculation.innerText += "-";
  }
  function especially3(){
    calculation.innerText += "×";
  }
  function especially4(){
    calculation.innerText += "÷";
  }
  function equal(){
    let result = calculation.innerHTML.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("^", "**2");
   calculation.innerHTML = eval(result).toFixed(2).replace(/\.?0*$/g, '');
  }


  

  // function remainder(x) {
  //   let remainderResult = [];
  //   for (let i = 0; i < x.length; i++) {
  //     remainderResult.push(x[i] % 2);
  //   }
  //   return remainderResult;
  // }