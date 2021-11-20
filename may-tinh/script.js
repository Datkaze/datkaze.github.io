let calculation = document.getElementById("show");

function ac(){
  calculation.innerText = "";
  }
  function math(number){
    calculation.innerText += number;
  }
  function equal(){
    let result = calculation.innerHTML.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("^", "**2").replaceAll("%", "/100");
   calculation.innerHTML = eval(result).toFixed(2).replace(/\.?0*$/g, '');
  }


  

  // function remainder(x) {
  //   let remainderResult = [];
  //   for (let i = 0; i < x.length; i++) {
  //     remainderResult.push(x[i] % 2);
  //   }
  //   return remainderResult;
  // }