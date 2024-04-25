const num1 = 20;
const num2 = 10;

let val;
// 간단한 연산
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.E; // 자연 e
val = Math.PI; // pi
val = Math.round(2.4); // 가장 가까운 정수로 만듬 소수점 자르기ㅇ나됨
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.abs(-5);
val = Math.min(2, 3, 4, 5, 6, 7, 8, -1);
val = Math.max(2, 3, 4, 5, 6, 7, 8);
val = Math.random();

// 1 - 3
val = Math.floor(Math.random() * 3 + 1);

console.log(val);
