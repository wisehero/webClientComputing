var inputValue = document.getElementById("expression");
var resultValue = document.getElementById("result");
function calc() {
  if (event.keyCode === 13) {
    resultValue.value = eval(inputValue.value);
  }
}
