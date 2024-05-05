const count = 20;

let itemIndex = 0;

const observer = new IntersectionObserver(
  (entries) => {
    console.log('entries', entries);
    entries.forEach((entry) => {
      const list = document.querySelector('.list');
      ㅋ;

      if (entry.isIntersecting) {
        for (let i = itemIndex; i < itemIndex + count; i++) {
          let item = document.createElement('p');

          item.textContent = i;
          item.className += 'item';
          list.appendChild(item);
        }

        itemIndex = itemIndex + count;
      }
    });
  },
  { root: null, threshold: 0.1 } // 10%만 교차를 해도 호출이 됨
);

observer.observe(document.querySelector('.end')); // 감시할 태그를 선택
// 뷰 포트 안에 있으면 isIntersecting이 true 즉, intersectionRatio: 1일 때
