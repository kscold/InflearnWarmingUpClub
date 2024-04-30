let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

val = list.childNodes; // childNodes 속성을 통해 자식 트리에 접근할 수 있음
// childNode는 배열이 아닌 반복 가능한(iterable) 유사 배열 객체인 컬렉션임
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3];
val = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - comment node

// 따라서 실제 요소들만 사용하고 싶으면 children를 사용
// children element nodes 반환
val = list.children; // HTML Collection을 반환 (line break 포함이 되지 않음)
val = list.children[1];
list.children[1].textContent = 'hi';

// First child
val = list.firstChild; // text가 반환됨
// list.firstChild === list.childNodes[0]

val = list.firstElementChild;

// Last child
val = list.lastChild;
// console.log(list.lastChild === list.childNodes[list.childNodes.length - 1]); // true
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement; // 실제 요소만
val = listItem.parentElement.parentElement; // div 태그가 반환됨

// next sibling 반환
val = listItem.nextSibling; // #text가 나옴
val = listItem.nextElementSibling; // 다음 엘리먼트 요소
val = listItem.nextElementSibling.nextElementSibling; // 다음 다음 엘리먼트 요소
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; // 다음 다음 이전 엘리먼트 요소

// prvioues sibling 반환
val = listItem.previousSibling; // #text가 나옴
val = list.previousElementSibling; // null이 나옴(처음이기 때문)

console.log('val', val);

// 배열을 순회할 수 있음
for (let node of list.childNodes) {
  console.log(node);
}

// 실제 요소값만 반복(children) 사용
for (let node of list.children) {
  console.log(node);
}

// Array.from을 통해 실제 배열로 변환
console.log(Array.from(list.children));
