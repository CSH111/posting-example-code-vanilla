// 잘못됨!

const numberElem = document.querySelector(".number");
const secondNumberElem = document.querySelector(".second-number");
const buttonElem = document.querySelector(".add-button");

let timeoutID;

function throttle(fn, time) {
  if (timeoutID) return;
  timeoutID = setTimeout(() => {
    fn();
    timeoutID = null;
  }, time);
}

function add(elem) {
  elem.innerText++;
}

function handleFirstNumberClick() {
  throttle(() => add(numberElem), 500);
}

function handleSecondNumberClick() {
  throttle(() => add(secondNumberElem), 500);
}

// 두번째 이벤트가 작동하지 않는다.
buttonElem.addEventListener("click", handleFirstNumberClick);
buttonElem.addEventListener("click", handleSecondNumberClick);
