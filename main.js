//* VARIABLES

const number = document.querySelector(".number");
const title = document.querySelector(".main-text");
const dice = document.querySelector(".dice");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice", { method: "GET", cache: "reload" })
    .then((res) => res.json())
    .then((res) => {
      console.log("click");
      number.innerHTML = res.slip.id;
      title.innerHTML = res.slip.advice;
    });
}

dice.addEventListener("click", getAdvice);

window.onload = getAdvice();
