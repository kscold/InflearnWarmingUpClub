const form = document.querySelector('form');
const div = document.querySelector('div');
const p = document.querySelector('p');

form.onclick = function (event) {
  // event.target 실제 이벤트가 시작된 타겟 요소
  event.target.style.backgroundColor = 'yellow';

  setTimeout(() => {
    // this.tagName현재 객체의 tagName으로 태그 이름을 가져옴
    alert('target = ' + event.target.tagName + ', this = ' + this.tagName);

    event.target.style.backgroundColor = '';
  }, 0);
};
