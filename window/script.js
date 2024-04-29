let val;

val = window.outerHeight; // 전체 높이
val = window.outerWidth; // 전체 넓이

val = window.innerHeight; // 화면만의 높이
val = window.innerWidth; // 화면만의 넓이

val = window.screenY; // 현재 세로 스크롤 좌표
val = window.screenX; // 현재 가로 스크롤 좌표

val = window.location; // url에 대한 정보

// window.location.href = 'https://www.google.com'; // 바로 이동 가능

// window.history.forward() // 앞으로 가기
// window.history.back() // 뒤로 가기
// window.navigater // 브라우저의 정보가 포함되어 있는 객체

console.log(val);
