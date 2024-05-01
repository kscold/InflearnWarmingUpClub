// 동적 타입임을 확인
/* let foo = 42; // 타입은 Number임을 확인
foo = 'bar'; // 타입은 String임을 확인
foo = true; // 타입은 boolean임을 확인

console.log(typeof foo); */

// 원시 타입
// String
const name = 'han';
// Number
const age = 30;
// Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
  province: '경기도',
  city: '성남시',
};

console.log(typeof hobbies); // 배열도 내부적으로 객체이기 때문에 typeof로는 Object라고 나옴
console.log(Array.isArray(hobbies)); // 따라서 정적 메서드인 Array.isArray()로 확인해야 함
