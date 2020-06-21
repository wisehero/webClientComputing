// 이미지 바꾸기
document.querySelector("#c-img > img").getAttribute("src");
document.querySelector("#c-img > img").setAttribute("src", "imgaes/girl.png");

// 큰 이미지와 작은 이미지 바꾸기

var bigPic = document.querySelector("#book");
var smallPics = document.querySelectorAll(".small");

for (var i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic); // 이벤트 등록
}

function changePic() {
  var newPic = this.src; // 클릭된 이미지의 src 속성을 가져옴
  bigPic.setAttribute("src", newPic); // newPic 값을 큰 이미지의 src 속성에 할당
}

// 책 상세정보 감추기

var isOpen = false;
var view = document.querySelector("#view");

view.addEventListener("click", function () {
  if (isOpen == false) {
    document.querySelector("#detail").getElementsByClassName.display = "block";
    // 상세 정보를 화면에 표시
    view.innerHTML = "상세 설명 닫기";
    isOpen = true;
  } else {
    document.querySelector("#detail").getElementsByClassName.display = "none";
    view.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
});

//요소 노드 만들기

var newP = document.createElement("p");

//텍스트 노트 만들기

var newText = document.createTextNode("수강신청이 완료되었습니다.");

//자식 노드로 추가하기

newP.appendChild(newText);
document.body.appendChild(newP);

// 속성 노드 만들기

var attr = document.createAttribute("class");
attr.value = "accent";

// 속성 노드 연결하기

newP.setAttributeNode(attr);

// 맨 위에 이름 추가하기

function newRegister() {
  var newP = document.createElement("p");
  var userName = document.querySelector("#userName");
  var newText = document.createTextNode(userName.value);
  newP.appendChild(newText);

  var nameList = document.querySelector("#nameList");
  nameList.appendChild(newP);
  userName.value = "";
}

// 자식 노드 확인하기

document.querySelector("p")[0].hasChildNodes();

// 자식 노드에 접근하기
// 요소 노드만 가져옴
document.querySelector("#nameList").children;

//원하는 위치에 노드 삽입하기

insertBefore()

// 첫 번째 인수는 추가하는 노드
// 두 번째 인수는 기준이 되는 노드

//특정 노드 삭제하기

removeChild() // 노드는 스스로 자신을 삭제할 수 없기 때문에 부모 노드에 접근한 후 부모 노드에서 삭제해야함


