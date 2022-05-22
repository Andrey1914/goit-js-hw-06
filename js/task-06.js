// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("#validation-input");
textInput.addEventListener("blur", lostFocus);

function lostFocus(event) {
  const inputCurrent = event.currentTarget;
  const inputLength = Number(inputCurrent.dataset.length);
  if (inputCurrent.value.length === inputLength) {
    inputCurrent.classList.remove("invalid");
    inputCurrent.classList.add("valid");
  } else {
    inputCurrent.classList.remove("valid");
    inputCurrent.classList.add("invalid");
  }
}
