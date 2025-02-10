console.log("Task 1");
const categories = document.querySelectorAll("ul#categories > li.item");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul > li").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});

console.log("Task 2");
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  fragment.appendChild(li);
});

ingredientsList.appendChild(fragment);

console.log("Task 3");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.getElementById("gallery");

const markup = images
  .map(
    (image) => `
    <li class="gallery-item">
        <img src="${image.url}" alt="${image.alt}">
    </li>
`
  )
  .join("");


let counterValue = 0;

const valueEl = document.getElementById("value");
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");

