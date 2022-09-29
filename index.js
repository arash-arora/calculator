function add() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  console.log(num1 + num2);
  document.getElementById("ans").innerHTML = num1 + num2;
}
function sub() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  console.log(num1 - num2);
  document.getElementById("ans").innerHTML = num1 - num2;
}
function mul() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  console.log(num1 * num2);
  document.getElementById("ans").innerHTML = num1 * num2;
}
function div() {
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  console.log(num1 / num2);
  document.getElementById("ans").innerHTML = num1 / num2;
}
