let val;

val = document;

val = document.baseURI; // http://127.0.0.1:5500/document/

val = document.head; // head 태그의 html
val = document.body; // body 태그의 html

val = document.forms; // form 태그들의 반환
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts; // scripts 태그들의 정보 반환(소스코드 추가적으로 브라우저에서 사용되는 것이 들어감)
val = document.scripts[1].getAttribute('src'); // 따라서 하나씩 정확하게 가져올수도 있음
console.log(val);

const headerContainer = document.getElementById('header-container'); // id="header-container"에 접근
// headerContainer.style.display = 'none'; // 접근을 하여 css를 바꿈

// console.log(headerContainer);
headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner TEXT'; // 원래 태그로 들어감
// headerContainer.innerHTML = '<span>Inner HTML</span>'; // html 태그로 넣을 수 있음

const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue'; // 첫번째의 스타일을 blue로 변경함
items[3].textContent = 'Hi'; // 4번재의 내용을 Hi로 변경함

let lists = document.getElementsByTagName('li');
console.log(lists); // 이 경우 collection임

/* lists.forEach((list) => { // forEach 문의 경우 오류가 남
  console.log(list);
}); */

lists = Array.from(lists); // 배열로 변환

console.log(lists); // 이 경우 배열로 변환이 됨

// forEach 문 사용가능
lists.forEach((list, index) => {
  list.textContent = `${index}. List`; // li 태그 내용이 바뀜
});

const liOdd = document.querySelectorAll('li:nth-child(odd)'); // 홀수번째 태그만 선택함

// forEach문을 돌면서 내용을 변경
liOdd.forEach((li) => {
  li.style.background = 'gray';
});
