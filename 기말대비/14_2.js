var sUnit = document.querySelector("#s-unit");
var tUnit = document.querySelector("#t-unit");
var cToF = true; // 섭씨에서 화씨로 전환

var source = document.querySelector("#s-value");
var target = document.querySelector("#t-value");

function exUnit() {
  source.value = ""; // 왼쪽 텍스트 필드 값 지움
  target.value = ""; // 오른쪽 텍스트 필드 값 지움

  if (cToF) {
    // 현재 섭씨에서 화씨로 변환 상태라면
    cToF = false;
    sUnit.innerHTML = "&#8457";
    tUnit.innerHTML = "&#8451";
  } else {
    // 현재 화씨에서 섭씨 변환 상태라면
    cToF = true;
    sUnit.innerHTML = "&#8451";
    tUnit.innerHTML = "&#8457";
  }
}

function converter() {
  if (cToF) {
    target.value = (source.value * 1.8 + 32).toFixed(1);
  } else {
    target.value = ((source.value - 32) / 1.8).toFixed(1); // toFixed()는 소수점 이하 몇 번째 자리까지 표시할 것인지 지정할 수 있음.
  }
}
