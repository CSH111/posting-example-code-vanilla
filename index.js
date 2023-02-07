const firstNumberElem = document.querySelector(".number");
const secondNumberElem = document.querySelector(".second-number");
const buttonElem = document.querySelector(".add-button");

function add(elem) {
  elem.innerText++;
}

function createThrottle() {
  const timeoutRef = { id: null };
  const throttle = (fn, timeout = 500) => {
    if (timeoutRef.id) {
      return;
    }
    fn();
    timeoutRef.id = setTimeout(() => {
      timeoutRef.id = null;
    }, timeout);
  };

  return throttle;
}

const firstThrottle = createThrottle();

function handleFirstNumberClick() {
  firstThrottle(() => add(firstNumberElem));
}

const secondThrottle = createThrottle();

function handleSecondNumberClick() {
  secondThrottle(() => add(secondNumberElem));
}

function initFirstNumberClickEvent() {
  buttonElem.addEventListener("click", handleFirstNumberClick);
}

function initSecondNumberClickEvent() {
  buttonElem.addEventListener("click", handleSecondNumberClick);
}

initFirstNumberClickEvent();
initSecondNumberClickEvent();
