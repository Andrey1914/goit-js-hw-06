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

const firstItem = document.createElement("li");
firstItem.textContent = "Potatoes";
firstItem.classList.add("item");
console.log(firstItem);

const secondItem = document.createElement("li");
secondItem.textContent = "Mushrooms";
secondItem.classList.add("item");
console.log(secondItem);

const thirdItem = document.createElement("li");
thirdItem.textContent = "Garlic";
thirdItem.classList.add("item");
console.log(thirdItem);

const fourthItem = document.createElement("li");
fourthItem.textContent = "Tomatos";
fourthItem.classList.add("item");
console.log(fourthItem);

const fifthItem = document.createElement("li");
fifthItem.textContent = "Herbs";
fifthItem.classList.add("item");
console.log(fifthItem);

const sixthItem = document.createElement("li");
sixthItem.textContent = "Condiments";
sixthItem.classList.add("item");
console.log(sixthItem);

const ulIngredients = document.querySelector("#ingredients");
ulIngredients.append(
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  fifthItem,
  sixthItem
);
