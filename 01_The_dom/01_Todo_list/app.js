const todoArray = [
  "Study",
  "Buy groceries",
  "pay credit card bills",
  "Call friends",
  "Cook Dinner",
];

const ul = document.querySelector("ul");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  if (todoArray.length != 0) {
    ul.innerHTML += `<li>${todoArray.pop()}</li>`;
  }
});

// const itmes = document.querySelectorAll("li");
// itmes.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    todoArray.push(e.target.textContent);
    e.target.remove();
  }
});
