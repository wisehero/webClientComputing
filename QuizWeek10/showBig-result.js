var bicPic = document.querySelector("#book"); // 큰 이미지
var smallPics = document.querySelectorAll(".small");

for (i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}

function changePic() {
  var newPic = this.src;
  bicPic.setAttribute("src", newPic);
}

var isOpen = false; // 상세정보의 상태 값
var view = document.querySelector("#view");

view.addEventListener("click", function () {
  if (isOpen == false) {
    // 상세정보가 감춰져 있다면
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
    document.querySelector("#detail").style.display = "none";
    view.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
});
