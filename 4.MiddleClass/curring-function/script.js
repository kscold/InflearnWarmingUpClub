/* const sum = (x, y) => x + y;

const curriedSum = (x) => (y) => x + y;

console.log(sum(10, 20));
// 커링이 된 함수
console.log(curriedSum(10)); // 제대로 호출되지 않고 (y) => x + y 이렇게 호출이 됨
console.log(curriedSum(10)(20)); // 제대로 호출됨 */

/* const makeFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

const hamburger = makeFood('bread')('Ham')('Tomato'); // 세 개의 인자가 제대로 전달되어야 실행됨
console.log(hamburger);

const cleanerMakeFood = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} ${ingredient2} ${ingredient3}`;

const newHamburger = cleanerMakeFood('bread')('Ham')('Tomato');
console.log(newHamburger); */

/* function log(date, importance, message) {
  alert(
    `[${date.getHours()}: ${date.getMinutes()}]: [${importance}], ${message}`
  );
}

// log(new Date(), 'DEBUG', 'some bug');

// 커링함수 이용
// 콜백함수를 인자로 받음
// 그러나 현재 다이나믹하게 커링함수로 변경되지 않음
function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c); // 하나의 함수로 합침
      };
    };
  };
}

const curriedLog = curry(log); // 일반함수를 커링함수로 변경함
curriedLog(new Date())('DEBUG')('some bug'); */

// 다이나믹한 커링 함수
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

const sum = (x, y, z, j, a) => x + y + z + j + a;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4)(5));
