/* let val;

// Number to String
val = String(111);
val = String(8 + 4);

// Boolean to String
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4, 5]);

// toString()
val = (5).toString();

console.log(val.length); // String일때는 length를 사용하여 길이를 측정할 수 있음

// String to number
val = Number('1'); // 1
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number([1, 2, 3]); // 배열의 경우 NaN(Not a Number)으로 변환됨

val = parseInt('111.40');
val = parseFloat('111.40');

console.log(val);
console.log(typeof val); */

const val1 = String(2);
const val2 = 3;
const sum = val1 + val2; // 자동적으로 자바스크립트가 val2의 타입을 변경함

console.log(sum);
console.log(typeof sum);
