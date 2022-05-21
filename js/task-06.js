// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector("text");
const lenthInput = document.querySelector('[data-lenght="6"]');

function inputValid() {
  textInput === lenthInput;
}

function onInputBlur() {
  textInput !== lenthInput;
}

// textInput.addEventListener("blur", (event) => {
//   if (textInput.event === focusBtn) {
//     inputValidation.valid.event;
//   }
//   inputValidation.invalid.event;
// });
