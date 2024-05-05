/* let x = 0;
const numberUp = () => (x += 1);

console.log(numberUp()); // 1
console.log(x); // 1 0이 나와야하는데 사이트 이펙트가 발생하여 1이 나옴 */

/* let x = 0;
const pureNumberUp = (num) => (num += 1);

console.log(pureNumberUp(x)); // 1
console.log(x); // 0 사이드 이펙트가 발생하지 않음
*/

const alphabetArray = ['A', 'B'];

/* const addItemToArray = (originalArray, newItem) => {
  originalArray.push(newItem);
  return originalArray;
};

console.log(addItemToArray(alphabetArray, 'C')); // ['A', 'B', 'C']
console.log(alphabetArray); // ['A', 'B', 'C'] 사이트 이펙트 발생 */

const pureAddItemToArray = (originalArray, newItem) => {
  return [...originalArray, newItem]; // 확산연사자로 불변성 유지
};

console.log(pureAddItemToArray(alphabetArray, 'C')); // ['A', 'B', 'C']
console.log(alphabetArray); // ['A', 'B']
