const content = document.querySelectorAll("p");
content.forEach((element) => {
  if (element.textContent.includes("error")) {
    element.classList.add("error");
    //element.classList.remove("error"); in case need to remove a class
  } else if (element.textContent.includes("success")) {
    element.classList.add("success");
  }
});

const button = document.querySelector("button");
const title = document.querySelector(".title");
button.addEventListener("click", (e) => {
  title.classList.toggle("highlight");
});
