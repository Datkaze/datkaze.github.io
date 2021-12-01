document.getElementById("calc").addEventListener("submit", calculate); 	
	
function calculate(e){
var radios = document.getElementsByName('gender');
var height = Number(document.getElementById("num1").value);
var weight = Number(document.getElementById("num2").value);
var height2 = height * height;
var bmi = (weight / height2)*10000;	
        e.preventDefault();
        document.getElementById("result").innerHTML = bmi.toFixed(2);
    for (var i = 0, length = radios.length; i < length; i++)
{
 if (radios[i].checked)
 {
    break;
 }
}
if (radios[i].value == 0){
      
  if(bmi <= 18.5) {
        document.getElementById("message").innerHTML = "Thiếu cân!";
     return;
    }
        else if (bmi <= 24.9) {
        document.getElementById("message").innerHTML = "Cân nặng bình thường!";
    return;
    }
    
  else if (bmi <= 27.3) {
        document.getElementById("message").innerHTML = "Thừa cân cấp độ 1";
    return;
    }
    
  else if (bmi <= 32.3) {
        document.getElementById("message").innerHTML = "Thừa cân cấp độ 2";
    return;
    }
    
  else if (bmi <= 45.0) {
        document.getElementById("message").innerHTML = "Béo phì!";
    return;
    }
    
  else if (bmi => 45.1) {
        document.getElementById("message").innerHTML = "Chúa tể béo phì!";
    return;
    } 
  }
    else{
            if (bmi <= 20.5) {
        document.getElementById("message").innerHTML = "Thiếu cân!";
     return;
    }
   else if (bmi <= 25.9) {
        document.getElementById("message").innerHTML = "Cân nặng bình thường!";
    return;
    }
    
   else if (bmi <= 29.3) {
        document.getElementById("message").innerHTML = "Thừa cân cấp độ 1";
    return;
    }
    
   else if (bmi <= 34.3) {
        document.getElementById("message").innerHTML = "Thừa cân cấp độ 2";
    return;
    }
    
  else if (bmi <= 45.0) {
        document.getElementById("message").innerHTML = "Béo phì!";
    return;
    }
    
  else if (bmi => 45.1) {
        document.getElementById("message").innerHTML = "Chúa tể béo phì!";
    return;
    } 		
 }
}

