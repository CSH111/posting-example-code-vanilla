const numberElem = document.querySelector(".number");
const buttonElem = document.querySelector(".add-button");

let timer;

buttonElem.addEventListener("click", () => {
  if (timer) return;
  timer = setTimeout(() => {
    numberElem.innerText++;
    timer = null;
  }, 500);
});
