// element 생성
const li = document.createElement('li');

// 클래스 추가하기
li.className = 'list-group-item';

// id 추가하기
li.id = 'new-item';

li.setAttribute('name', 'New list item'); // name 속성을 추가

// link element 생성하기
const link = document.createElement('a');

link.className = 'alarm-item'; // class를 설정

link.innerHTML = '<i class="bi-alarm"></i>'; // HTML 태그를 설정

li.appendChild(link);

document.querySelector('ul.list-group').appendChild(li);
