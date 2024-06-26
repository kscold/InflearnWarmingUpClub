/* function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer function' + outerVariable);
    console.log('Inner function' + innerVariable);
  };
}

const newFunction = outerFunction('outside'); // 바로 outerFunction('outside')가 호출됨
console.log('New function' + newFunction);
newFunction('inside'); // 이미 outerFunction이 호출이 되었는대로 불구하고 또 호출을 할 수 있음
 */

// 외부 함수에서 내부 함수로 접근할 수 있는 것을 closure라고 함
let a = 'a';

function functionA() {
  let b = 'b';

  function functionB() {
    let c = 'c';
    console.log(a, b, c);
  }
  functionB();
  console.log(a, b);
}

functionA();
