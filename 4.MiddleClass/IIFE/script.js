/* (function () {
  var aName = 'Barry';
})();

// IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가함
console.log(aName); // 외부에서 접근 불가 */

/* // IIFE 내부에서 반환된 값을 바로 대입
var result = (function () {
  var name = 'Barry';
  return name;
})();

console.log(result); */

// (function (a, b) {})();

/* const score = () => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
};

console.log(typeof score); // function
console.log(score);
console.log(score().current());
score().increment(); // 다시 호출됨으로 0임
console.log(score().increment()); */

/* // 따라서 즉시 실행 함수를 이용해야함
const score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

console.log(typeof score); // function
console.log(score);

console.log(score.current());

score.increment();
console.log(score.current());

score.reset();
console.log(score.current()); */

/* const increment = () => {
  let counter = 0;
  console.log(counter);

  const number = (num) => {
    console.log(`it it ${num} number`);
  };

  return () => {
    counter++;
    number(counter);
  };
};

increment();
increment(); // 계속 0이 나오게 됨 */

// 즉시 실행함수로 만들어야 함
const increment = (() => {
  let counter = 0;
  console.log(counter);

  const number = (num) => {
    console.log(`it it ${num} number`);
  };

  return () => {
    counter++;
    number(counter);
  };
})();

console.log(increment);

increment(); // it it 1 number
increment(); // it it 2 number
