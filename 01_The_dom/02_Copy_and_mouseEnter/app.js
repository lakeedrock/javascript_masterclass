const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => {
  console.log("OI! My content is copyright");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  box.textContent = `x position - ${e.offsetX} y position - ${e.offsetY}`;
});
