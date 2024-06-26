/* // 이 함수만 엄격한 모드로 사용가능
function sum(a, b) {
    'use strict';
    return a + b;
} */

// 아래 예시들은 모드 use strict 모드에서 오류가 발생함
// 'use strict';

function sum(a, b) {
    console.log(this); // window 객체를 가리킴, strict 모드에서는 undefined를 반환
    return a + b;
}

console.log(this); // window 객체를 가리킴
sum(1, 2);
// sum.bind(this)(1, 2); // 만약 해결할려면 bind를 사용해서 해결할 수 있음

/* 'string'.prop = 7;
console.log('string'.prop); */

/* // 반복되는 매개변수 명도 엄격모드에서는 잡아줌
function add(a, a, b) {
    return a + a + b;
}

console.log(add(1, 2, 3));
 */
/* // getter 코드
const obj = {
    get readOnly() {
        return 7;
    },
};

console.log(obj.readOnly);

obj.readOnly = 10;

console.log(obj.readOnly); */

/* const obj = {};

Object.defineProperty(obj, 'readOnly', {
    writable: false,
    value: 7,
});

console.log(obj);

obj.readOnly = 10;

console.log(obj); */

/* undefined = 8;
NaN = 10;

console.log(undefined);
console.log(NaN); */

/* let greeting = 'hello';

greating = 'hi';

console.log(greeting);
console.log(greeting, window.greating); */
