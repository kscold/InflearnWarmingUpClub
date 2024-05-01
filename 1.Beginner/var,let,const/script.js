// var의 경우 중복선언이 가능하고 재할당이 가능함
/* var greeting = 'hello';
console.log(greeting); // hello

var greeting = 'hi';
console.log(greeting); // hi

var greeting = 'how are you';
console.log(greeting); // how are you */

// let의 경우 중복선언이 불가하고 재할당이 가능함
/* let greeting = 'hello';
console.log(greeting); // hello

// let greeting = "hi"; // 오류
greeting = 'hi';
console.log(greeting); // hi
 */

// const의 경우 중복선언이 불가하고 재할당이 불가함
/* const greeting = 'hello';
console.log(greeting); */

// greeting = 'hi'; // Uncaught TypeError: Assignment to constant variable. 오류

// var 함수 레벨 스코프(함수 안에서는 상관없이 사용가능)
/* function func() {
  if (true) {
    var a = 'a';
    console.log(a);
  }
  console.log(a);
}

// console.log(a); // 에러 함수 레벨 스코프이기 때문

func(); */

// let, const는 black 레벨 스코프
/* function func() {
  if (true) {
    let a = 'a';
    console.log(a);
  }
  //   console.log(a); // 애러 블럭 레벨이기 때문
}

func(); */

console.log(greeting);

var greeting = 'hello'; // undefined가 나옴(선언 단계)
// let greeting = 'hello'; //
