/* // call()
const funllName = function (city, country) {
  console.log(this.firstName + ' ' + this.lastName);
};

const person1 = {
  firstName: 'John',
  lastName: 'Smith',
};

funllName.call(person1, 'Oslo', 'Norway'); */

/* // apply()는 배열로 만듬
const fullName = function (city, country) {
  console.log(this.firstName + ' ' + this.lastName, city, country);
};

const person1 = {
  firstName: 'John',
  lastName: 'Smith',
};

fullName.apply(person1, ['Oslo', 'Norway']); */

// bind()
function func(language) {
  if (language === 'kor') {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: '안녕',
  engGreeting: 'Hello',
};

const boundFunc = func.bind(greeting); // 바인딩만 시키지 바로 실행시키지 않음
boundFunc('kor');
