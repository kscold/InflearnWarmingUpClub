/* // 이벤트 위임이 들어가 있지 않은 코드
const buttons = document.getElementsByClassName('buttonClass');

for (const button of buttons) {
  button.addEventListener('click', () => {
    alert('clicked');
  });
}

const buttonList = document.querySelector('#buttons');
const button = document.createElement('button');
button.setAttribute('class', 'buttonClass');

button.innerText = 'Click me';
buttonList.appendChild(button);
 */

// const buttons = document.getElementsByClassName('buttonClass');

// 이벤트 위임이 들어가 있는 코드
const buttonList = document.querySelector('#buttons');

buttons.addEventListener('click', () => {
  alert('clicked');
});

const button = document.createElement('button');
button.setAttribute('class', 'buttonClass');

button.innerText = 'Click me';
buttonList.appendChild(button);
