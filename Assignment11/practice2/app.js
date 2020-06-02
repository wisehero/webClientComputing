var initPrice = 24000;

const total = document.querySelector("#sum");
total.innerHTML = initPrice + "원";

function check(box) {
  if (box.checked == true) {
    initPrice += parseInt(box.value);
    total.innerHTML = initPrice + "원";
  } else if (box.checked == false) {
    initPrice -= parseInt(box.value);
    total.innerHTML = initPrice + "원";
  }
}
