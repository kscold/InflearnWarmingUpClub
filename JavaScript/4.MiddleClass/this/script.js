/* // 메서드에서 this는 객체를 가르킴
const audio = {
  title: 'a',
  play() {
    console.log('play this', this);
  },
};

audio.play(); // 'a'를 가르킴

audio.stop = function () {
  console.log('stop this', this);
};

audio.stop(); // 'a'를 가르킴
 */

/* // 함수에서의 this
function playAudio() {
  console.log(this);
}

playAudio(); // 윈도우 객체를 가르킴 */

/* // 생성자 함수에서의 this
function Audio(title) {
  this.title = title;
  console.log(this);
}

const audio = new Audio('a'); // 생성자 this가 없다면 빈 객체 있다면 this랑 연결된 객체를 가르킴 */

/* const audio = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  displayCategories() {
    this.categories.forEach(
      function (category) {
        console.log(`this.title ${this.title}, category: ${category}`);
      },
      { title: 'audio' } // 또는 그냥 this라고 지정해도 됨
    );
  }, // function 키워드의 경우 참조 범위가 전역이므로 this 범위가 달라 undefined가 뜨기 때문에 두 번째 매개변수를 주어 this 값을 정확히 지정할 수 있음
};

audio.displayCategories(); */

// 화살표 함수를 사용(항상 상위 스코프의 this를 가르킴)
const audio = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  displayCategories() {
    this.categories.forEach((category) => {
      console.log(`this.title ${this.title}, category: ${category}`);
    });
  },
};

audio.displayCategories();
