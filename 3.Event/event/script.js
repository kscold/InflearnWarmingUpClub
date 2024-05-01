/* // 문서가 load 될 때 이 함수를 실행
window.onload = function () {
  let text = document.getElementById('text'); // 아이디가 text인 요소를 반환

  text.innerText = 'HTML 문서 loaded'; // text를 바꿈
};

const aElement = document.querySelector('a'); // a 태그를 모든 선택

aElement.addEventListener('click', () => {
  alert('a element click');
}); */

/* const buttonElement = document.querySelector('.btn2');

buttonElement.addEventListener('click', (e) => {
  let val;

  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList; // class 속성을 스페이스를 기준으로 리스트로 만들어줌

  val = e.type; // click

  val = e.clientY; // 윈도우로부터의 거리 좌표
  val = e.offsetY; // 요소로부터의 거리 좌표

  console.log(val);
}); */

/* const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');

const title = document.querySelector('h2');

// Event
submitBtn.addEventListener('click', handleEvent);
submitBtn.addEventListener('dblclick', handleEvent);
submitBtn.addEventListener('mousedown', handleEvent);
submitBtn.addEventListener('mouseup', handleEvent);
submitBtn.addEventListener('mouseenter', handleEvent);
submitBtn.addEventListener('mouseleave', handleEvent);
submitBtn.addEventListener('mousemove', handleEvent); */

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// form 이벤트
form.addEventListener('submit', handleEvent);
// emailInput.addEventListener('keydown', handleEvent); // 키를 누를 때 동작
// emailInput.addEventListener('keyup', handleEvent); // 키를 투르고 났을 때 동작
emailInput.addEventListener('keypress', handleEvent); // 키를 눌렀을 때 동작
emailInput.addEventListener('focus', handleEvent); // 포커스가 가능하게 됨
emailInput.addEventListener('blur', handleEvent); // 포커스가 되었다가 밖으로 나가면 동작하게 됨
emailInput.addEventListener('cut', handleEvent); // 잘나내기할 때 동작
emailInput.addEventListener('paste', handleEvent); // 붙여넣기할 때 동작
emailInput.addEventListener('input', handleEvent); // 요소를 입력할 때 동작

function handleEvent(e) {
  // form 데이터일 때만 검출하기위해
  if (e.type === 'submit') {
    // 만약 e.preventDefault가 if문 밖에 있었다면 emailInput.addEventListener가 동작하지 않았음
    e.preventDefault();
  }
  console.log(`Event Type: ${e.type}`);
  title.textContent = e.target.value;
}
