for (let element of document.querySelectorAll('*')) {
  element.addEventListener(
    'click',
    (e) => alert(`캡처링 ${element.tagName}`),
    true // 세 번째 매개변수를 줌으로 이벤트 캡쳐링을 생성함
  );
  element.addEventListener('click', (e) => alert(`버블링 ${element.tagName}`));
}
