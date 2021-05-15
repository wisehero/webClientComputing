var gnum = document.querySelector("#num");
var check = document.querySelector("#guess");
var again = document.querySelector("#refresh");
var res = document.querySelector("#result > h2");
var cNum = document.querySelector("#countNum");
var count = 0;
var randomNum = Math.floor(Math.random() * 45 + 1);

again.addEventListener("click", refresh);

check.addEventListener("click", Updown);

function Updown() {
  if (gnum.value > randomNum) {
    res.innerHTML = "DOWN!";
  } else if (gnum.value < randomNum) {
    res.innerHTML = "UP!";
  } else if (gnum.value == randomNum) {
    res.innerHTML = "정답입니다.";
  }
  count += 1;
  cNum.innerHTML = "시도 횟수 : " + count + "회";
}

function refresh() {
  count = 0;
  res.innerHTML = "";
  gnum.value = "";
  cNum.innerHTML = "";
}
