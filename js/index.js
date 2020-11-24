var remainder_practice = null;
var quotient_practice = null;
var dividend_practice = null;
var divisor_practice = null;

function doMultiplication() {
  var factor1 = document.getElementById("factor1").value;
  var factor2 = document.getElementById("factor2").value;
  if (factor1 == null || factor2 == null || factor1 == "" || factor2 == ""){
    document.getElementById("multiplication_result").innerHTML = "X";
  } else {
  var result = factor1*factor2;
    var element = document.getElementById("multiplication_result");
    element.classList.add("multiplication_result");
    element.innerHTML = result;
    }
}

function doDivision() {
  var dividend = document.getElementById("dividend").value;
  var divisor = document.getElementById("divisor").value;
  if (dividend == null || divisor == null || dividend == "" || divisor == ""){
    document.getElementById("division_result").innerHTML = "X";
  } else {
  //alert(factor1*factor2);
  var quotient = Math.floor(dividend/divisor);
    var remainder = dividend % divisor;
    var element = document.getElementById("division_result");
    element.classList.add("division_result");
    element.innerHTML = quotient + " Sobra: " + remainder;
    }
}

function paint_row_pythagorean_table(){
  var factor = document.getElementById("factor1").value;
  if(factor > 0 && factor <= 10){
  var element = document.getElementById("factor1_" + factor.toString());
  element.style.backgroundColor = "#00DBFF";
  setTimeout(function() {
    // Sacarle el color
    element.style.backgroundColor = "transparent";
    document.getElementById("factor1").value = 0;
  }, 5000 // 5 sec despues
  );
    }
}
// Solved
function paint_column_pythagorean_table(){
  var factor = document.getElementById("factor2").value;
  if(factor > 0 && factor <= 10){
  var element =document.getElementsByClassName("factor2_" + factor.toString());
  for ( var i = 0; i < element.length; i++) {
  element[i].style.backgroundColor = "#FF6666";
    }
  setTimeout(function() {
    // Sacarle el color
    for ( var i = 0; i < element.length; i++) {
  element[i].style.backgroundColor = "transparent";
    }
    document.getElementById("factor2").value = 0;
  }, 5000 // 5 sec despues
  );
  }
}

function paint_row_division_table(){
  var dividend = document.getElementById("dividend").value;
  if(dividend > 0 && dividend <= 10){
  var element = document.getElementById("dividend_" + dividend.toString());
  element.style.backgroundColor = "#00DBFF";
  setTimeout(function() {
    // Sacarle el color
    element.style.backgroundColor = "transparent";
    document.getElementById("dividend").value = 0;
  }, 5000 // 5 sec despues
  );
    }
}

function paint_column_division_table(){
  var divisor = document.getElementById("divisor").value;
  if(divisor > 0 && divisor <= 10){
  var element = document.getElementsByClassName("divisor_" + divisor.toString());
  for ( var i = 0; i < element.length; i++) {
  element[i].style.backgroundColor = "#FF6666";
    }
  setTimeout(function() {
    // Sacarle el color
    for ( var i = 0; i < element.length; i++) {
  element[i].style.backgroundColor = "transparent";
    }
    document.getElementById("divisor").value = 0;
  }, 5000 // 5 sec despues
  );
  }
}

function putDivision(){
  dividend_practice = Math.floor(Math.random() * 100);
  divisor_practice = Math.floor(Math.random() * 10);
  while(divisor_practice <= 1){
    divisor_practice = Math.floor(Math.random() * 10);
  }
  while(dividend_practice < divisor_practice){
    dividend_practice = Math.floor(Math.random() * 100);
  }
  document.getElementById("dividend_practice").innerHTML = dividend_practice;
  document.getElementById("divisor_practice").innerHTML = divisor_practice;
  document.getElementById("quotient_practice").value = 0;
  document.getElementById("remainder_practice").value = 0;
}

function toCorrect(){
  dividend_practice = parseInt(document.getElementById("dividend_practice").innerText);
  divisor_practice = parseInt(document.getElementById("divisor_practice").innerText);
  quotient_practice = document.getElementById("quotient_practice").value;
  remainder_practice = document.getElementById("remainder_practice").value;
  if (remainder_practice == (dividend_practice % divisor_practice) && quotient_practice == Math.floor(dividend_practice/divisor_practice)) {
    document.getElementById("correction").innerHTML = "Bien &#128515;"
  }
  else {
    document.getElementById("correction").innerHTML = "Mal &#128542;"
  }
  document.getElementById("dividend_practice").innerHTML = 0;
  document.getElementById("divisor_practice").innerHTML = 0;
  document.getElementById("quotient_practice").value = 0;
  document.getElementById("remainder_practice").value = 0;
}