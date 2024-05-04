/* // shallow copy(얕은 복사)
const aArray = [1, 2, 3]; */

/* // 확산연산자를 이용한 얕은복사
const bArray = [...aArray, 4];

console.log('aArray', aArray);
console.log('bArray', bArray);
console.log('aArray === bArray', aArray === bArray); // false */

/* // Object.assign을 이용한 얕은복사
const cArray = Object.assign([], bArray);
console.log('cArray', cArray);
console.log('bArray === cArray', bArray === cArray); // false */

/* // 중첩된 객체나 배열
cArray.push([5, 6, 7]);
console.log('cArray', cArray);

const dArray = [...cArray, 10];
console.log('dArray', dArray);
dArray[4].push(8); // 불변성 유지가 되지 않기 때문에 cArray도 변경됨
console.log('dArray', dArray);

console.log('cArray', cArray);
console.log('dArray', dArray); */

/* // 얕은 동결
const aObject = {
  a: 'a',
  b: 'b',
  cObject: { a: 1, b: 2 },
};

Object.freeze(aObject); // 변경될 수 없게 만듬
aObject.a = 'c';
console.log('aObject', aObject);

aObject.cObject.a = 3; // 얕은 동결이므로 변경이 됨
console.log('aObject', aObject); */

/* // 깊은 복사 예시
const aObject = {
  a: 'a',
  b: 'b',
  cObject: { a: 1, b: 2 },
};

const newAObject = JSON.parse(JSON.stringify(aObject)); // 깊은 복사를 한다음에 다시 객체 형식으로 parse함

console.log('aObject', aObject); // 얕은 복사를 한 값
console.log('newAObject', newAObject); // 깊은 복사를 한 값

aObject.cObject.a = 3;
console.log('aObject', aObject); // 얕은 복사를 한 값, 변경 됨
console.log('newAObject', newAObject); // 깊은 복사를 한 값, 변경 안됨 */

// 확산연산자를 이용한 깊은 복사 예시
const aObject = {
  a: 'a',
  b: 'b',
  cObject: { a: 1, b: 2 },
};

// 얕은 복사를 2번을 하여 깊은 복사처럼 동작하게 만듬
const newObject = {
  ...aObject,
  cObject: {
    ...aObject.cObject,
  },
};
