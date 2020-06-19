var text = [
  "파란 자전거를 타고 서울, 대전, 대구, 부산 찍고, 목포, 인천을 거쳐 달린다",
  "각 장르별로 20권씩 읽기",
  "자바 기초 공부한 뒤 인강으로 공부",
  "개발자 커뮤니티 및 인강으로 코어 자바스크립트 좀 더 공부하기",
]; // 툴팁에 보이고 싶은 텍스트를 배열에 정리

var textDiv;

function init() {
  textDiv = document.getElementById("textDiv");
  var liArray = document.getElementsByTagName("li");

  // 각 li에 마우스를 올렸을 때와 아닐 때 이벤트를 등록
  for (i = 0; i < liArray.length; i++) {
    liArray[i].onmouseover = over;
    liArray[i].onmouseout = hide;
  }
}

function over(e) {
  var n = 0;
  switch (e.target.id) {
    case "0":
      n = 0;
      break;
    case "1":
      n = 1;
      break;
    case "2":
      n = 2;
      break;
    case "3":
      n = 3;
      break;
  }

  settextDiv(text[n], e);
}

function settextDiv(text, e) {
  textDiv.innerHTML = text;
  textDiv.style.backgroundColor = "aliceblue";
  textDiv.style.left = e.x + "px";
  textDiv.style.right = e.y + "px";
  textDiv.style.visibility = "visible";
  textDiv.style.width = "150px";
  textDiv.style.height = "100px";
}

function hide() {
  textDiv.style.visibility = "hidden";
}

init();
