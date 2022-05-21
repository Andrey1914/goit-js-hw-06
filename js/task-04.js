// Создай переменную counterValue в которой будет храниться
//  текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение счетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const counterBtn = {
  increment: document.querySelector("[data-action='increment']"),
  decrement: document.querySelector("[data-action='decrement']"),
  value: document.querySelector("#value"),
};

counterBtn.increment.addEventListener("click", clickBtnIncr);
counterBtn.decrement.addEventListener("click", clickBtnDecr);

function clickBtnIncr() {
  counterValue += 1;
  counterBtn.value.textContent = counterValue;
}

function clickBtnDecr() {
  counterValue -= 1;
  counterBtn.value.textContent = counterValue;
}
