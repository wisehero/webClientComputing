const userProfile = document.querySelector(".user-profile-data"),
    accent = userProfile.querySelector(".accent"),
    afterHundred = userProfile.querySelector(".after-hundred"),
    passedDay = userProfile.querySelector(".passedDay"),
    passedDayDate = userProfile.querySelector(".passedDay-date");



function getTime() {
    now = new Date();
    born = new Date(1996, 04, 04); // 태어난 날짜 
    day = 24 * 60 * 60 * 1000; // 일 계산을 위한 변수 

    // 100일 후를 계산하는 변수의 경우 생년월일에 시간을 초기화 해주지 않음에 따른 오차를 보정하기 위해 99일을 더해준다.
    addHundred = new Date(born.getTime() + (99 * day));
    setDate();
}

function setDate() {
    accent.innerHTML = parseInt((now.getTime() - born.getTime()) / day + 1) + "일"; //실제 날짜단위 계산에 오차가 생겨서 1일을 더해 보정
    afterHundred.innerHTML = addHundred.getFullYear() + "년 " + (addHundred.getMonth() + 1) + "월 " + addHundred.getDate() + "일";
    passedDay.innerHTML = parseInt((now.getTime() - born.getTime()) / day + 1) + "일 후 ";
    passedDayDate.innerHTML = now.getFullYear() + "년 " + (now.getMonth() + 1) + "월 " + now.getDate() + "일";
}



function init() {
    getTime();
}

init();



