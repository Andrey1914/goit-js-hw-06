// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector(".ingredients");
const liItem = document.createElement("li");
liItem.textContent = "Potatoes";
liItem.classList.add("item");
ulIngredients.append(liItem);

// console.log(liItem);

// const ulIngredients = document.querySelector(".ingredients");

// ulIngredients.appendChild(liItem);
