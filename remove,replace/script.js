const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');

// 요소 지우기
// listParent.removeChild(list[1]);

// 요소 교체하기
const oldElement = document.getElementById('A'); // id가 A인 태그를 선택
const newElement = document.createElement('span'); // 새로운 span 태그를 선택

newElement.textContent = 'hi'; // span 태그에 내용을 hi로 설정

oldElement.parentNode.replaceChild(newElement, oldElement); // id가 A인 태그의 부모 태그로 이동해서 oldElement를 newElement로 바꿈
