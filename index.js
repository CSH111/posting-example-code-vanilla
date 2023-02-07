const numberElem = document.querySelector(".number");
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

const throttle = createThrottle();

function handleFirstNumberClick() {
  throttle(() => add(numberElem));
}

function initFirstNumberClickEvent() {
  buttonElem.addEventListener("click", handleFirstNumberClick);
}

initFirstNumberClickEvent();
